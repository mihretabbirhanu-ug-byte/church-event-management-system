"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
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

export default function TasksPage() {
  const router = useRouter();
  const [items, setItems] = useState<Task[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
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
        const [tasksData, eventsData] = await Promise.all([
          fetchJson<Task[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(tasksData);
        setEvents(eventsData);
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

  const backHref = currentRole === "ADMIN" ? "/admin/dashboard" : "/events";
  const backLabel = currentRole === "ADMIN" ? "Back to dashboard" : "Back to events";

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
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Tasks
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Event tasks
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/task-assignments"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              Task assignments
            </Link>
            <Link
              href="/task-updates"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              Task updates
            </Link>
            <Link
              href={backHref}
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              {backLabel}
            </Link>
          </div>
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
                className="mt-2 min-h-[90px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
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
                      className="min-h-[80px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
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
                ) : (
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                      <p className="mt-2 text-xs text-zinc-600">
                        {task.description || "No description provided."}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
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
                          onClick={() => startEdit(task)}
                          className="rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                        >
                          Edit
                        </button>
                      ) : null}
                      {currentRole === "VOLUNTEER" ? (
                        <button
                          onClick={() => handleAssign(task.id)}
                          disabled={isAssigned(task)}
                          className="rounded-lg border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isAssigned(task) ? "Assigned" : "Assign to me"}
                        </button>
                      ) : null}
                    </div>
                  </div>
                )}
                <div className="mt-4 space-y-1 text-xs text-zinc-500">
                  <p>Event ID: {task.eventId}</p>
                  <p>Created by: {task.createdById}</p>
                  {task.deadline ? (
                    <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
