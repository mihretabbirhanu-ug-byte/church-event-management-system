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
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations?: { userId: string }[];
};

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");

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

  const handleRegister = async (eventId: string) => {
    const token = getToken();
    if (!token || !currentUserId) {
      router.push("/sign-in");
      return;
    }
    setActionError("");
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
      const refreshed = await fetchJson<EventItem[]>("/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to register for the event.";
      setActionError(message);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Events
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Upcoming church events
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
          <div className="grid gap-4 lg:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/events/${event.id}`}
                    className="text-lg font-semibold text-zinc-900 hover:text-emerald-700"
                  >
                    {event.title}
                  </Link>
                  {currentRole === "MEMBER" ? (
                    <button
                      onClick={() => handleRegister(event.id)}
                      disabled={isRegistered(event)}
                      className="rounded-lg border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isRegistered(event) ? "Registered" : "I'm coming"}
                    </button>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  {event.description || "No description provided."}
                </p>
                <div className="mt-4 space-y-1 text-xs text-zinc-500">
                  <p>
                    Starts: {new Date(event.startDate).toLocaleString()}
                  </p>
                  {event.endDate ? (
                    <p>Ends: {new Date(event.endDate).toLocaleString()}</p>
                  ) : null}
                  {event.location ? <p>Location: {event.location}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
