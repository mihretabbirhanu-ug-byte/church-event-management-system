"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type EventDetail = {
  id: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations: { id: string; user: { id: string; fullName: string } }[];
};

type EventListItem = {
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
  className,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 text-sm text-slate-700 ${className ?? ""}`}>
      <span className="text-blue-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const [event, setEvent] = useState<EventDetail | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<EventListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [activeEventId, setActiveEventId] = useState<string | null>(null);

  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const loadData = async (eventId: string, token: string) => {
    const [detailData, eventsData] = await Promise.all([
      fetchJson<EventDetail>(`/events/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetchJson<EventListItem[]>("/events", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);
    setEvent(detailData);
    setRelatedEvents(eventsData);
  };

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
        await loadData(params.id, token);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load event details.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params.id, router]);

  const detailRegistered =
    currentUserId && event
      ? event.registrations.some((reg) => reg.user.id === currentUserId)
      : false;

  const getDetailRegistrationId = () => {
    if (!currentUserId || !event) {
      return null;
    }
    const reg = event.registrations.find((item) => item.user.id === currentUserId);
    return reg?.id ?? null;
  };

  const isRegisteredInList = (listEvent: EventListItem) => {
    if (!currentUserId || !listEvent.registrations) {
      return false;
    }
    return listEvent.registrations.some((item) => item.userId === currentUserId);
  };

  const getListRegistrationId = (listEvent: EventListItem) => {
    if (!currentUserId || !listEvent.registrations) {
      return null;
    }
    const reg = listEvent.registrations.find((item) => item.userId === currentUserId);
    return reg?.id ?? null;
  };

  const refreshAll = async () => {
    const token = getToken();
    if (!token) {
      return;
    }
    await loadData(params.id, token);
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
      await refreshAll();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to register for event.";
      setActionError(message);
    } finally {
      setActiveEventId(null);
    }
  };

  const handleUnregister = async (eventId: string, registrationId: string | null) => {
    const token = getToken();
    if (!token || !registrationId) {
      return;
    }

    setActionError("");
    setActiveEventId(eventId);
    try {
      await fetchJson(`/registrations/${registrationId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshAll();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to unregister from event.";
      setActionError(message);
    } finally {
      setActiveEventId(null);
    }
  };

  const relatedOnly = useMemo(() => {
    return relatedEvents.filter((item) => item.id !== params.id);
  }, [relatedEvents, params.id]);

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Event details
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {event?.title ?? "Event"}
            </h1>
          </div>
        </header>

        {loading ? (
          <div className="space-y-8">
            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="shimmer h-80 w-full" />
              <div className="space-y-4 p-6">
                <div className="shimmer h-6 w-full rounded-md" />
                <div className="shimmer h-6 w-11/12 rounded-md" />
                <div className="space-y-2 pt-1">
                  <div className="shimmer h-5 w-1/3 rounded-md" />
                  <div className="shimmer h-5 w-1/4 rounded-md" />
                  <div className="shimmer h-5 w-1/2 rounded-md" />
                  <div className="shimmer h-5 w-1/4 rounded-md" />
                </div>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div className="shimmer h-11 w-full rounded-xl" />
                  <div className="shimmer h-11 w-28 rounded-xl" />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="shimmer h-8 w-64 rounded-lg" />
              <div className="grid gap-5 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
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
            </section>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : event ? (
          <div className="space-y-8">
            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="h-80 w-full overflow-hidden bg-slate-900">
                {event.imageUrl ? (
                  <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-700 via-violet-600 to-cyan-500 px-6 text-center text-3xl font-semibold text-white">
                    {event.title}
                  </div>
                )}
              </div>

              <div className="space-y-4 p-6">
                {detailRegistered ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm">
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

                <p className="text-base leading-relaxed text-zinc-700">
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
                    text={new Date(event.startDate).toLocaleDateString()}
                    className="text-2xl font-semibold text-slate-800"
                  />
                  <InfoRow
                    icon={
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 14" />
                      </svg>
                    }
                    text={new Date(event.startDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    className="text-2xl font-semibold text-slate-800"
                  />
                  <InfoRow
                    icon={
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    }
                    text={event.location || "No location"}
                    className="text-2xl font-semibold text-slate-800"
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
                    text={`${event.registrations.length} registered`}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  {currentRole === "MEMBER" ? (
                    <button
                      onClick={() =>
                        detailRegistered
                          ? handleUnregister(event.id, getDetailRegistrationId())
                          : handleRegister(event.id)
                      }
                      disabled={activeEventId === event.id}
                      className={`h-11 w-full rounded-xl text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                        detailRegistered
                          ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
                          : "bg-slate-950 text-white hover:bg-slate-900"
                      }`}
                    >
                      {activeEventId === event.id
                        ? detailRegistered
                          ? "Unregistering..."
                          : "Registering..."
                        : detailRegistered
                        ? "Unregister"
                        : "Register now"}
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={() => router.push("/events")}
                    className="h-11 rounded-xl border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    Close
                  </button>
                </div>

                {actionError ? <p className="text-xs text-rose-600">{actionError}</p> : null}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                More Related Events
              </h2>

              {relatedOnly.length === 0 ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                  No related events available yet.
                </div>
              ) : (
                <div className="grid gap-5 lg:grid-cols-3">
                  {relatedOnly.map((item) => {
                    const registered = isRegisteredInList(item);
                    const registrationId = getListRegistrationId(item);
                    const isBusy = activeEventId === item.id;
                    const eventDate = new Date(item.startDate);

                    return (
                      <Link
                        key={item.id}
                        href={`/events/${item.id}`}
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
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-700 via-violet-600 to-cyan-500 px-6 text-center text-2xl font-semibold text-white transition duration-300 group-hover:scale-105">
                              {item.title}
                            </div>
                          )}
                        </div>

                        <div className="space-y-4 p-6">
                          <h3 className="line-clamp-1 text-3xl font-bold tracking-tight text-slate-900">
                            {item.title}
                          </h3>

                          <p
                            className="text-sm text-zinc-600"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {item.description || "No description provided."}
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
                              text={item.location || "No location"}
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
                              text={`${item.registrations?.length ?? 0} registered`}
                            />
                          </div>

                          {currentRole === "MEMBER" ? (
                            <button
                              onClick={(clickEvent) => {
                                clickEvent.preventDefault();
                                if (registered) {
                                  handleUnregister(item.id, registrationId);
                                } else {
                                  handleRegister(item.id);
                                }
                              }}
                              disabled={isBusy}
                              className={`h-12 w-full rounded-2xl text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                                registered
                                  ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
                                  : "bg-slate-950 text-white hover:bg-slate-900"
                              }`}
                            >
                              {isBusy
                                ? registered
                                  ? "Unregistering..."
                                  : "Registering..."
                                : registered
                                ? "Unregister"
                                : "Register now"}
                            </button>
                          ) : null}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
