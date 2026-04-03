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

type UserItem = {
  id: string;
  fullName: string;
};

export default function TasksPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState<Task[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [eventId, setEventId] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDeadline, setEditDeadline] = useState("");
  const [editStatus, setEditStatus] = useState<Task["status"]>("PENDING");
  const [savingEdit, setSavingEdit] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const [tasksData, eventsData, usersData] = await Promise.all([
          fetchJson<Task[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<UserItem[]>("/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(tasksData);
        setEvents(eventsData);
        setUsers(usersData);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load tasks.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  useEffect(() => {
    const user = getUser();
    setCurrentRole(user?.role ?? null);
  }, []);

  const eventNameById = new Map(events.map((event) => [event.id, event.title]));
  const userNameById = new Map(users.map((user) => [user.id, user.fullName]));

  const currentUser = getUser();

  const isAssigned = (task: Task) => {
    if (!currentUser || !task.assignments) {
      return false;
    }
    return task.assignments.some((assignment) => assignment.userId === currentUser.id);
  };

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
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to assign this task.";
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
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to unassign from this task.";
      setActionError(message);
    }
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();
    if (!token || !currentUser) {
      router.push("/sign-in");
      return;
    }
    setActionError("");
    setCreating(true);
    try {
      await fetchJson("/tasks", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title,
          description: description || null,
          deadline: deadline ? new Date(deadline).toISOString() : null,
          event: { connect: { id: eventId } },
          createdBy: { connect: { id: currentUser.id } },
        },
      });
      setTitle("");
      setDescription("");
      setDeadline("");
      setEventId("");
      const refreshed = await fetchJson<Task[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create task.";
      setActionError(message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description ?? "");
    setEditDeadline(task.deadline ? task.deadline.slice(0, 16) : "");
    setEditStatus(task.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    setEditDeadline("");
    setEditStatus("PENDING");
  };

  const saveEdit = async () => {
    const token = getToken();
    if (!token || !editingId) {
      return;
    }
    setSavingEdit(true);
    setActionError("");
    try {
      await fetchJson(`/tasks/${editingId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title: editTitle,
          description: editDescription || null,
          deadline: editDeadline ? new Date(editDeadline).toISOString() : null,
          status: editStatus,
        },
      });
      const refreshed = await fetchJson<Task[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
      cancelEdit();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update task.";
      setActionError(message);
    } finally {
      setSavingEdit(false);
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
              href={currentRole === "ADMIN" ? "/admin/profile" : "/me"}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/me" || pathname === "/admin/profile"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              My profile
            </Link></nav>
        </aside>

        <div className="px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex w-full flex-col gap-8">
            <header className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Tasks
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Event tasks
              </h1>
            </header>

            {currentRole === "ADMIN" ? (
              <form
                onSubmit={handleCreate}
                className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-zinc-900">Create task</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Title
                    <input
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      required
                    />
                  </label>
                  <label className="text-sm font-medium text-zinc-700">
                    Event
                    <select
                      value={eventId}
                      onChange={(event) => setEventId(event.target.value)}
                      className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select an event</option>
                      {events.map((ev) => (
                        <option key={ev.id} value={ev.id}>
                          {ev.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="text-sm font-medium text-zinc-700">
                  Description
                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="mt-2 min-h-22.5 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm font-medium text-zinc-700">
                  Deadline
                  <input
                    type="datetime-local"
                    value={deadline}
                    onChange={(event) => setDeadline(event.target.value)}
                    className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </label>
                <button
                  type="submit"
                  disabled={creating}
                  className="h-11 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {creating ? "Creating..." : "Create task"}
                </button>
              </form>
            ) : null}

            {loading ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                Loading tasks...
              </div>
            ) : actionError ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {actionError}
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {error}
              </div>
            ) : items.length === 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                No tasks found.
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                  >
                    {editingId === task.id ? (
                      <div className="space-y-3">
                        <input
                          value={editTitle}
                          onChange={(event) => setEditTitle(event.target.value)}
                          className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                        />
                        <textarea
                          value={editDescription}
                          onChange={(event) => setEditDescription(event.target.value)}
                          className="min-h-20 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                        />
                        <div className="grid gap-3 md:grid-cols-2">
                          <input
                            type="datetime-local"
                            value={editDeadline}
                            onChange={(event) => setEditDeadline(event.target.value)}
                            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                          />
                          <select
                            value={editStatus}
                            onChange={(event) =>
                              setEditStatus(event.target.value as Task["status"])
                            }
                            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="DONE">DONE</option>
                            <option value="CLOSED">CLOSED</option>
                          </select>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={saveEdit}
                            disabled={savingEdit}
                            className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {savingEdit ? "Saving..." : "Save"}
                          </button>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : currentRole === "VOLUNTEER" ? (
                      <div className="flex min-h-[170px] flex-col">
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                          <p className="mt-2 text-xs text-zinc-600">
                            {task.description || "No description provided."}
                          </p>
                          <div className="mt-4 space-y-1 text-xs text-zinc-500">
                            <p>Event ID: {task.eventId}</p>
                            <p className="flex items-center gap-1 text-zinc-600">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              <span>{eventNameById.get(task.eventId) ?? "Unknown event"}</span>
                            </p>
                            <p>Created by: {task.createdById}</p>
                            <p className="flex items-center gap-1 text-zinc-600">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                              <span>{userNameById.get(task.createdById) ?? "Unknown user"}</span>
                            </p>
                            {task.deadline ? (
                              <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="mt-auto pt-4">
                          <div className="flex gap-2">
                            <span
                              className={`flex-1 rounded-lg px-3 py-2 text-center text-xs font-semibold ${
                                task.status === "DONE"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : task.status === "CLOSED"
                                  ? "bg-zinc-200 text-zinc-600"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              Status: {task.status}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                isAssigned(task)
                                  ? handleUnassignMyself(task.id)
                                  : handleAssign(task.id)
                              }
                              className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold ${
                                isAssigned(task)
                                  ? "border border-rose-200 text-rose-700 hover:bg-rose-50"
                                  : "border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                              }`}
                            >
                              {isAssigned(task) ? "Unassign myself" : "Assign to me"}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex min-h-[170px] items-stretch justify-between gap-4">
                        <div className="flex flex-1 flex-col">
                          <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                          <p className="mt-2 text-xs text-zinc-600">
                            {task.description || "No description provided."}
                          </p>
                          <div className="mt-4 space-y-1 text-xs text-zinc-500">
                            <p>Event ID: {task.eventId}</p>
                            <p className="flex items-center gap-1 text-zinc-600">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              <span>{eventNameById.get(task.eventId) ?? "Unknown event"}</span>
                            </p>
                            <p>Created by: {task.createdById}</p>
                            <p className="flex items-center gap-1 text-zinc-600">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                              <span>{userNameById.get(task.createdById) ?? "Unknown user"}</span>
                            </p>
                            {task.deadline ? (
                              <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end gap-2">
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
                          {currentRole === "ADMIN" ? (
                            <button
                              type="button"
                              onClick={() => startEdit(task)}
                              className="rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                            >
                              Edit
                            </button>
                          ) : null}
                        </div>
                      </div>
                    )}
                    {editingId === task.id ? (
                      <div className="mt-4 space-y-1 text-xs text-zinc-500">
                        <p>Event ID: {task.eventId}</p>
                        <p className="flex items-center gap-1 text-zinc-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{eventNameById.get(task.eventId) ?? "Unknown event"}</span>
                        </p>
                        <p>Created by: {task.createdById}</p>
                        <p className="flex items-center gap-1 text-zinc-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21a8 8 0 0 0-16 0" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span>{userNameById.get(task.createdById) ?? "Unknown user"}</span>
                        </p>
                        {task.deadline ? (
                          <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

