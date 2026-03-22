"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { clearAuth, getToken } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

type EventItem = {
  id: string;
  title: string;
  description?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
};

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          <div className="flex gap-3">
            <Link
              href="/volunteers"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              Volunteers
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
                <h2 className="text-lg font-semibold text-zinc-900">
                  {event.title}
                </h2>
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
