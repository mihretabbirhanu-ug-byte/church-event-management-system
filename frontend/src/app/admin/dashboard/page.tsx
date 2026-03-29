"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

type EventItem = {
  id: string;
  title: string;
  startDate: string;
  location?: string | null;
  registrations?: { id: string }[];
};

type TaskItem = {
  id: string;
  status: "PENDING" | "DONE" | "CLOSED";
  title: string;
  event?: { title?: string | null };
};

type UserItem = {
  id: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
};

const statCardThemes = [
  {
    card: "border-amber-200 bg-gradient-to-br from-amber-50 via-amber-100/70 to-orange-100",
    label: "text-amber-800/80",
    value: "text-amber-950",
  },
  {
    card: "border-sky-200 bg-gradient-to-br from-sky-50 via-cyan-100/70 to-blue-100",
    label: "text-sky-800/80",
    value: "text-sky-950",
  },
  {
    card: "border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-100/70 to-green-100",
    label: "text-emerald-800/80",
    value: "text-emerald-950",
  },
  {
    card: "border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-rose-100/70 to-pink-100",
    label: "text-fuchsia-800/80",
    value: "text-fuchsia-950",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [registrationsCount, setRegistrationsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (!token || !user) {
      router.push("/sign-in");
      return;
    }
    if (user.role !== "ADMIN") {
      router.push("/events");
      return;
    }

    const load = async () => {
      try {
        const [eventsData, tasksData, usersData, registrationsData] =
          await Promise.all([
            fetchJson<EventItem[]>("/events", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            fetchJson<TaskItem[]>("/tasks", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            fetchJson<UserItem[]>("/users", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            fetchJson<unknown[]>("/registrations", {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);
        setEvents(eventsData);
        setTasks(tasksData);
        setUsers(usersData);
        setRegistrationsCount(registrationsData.length);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load dashboard.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const stats = useMemo(() => {
    const totalEvents = events.length;
    const activeTasks = tasks.filter((task) => task.status === "PENDING").length;
    const volunteers = users.filter((user) => user.role === "VOLUNTEER").length;
    return [
      { label: "Total events", value: totalEvents.toString() },
      { label: "Registrations", value: registrationsCount.toString() },
      { label: "Active tasks", value: activeTasks.toString() },
      { label: "Volunteers", value: volunteers.toString() },
    ];
  }, [events.length, registrationsCount, tasks, users]);

  const upcomingEvents = useMemo(() => {
    return [...events]
      .sort(
        (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )
      .slice(0, 5);
  }, [events]);

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Admin dashboard
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Overview of church events and operations
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Track registrations, manage events, and coordinate volunteer tasks all in one place.
          </p>
        </header>

        <section>
          <div className="flex flex-col gap-10">
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const theme = statCardThemes[index % statCardThemes.length];
                return (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border p-5 shadow-sm ${theme.card}`}
                  >
                    <p
                      className={`text-xs font-medium uppercase tracking-[0.2em] ${theme.label}`}
                    >
                      {stat.label}
                    </p>
                    <p className={`mt-3 text-2xl font-semibold ${theme.value}`}>
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </section>

            {error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            {loading ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                Loading dashboard...
              </div>
            ) : (
              <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-zinc-900">Upcoming events</h2>
                  <Link
                    href="/admin/events"
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    View all
                  </Link>
                </div>
                <div className="mt-6 space-y-4">
                  {upcomingEvents.length === 0 ? (
                    <p className="text-sm text-zinc-600">No events yet.</p>
                  ) : null}
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.title}
                      className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{event.title}</p>
                        <p className="mt-1 text-xs text-zinc-600">
                          {new Date(event.startDate).toLocaleDateString()} -{" "}
                          {event.location ?? "No location"}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-emerald-700">
                        {event.registrations?.length ?? 0} registrations
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-900">Task updates</h2>
                <Link
                  href="/tasks"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  View tasks
                </Link>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                      <p className="mt-1 text-xs text-zinc-600">
                        {task.event?.title ?? "No event"}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        task.status === "DONE"
                          ? "bg-emerald-100 text-emerald-700"
                          : task.status === "CLOSED"
                          ? "bg-zinc-200 text-zinc-600"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
