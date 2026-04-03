"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Task = {
  id: string;
  title: string;
  description?: string | null;
  deadline?: string | null;
  status: "PENDING" | "DONE" | "CLOSED";
  eventId: string;
  createdById: string;
  assignments?: { userId: string }[];
};

type EventItem = {
  id: string;
  title: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
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
        const [tasksData, eventsData] = await Promise.all([
          fetchJson<Task[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setTasks(tasksData);
        setEvents(eventsData);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load profile.";
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

  const eventNameById = new Map(events.map((event) => [event.id, event.title]));

  const isAssigned = (task: Task) => {
    if (!currentUser || !task.assignments) {
      return false;
    }
    return task.assignments.some((item) => item.userId === currentUser.id);
  };

  const myTasks = currentUser ? tasks.filter((task) => isAssigned(task)) : [];
  const availableTasks = tasks.filter((task) => !isAssigned(task));

  const handleAssign = async (taskId: string) => {
    const token = getToken();
    if (!token || !currentUser) {
      router.push("/sign-in");
      return;
    }
    setActionError("");
    try {
      await fetchJson("/task-assignments", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          task: { connect: { id: taskId } },
          user: { connect: { id: currentUser.id } },
        },
      });
      const refreshed = await fetchJson<Task[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(refreshed);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to assign this task.";
      setActionError(message);
    }
  };

  const handleUnassignMyself = async (taskId: string) => {
    const token = getToken();
    if (!token || !currentUser) {
      router.push("/sign-in");
      return;
    }
    setActionError("");
    try {
      await fetchJson(`/task-assignments/me/${taskId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const refreshed = await fetchJson<Task[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(refreshed);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to unassign this task.";
      setActionError(message);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50">
      <div className="grid w-full gap-0 lg:grid-cols-[220px_1fr]">
        <aside className="border-b border-zinc-200 bg-white pl-2 pr-3 py-3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <nav className="space-y-1">
            <Link
              href="/tasks"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/tasks"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Event tasks
            </Link>
            <Link
              href="/task-assignments"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/task-assignments"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Task assignments
            </Link>
            <Link
              href="/task-updates"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/task-updates"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Task updates
            </Link>
            <Link
              href="/me"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/me"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              My profile
            </Link>
          </nav>
        </aside>

        <div className="px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex w-full flex-col gap-8">
            <header className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">My profile</p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Welcome back</h1>
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
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">Loading profile...</div>
            ) : actionError ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">{actionError}</div>
            ) : error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">{error}</div>
            ) : (
              <>
                <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-zinc-900">My tasks</h2>
                  {myTasks.length === 0 ? (
                    <p className="mt-4 text-sm text-zinc-600">You have no assigned tasks yet.</p>
                  ) : (
                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      {myTasks.map((task) => (
                        <div key={task.id} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                            <button
                              type="button"
                              onClick={() => handleUnassignMyself(task.id)}
                              className="rounded-lg border border-rose-200 px-2.5 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                            >
                              Unassign myself
                            </button>
                          </div>
                          <p className="mt-2 text-xs text-zinc-600">{task.description || "No description provided."}</p>
                          <div className="mt-3 space-y-1 text-xs text-zinc-500">
                            <p>Event: {eventNameById.get(task.eventId) ?? "Unknown event"}</p>
                            <p>Status: {task.status}</p>
                            {task.deadline ? <p>Deadline: {new Date(task.deadline).toLocaleString()}</p> : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-zinc-900">Available tasks</h2>
                  {availableTasks.length === 0 ? (
                    <p className="mt-4 text-sm text-zinc-600">No available tasks right now.</p>
                  ) : (
                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      {availableTasks.map((task) => (
                        <div key={task.id} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                            <button
                              type="button"
                              onClick={() => handleAssign(task.id)}
                              className="rounded-lg border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                            >
                              Assign to me
                            </button>
                          </div>
                          <p className="mt-2 text-xs text-zinc-600">{task.description || "No description provided."}</p>
                          <div className="mt-3 space-y-1 text-xs text-zinc-500">
                            <p>Event: {eventNameById.get(task.eventId) ?? "Unknown event"}</p>
                            <p>Status: {task.status}</p>
                            {task.deadline ? <p>Deadline: {new Date(task.deadline).toLocaleString()}</p> : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
