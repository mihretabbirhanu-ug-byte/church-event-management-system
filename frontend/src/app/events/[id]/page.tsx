"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type EventDetail = {
  id: string;
  title: string;
  description?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations: { id: string; user: { id: string; fullName: string } }[];
  tasks: { id: string; title: string; status: string }[];
  goals: { id: string; title: string; description?: string | null }[];
  notes: { id: string; content: string; user: { fullName: string } }[];
};

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
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
        const data = await fetchJson<EventDetail>(`/events/${params.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvent(data);
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

  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    const user = getUser();
    setCurrentRole(user?.role ?? null);
    setCurrentUserId(user?.id ?? null);
  }, []);

  const isRegistered =
    currentUserId && event
      ? event.registrations.some((reg) => reg.user.id === currentUserId)
      : false;

  const handleRegister = async () => {
    const token = getToken();
    if (!token || !currentUserId || !event) {
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
          event: { connect: { id: event.id } },
          user: { connect: { id: currentUserId } },
        },
      });
      const refreshed = await fetchJson<EventDetail>(`/events/${event.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvent(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to register for event.";
      setActionError(message);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Event details
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {event?.title ?? "Event"}
            </h1>
          </div>
          <Link
            href={currentRole === "ADMIN" ? "/admin/events" : "/events"}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            {currentRole === "ADMIN" ? "Back to admin events" : "Back to events"}
          </Link>
        </header>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading event...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : event ? (
          <div className="space-y-6">
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-zinc-600">
                {event.description || "No description provided."}
              </p>
              <div className="mt-4 space-y-1 text-xs text-zinc-500">
                <p>Starts: {new Date(event.startDate).toLocaleString()}</p>
                {event.endDate ? (
                  <p>Ends: {new Date(event.endDate).toLocaleString()}</p>
                ) : null}
                {event.location ? <p>Location: {event.location}</p> : null}
              </div>
              {currentRole === "MEMBER" ? (
                <div className="mt-4">
                  <button
                    onClick={handleRegister}
                    disabled={isRegistered}
                    className="rounded-lg border border-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isRegistered ? "Registered" : "I'm coming"}
                  </button>
                </div>
              ) : null}
              {actionError ? (
                <p className="mt-3 text-xs text-rose-600">{actionError}</p>
              ) : null}
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">Registrations</h2>
              {event.registrations.length === 0 ? (
                <p className="mt-3 text-sm text-zinc-600">
                  No registrations yet.
                </p>
              ) : (
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  {event.registrations.map((reg) => (
                    <p key={reg.id}>{reg.user.fullName}</p>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">Tasks</h2>
              {event.tasks.length === 0 ? (
                <p className="mt-3 text-sm text-zinc-600">
                  No tasks assigned.
                </p>
              ) : (
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  {event.tasks.map((task) => (
                    <p key={task.id}>
                      {task.title} · {task.status}
                    </p>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">Goals</h2>
              {event.goals.length === 0 ? (
                <p className="mt-3 text-sm text-zinc-600">
                  No goals added.
                </p>
              ) : (
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  {event.goals.map((goal) => (
                    <div key={goal.id}>
                      <p className="font-semibold">{goal.title}</p>
                      {goal.description ? (
                        <p className="text-xs text-zinc-600">{goal.description}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">Notes</h2>
              {event.notes.length === 0 ? (
                <p className="mt-3 text-sm text-zinc-600">
                  No notes yet.
                </p>
              ) : (
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  {event.notes.map((note) => (
                    <p key={note.id}>
                      {note.content} · {note.user.fullName}
                    </p>
                  ))}
                </div>
              )}
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
