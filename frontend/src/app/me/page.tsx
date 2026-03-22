"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type EventItem = {
  id: string;
  title: string;
  description?: string | null;
  startDate: string;
  location?: string | null;
  registrations?: { userId: string }[];
};

type Registration = {
  id: string;
  eventId: string;
  userId: string;
  registeredAt: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<ReturnType<typeof getUser> | null>(null);

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (!token || !user) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const [eventsData, registrationsData] = await Promise.all([
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<Registration[]>("/registrations", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setEvents(eventsData);
        setRegistrations(registrationsData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load profile.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  useEffect(() => {
    setCurrentUser(getUser());
  }, []);

  const myRegistrations = currentUser
    ? registrations.filter((item) => item.userId === currentUser.id)
    : [];

  const isRegistered = (event: EventItem) => {
    if (!currentUser || !event.registrations) {
      return false;
    }
    return event.registrations.some((item) => item.userId === currentUser.id);
  };


  const handleRegister = async (eventId: string) => {
    const token = getToken();
    if (!token || !currentUser) {
      router.push("/sign-in");
      return;
    }
    setError("");
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
          user: { connect: { id: currentUser.id } },
        },
      });
      const refreshed = await fetchJson<EventItem[]>("/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(refreshed);
      const registrationsData = await fetchJson<Registration[]>("/registrations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRegistrations(registrationsData);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to register for the event.";
      setError(message);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              My profile
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Welcome back
            </h1>
          </div>
          <Link
            href="/events"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to events
          </Link>
        </header>

        {currentUser ? (
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Profile</h2>
            <p className="mt-2 text-sm text-zinc-600">{currentUser.fullName}</p>
            <p className="mt-1 text-sm text-zinc-600">{currentUser.email}</p>
            <p className="mt-1 text-sm text-zinc-600">{currentUser.phone}</p>
          </section>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading profile...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : (
          <>
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                My registrations
              </h2>
              {myRegistrations.length === 0 ? (
                <p className="mt-4 text-sm text-zinc-600">
                  You have not registered for any events yet.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {myRegistrations.map((registration) => {
                    const event = events.find((item) => item.id === registration.eventId);
                    return (
                      <div
                        key={registration.id}
                        className="rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                      >
                        <p className="text-sm font-semibold text-zinc-900">
                          {event?.title ?? "Event"}
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Registered: {new Date(registration.registeredAt).toLocaleString()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Available events
              </h2>
              {events.length === 0 ? (
                <p className="mt-4 text-sm text-zinc-600">
                  No events available right now.
                </p>
              ) : (
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold text-zinc-900">
                          {event.title}
                        </p>
                        <button
                          onClick={() => handleRegister(event.id)}
                          disabled={isRegistered(event)}
                          className="rounded-lg border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isRegistered(event) ? "Registered" : "I'm coming"}
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-zinc-600">
                        {event.description || "No description provided."}
                      </p>
                      <p className="mt-2 text-xs text-zinc-500">
                        Starts: {new Date(event.startDate).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
