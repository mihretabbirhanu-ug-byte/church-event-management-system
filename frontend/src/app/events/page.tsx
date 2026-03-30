"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/api";
import { clearAuth, getToken, getUser } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

type EventItem = {
  id: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations?: { id: string; userId: string }[];
};

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-700">
      <span className="text-slate-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}






export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "mine">("all");

  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);



  
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const user = getUser();
    setCurrentRole(user?.role ?? null);
    setCurrentUserId(user?.id ?? null);

    const load = async () => {
      try {
        const data = await fetchJson<EventItem[]>("/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load events.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const handleSignOut = () => {
    clearAuth();
    router.push("/sign-in");
  };

  const isRegistered = (event: EventItem) => {
    if (!currentUserId || !event.registrations) {
      return false;
    }
    return event.registrations.some((item) => item.userId === currentUserId);
  };

  const getCurrentUserRegistration = (event: EventItem) => {
    if (!currentUserId || !event.registrations) {
      return null;
    }
    return event.registrations.find((item) => item.userId === currentUserId) ?? null;
  };

  const refreshEvents = async (token: string) => {
    const refreshed = await fetchJson<EventItem[]>("/events", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setEvents(refreshed);
  };

  const handleRegister = async (eventId: string) => {
    const token = getToken();
    if (!token || !currentUserId) {
      router.push("/sign-in");
      return;
    }

    setActionError("");
    setActiveEventId(eventId);
    try {
      const ticketNumber = `TKT-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase()}`;
      await fetchJson("/registrations", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          ticketNumber,
          event: { connect: { id: eventId } },
          user: { connect: { id: currentUserId } },
        },
      });
      await refreshEvents(token);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to register for the event.";
      setActionError(message);
    } finally {
      setActiveEventId(null);
    }
  };

  const handleUnregister = async (event: EventItem) => {
    const token = getToken();
    const registration = getCurrentUserRegistration(event);
    if (!token || !registration) {
      return;
    }

    setActionError("");
    setActiveEventId(event.id);
    try {
      await fetchJson(`/registrations/${registration.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshEvents(token);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to unregister from this event.";
      setActionError(message);
    } finally {
      setActiveEventId(null);
    }
  };

  const filteredEvents = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    const sourceEvents =
      activeTab === "mine" ? events.filter((event) => isRegistered(event)) : events;

    if (!query) {
      return sourceEvents;
    }

    return sourceEvents.filter((event) => {
      const haystack = [
        event.title,
        event.description ?? "",
        event.location ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [activeTab, events, searchText, currentUserId]);

  const myEventsCount = useMemo(() => {
    return events.filter((event) => isRegistered(event)).length;
  }, [events, currentUserId]);

  return (
    <div className="min-h-full bg-zinc-50">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-328 items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="7" y1="10" x2="17" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-semibold leading-tight text-zinc-900">
                  Church Events
                </p>
                <p className="text-sm text-zinc-500">Community Event Portal</p>
              </div>
            </div>
          </div>


          
          <div className="flex flex-wrap gap-3">
            <Link
              href="/me"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              My profile
            </Link>
            <button
              onClick={handleSignOut}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>










      <div className="mx-auto flex w-full max-w-328 flex-col gap-8 px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <header className="space-y-5">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
              Upcoming Church Events
            </h1>
            <p className="mt-2 text-xl text-zinc-600">
              Discover and register for exciting events happening at your church.
            </p>
          </div>

          <div className="inline-flex rounded-2xl border border-zinc-200 bg-zinc-100 p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                activeTab === "all"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
              All Events
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mine")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                activeTab === "mine"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {`My Events (${myEventsCount})`}
            </button>
          </div>
        </header>

        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search events..."
            className="h-12 w-full rounded-xl border border-zinc-200 bg-white pl-12 pr-4 text-sm text-zinc-900 outline-none ring-emerald-200 transition focus:ring-2"
          />
        </div>

        {loading ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="shimmer h-56 w-full" />
                <div className="space-y-4 p-6">
                  <div className="shimmer h-8 w-3/4 rounded-lg" />
                  <div className="space-y-2">
                    <div className="shimmer h-4 w-full rounded-md" />
                    <div className="shimmer h-4 w-5/6 rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <div className="shimmer h-4 w-1/2 rounded-md" />
                    <div className="shimmer h-4 w-2/5 rounded-md" />
                    <div className="shimmer h-4 w-2/3 rounded-md" />
                    <div className="shimmer h-4 w-1/3 rounded-md" />
                  </div>
                  <div className="shimmer h-12 w-full rounded-2xl" />
                </div>
              </article>
            ))}
          </div>
        ) : actionError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {actionError}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No events match your search.
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-3">
            {filteredEvents.map((event) => {
              const registered = isRegistered(event);
              const eventDate = new Date(event.startDate);
              const isBusy = activeEventId === event.id;

              return (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    {registered ? (
                      <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M8 12.5l2.5 2.5L16 9.5" />
                        </svg>
                        Registered
                      </span>
                    ) : null}
                    {event.imageUrl ? (
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-700 via-violet-600 to-cyan-500 px-6 text-center text-2xl font-semibold text-white transition duration-300 group-hover:scale-105">
                        {event.title}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 p-6">
                    <h2 className="line-clamp-1 text-3xl font-bold tracking-tight text-slate-900">
                      {event.title}
                    </h2>

                    <p
                      className="text-sm text-zinc-600"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {event.description || "No description provided."}
                    </p>

                    <div className="space-y-2">
                      <InfoRow
                        icon={
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        }
                        text={eventDate.toLocaleDateString()}
                      />
                      <InfoRow
                        icon={
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="12 7 12 12 15 14" />
                          </svg>
                        }
                        text={eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      />
                      <InfoRow
                        icon={
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        }
                        text={event.location || "No location"}
                      />
                      <InfoRow
                        icon={
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        }
                        text={`${event.registrations?.length ?? 0} registered`}
                      />
                    </div>

                    {currentRole === "MEMBER" ? (
                      <button
                        onClick={(clickEvent) => {
                          clickEvent.preventDefault();
                          if (registered) {
                            handleUnregister(event);
                          } else {
                            handleRegister(event.id);
                          }
                        }}
                        disabled={isBusy}
                        className={`h-12 w-full rounded-2xl text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                          registered
                            ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
                            : "bg-slate-950 text-white hover:bg-slate-900"
                        }`}
                      >
                        {isBusy ? (registered ? "Unregistering..." : "Registering...") : registered ? "Unregister" : "Register now"}
                      </button>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
