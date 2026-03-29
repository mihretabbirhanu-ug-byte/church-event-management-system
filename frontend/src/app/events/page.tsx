"use client";

import { useEffect, useState } from "react";
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

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [activeEventId, setActiveEventId] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

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

  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    const user = getUser();
    setCurrentRole(user?.role ?? null);
    setCurrentUserId(user?.id ?? null);
  }, []);

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

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Events
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              YOUR EVENTS
            </h1>
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
        </header>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading events...
          </div>
        ) : actionError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {actionError}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : events.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No events available yet.
          </div>
        ) : (
          <section className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Upcoming Events</h2>
              <p className="mt-2 text-xl text-slate-600">Discover what&apos;s trending this month.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
                >
                  <div className="relative h-56 w-full bg-slate-900">
                    {event.imageUrl ? (
                      <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-700 via-violet-600 to-cyan-500 px-6 text-center text-2xl font-semibold text-white">
                        {event.title}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 p-6">
                    <p className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">
                      Church event
                    </p>
                    <Link
                      href={`/events/${event.id}`}
                      className="block text-4xl font-bold tracking-tight text-slate-900 hover:text-indigo-700"
                    >
                      {event.title}
                    </Link>

                    <p className="text-xl text-slate-600">
                      {new Date(event.startDate).toLocaleDateString()} ·{" "}
                      {new Date(event.startDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    {event.location ? <p className="text-xl text-slate-600">{event.location}</p> : null}

                    {currentRole === "MEMBER" ? (
                      isRegistered(event) ? (
                        <div className="space-y-2">
                          <button
                            disabled
                            className="h-12 w-full rounded-2xl border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-700"
                          >
                            Registered
                          </button>
                          <button
                            onClick={() => handleUnregister(event)}
                            disabled={activeEventId === event.id}
                            className="h-12 w-full rounded-2xl border border-rose-200 bg-white text-sm font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {activeEventId === event.id ? "Unregistering..." : "Unregister"}
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleRegister(event.id)}
                          disabled={activeEventId === event.id}
                          className="h-12 w-full rounded-2xl bg-zinc-100 text-sm font-semibold text-slate-900 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {activeEventId === event.id ? "Registering..." : "Register here"}
                        </button>
                      )
                    ) : null}

                    {event.description ? <p className="text-sm text-zinc-600">{event.description}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
