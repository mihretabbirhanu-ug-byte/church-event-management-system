"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type TaskAssignment = {
  id: string;
  userId: string;
  user?: { fullName: string };
};

type Task = {
  id: string;
  title: string;
  description?: string | null;
  deadline?: string | null;
  status: "PENDING" | "DONE" | "CLOSED";
  eventId: string;
  createdById: string;
  assignments?: TaskAssignment[];
};

type EventItem = {
  id: string;
  title: string;
};

type UserItem = {
  id: string;
  fullName: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
};

export default function AdminTasksPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = searchParams.get("view") === "create" ? "create" : "assign";

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
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [assigning, setAssigning] = useState<string | null>(null);

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

  const currentUser = getUser();
  const eventNameById = useMemo(
    () => new Map(events.map((event) => [event.id, event.title])),
    [events]
  );

  const volunteers = useMemo(
    () => users.filter((user) => user.role === "VOLUNTEER"),
    [users]
  );

  const volunteerTaskCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((task) => {
      task.assignments?.forEach((assignment) => {
        counts[assignment.userId] = (counts[assignment.userId] ?? 0) + 1;
      });
    });
    return counts;
  }, [items]);

  const reloadTasks = async (token: string) => {
    const refreshed = await fetchJson<Task[]>("/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setItems(refreshed);
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
      await reloadTasks(token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to create task.";
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
    if (!token || !editingId) return;

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
      await reloadTasks(token);
      cancelEdit();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to update task.";
      setActionError(message);
    } finally {
      setSavingEdit(false);
    }
  };

  const deleteTask = async (id: string) => {
    const token = getToken();
    if (!token) return;

    const confirmed = window.confirm("Delete this task?");
    if (!confirmed) return;

    setDeletingId(id);
    setActionError("");
    try {
      await fetchJson(`/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to delete task.";
      setActionError(message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleAssign = async (taskId: string, volunteerId: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setAssigning(`${taskId}:${volunteerId}`);
    setActionError("");
    try {
      await fetchJson("/task-assignments", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          task: { connect: { id: taskId } },
          user: { connect: { id: volunteerId } },
        },
      });
      await reloadTasks(token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to assign volunteer.";
      setActionError(message);
    } finally {
      setAssigning(null);
    }
  };

  const handleUnassign = async (assignmentId: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setAssigning(assignmentId);
    setActionError("");
    try {
      await fetchJson(`/task-assignments/${assignmentId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await reloadTasks(token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to unassign volunteer.";
      setActionError(message);
    } finally {
      setAssigning(null);
    }
  };

  return (
    <div className="min-h-full bg-white px-4 py-4 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-normal tracking-tight text-zinc-900">
              {view === "create" ? "Create and manage tasks" : "Match volunteers to tasks"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/tasks"
              className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                view === "assign"
                  ? "bg-[#03042a] text-white"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              Assign Tasks
            </Link>
            <Link
              href="/admin/tasks?view=create"
              className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                view === "create"
                  ? "bg-[#03042a] text-white"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              Create Task
            </Link>
          </div>
        </header>

        {actionError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {actionError}
          </div>
        ) : null}
        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading tasks...
          </div>
        ) : view === "assign" ? (
          items.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
              No tasks available.
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {items.map((task) => {
                const assignedIds = new Set((task.assignments ?? []).map((assignment) => assignment.userId));
                return (
                  <div key={task.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-5 w-5 text-zinc-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <p className="text-lg font-normal text-zinc-900">{task.title}</p>
                        </div>
                        <p className="mt-1 text-xs text-zinc-600">Status: {task.status}</p>
                      </div>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
                        {task.assignments?.length ?? 0} assigned
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {volunteers.length === 0 ? (
                        <p className="text-sm text-zinc-600">No volunteers available yet.</p>
                      ) : (
                        volunteers.map((volunteer) => {
                          const isAssigned = assignedIds.has(volunteer.id);
                          const count = volunteerTaskCounts[volunteer.id] ?? 0;
                          const assignment = task.assignments?.find((item) => item.userId === volunteer.id);
                          return (
                            <div
                              key={volunteer.id}
                              className="flex flex-col gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-4 w-4 text-zinc-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                    <circle cx="12" cy="7" r="4" />
                                  </svg>
                                  <p className="text-sm font-semibold text-zinc-900">{volunteer.fullName}</p>
                                </div>
                                <p className="text-xs text-zinc-600">Assigned to {count} task{count === 1 ? "" : "s"}</p>
                                {isAssigned ? (
                                  <p className="text-xs font-semibold text-emerald-700">Already assigned to this task</p>
                                ) : null}
                              </div>
                              {isAssigned && assignment?.id ? (
                                <button
                                  type="button"
                                  onClick={() => handleUnassign(assignment.id)}
                                  disabled={assigning === assignment.id}
                                  className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                  {assigning === assignment.id ? "Removing..." : "Unassign"}
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleAssign(task.id, volunteer.id)}
                                  disabled={assigning === `${task.id}:${volunteer.id}`}
                                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                  {assigning === `${task.id}:${volunteer.id}` ? "Assigning..." : "Assign"}
                                </button>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <>
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
                  className="mt-2 min-h-24 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
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
                className="h-11 rounded-lg bg-[#03042a] text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {creating ? "Creating..." : "Create task"}
              </button>
            </form>

            {items.length === 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                No tasks found.
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((task) => (
                  <div key={task.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
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
                            onChange={(event) => setEditStatus(event.target.value as Task["status"])}
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
                    ) : (
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-4 w-4 text-zinc-700"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                            <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                          </div>
                          <p className="mt-2 text-xs text-zinc-600">{task.description || "No description provided."}</p>
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
                    )}
                    <div className="mt-4 space-y-1 text-xs text-zinc-500">
                      <p>
                        Event ID: {task.eventId} ({eventNameById.get(task.eventId) ?? "Unknown event"})
                      </p>
                      {task.deadline ? <p>Deadline: {new Date(task.deadline).toLocaleString()}</p> : null}
                    </div>
                    {editingId !== task.id ? (
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(task)}
                          className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteTask(task.id)}
                          disabled={deletingId === task.id}
                          className="flex-1 rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {deletingId === task.id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
