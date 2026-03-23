"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type EventGoal = {
  id: string;
  title: string;
  description?: string | null;
  eventId: string;
  createdAt: string;
};

type EventItem = {
  id: string;
  title: string;
};

export default function EventGoalsPage() {
  const router = useRouter();
  const [items, setItems] = useState<EventGoal[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventId, setEventId] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const [goalsData, eventsData] = await Promise.all([
          fetchJson<EventGoal[]>("/event-goals", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(goalsData);
        setEvents(eventsData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load event goals.";
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

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setError("");
    setCreating(true);
    try {
      await fetchJson("/event-goals", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title,
          description: description || null,
          event: { connect: { id: eventId } },
        },
      });
      setTitle("");
      setDescription("");
      setEventId("");
      const refreshed = await fetchJson<EventGoal[]>("/event-goals", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create goal.";
      setError(message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (goal: EventGoal) => {
    setEditingId(goal.id);
    setEditTitle(goal.title);
    setEditDescription(goal.description ?? "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const saveEdit = async () => {
    const token = getToken();
    if (!token || !editingId) {
      return;
    }
    setSavingEdit(true);
    setError("");
    try {
      await fetchJson(`/event-goals/${editingId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title: editTitle,
          description: editDescription || null,
        },
      });
      const refreshed = await fetchJson<EventGoal[]>("/event-goals", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
      cancelEdit();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update goal.";
      setError(message);
    } finally {
      setSavingEdit(false);
    }
  };

  const deleteGoal = async (id: string) => {
    const token = getToken();
    if (!token) {
      return;
    }
    setDeletingId(id);
    setError("");
    try {
      await fetchJson(`/event-goals/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((goal) => goal.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to delete goal.";
      setError(message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Event goals
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Goals for each event
            </h1>
          </div>
          <Link
            href={backHref}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            {backLabel}
          </Link>
        </header>

        {currentRole === "ADMIN" ? (
          <form
            onSubmit={handleCreate}
            className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">Create goal</h2>
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
              Description
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-2 min-h-[100px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
            <button
              type="submit"
              disabled={creating}
              className="h-11 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {creating ? "Saving..." : "Add goal"}
            </button>
          </form>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading goals...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No goals found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((goal) => (
              <div
                key={goal.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                {editingId === goal.id ? (
                  <div className="space-y-3">
                    <input
                      value={editTitle}
                      onChange={(event) => setEditTitle(event.target.value)}
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <textarea
                      value={editDescription}
                      onChange={(event) => setEditDescription(event.target.value)}
                      className="min-h-[90px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
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
                  <>
                    <p className="text-sm font-semibold text-zinc-900">
                      {goal.title}
                    </p>
                    <p className="mt-2 text-xs text-zinc-600">
                      {goal.description || "No description provided."}
                    </p>
                    <p className="mt-3 text-xs text-zinc-600">
                      Event ID: {goal.eventId}
                    </p>
                    <p className="mt-3 text-xs text-zinc-500">
                      {new Date(goal.createdAt).toLocaleString()}
                    </p>
                    {currentRole === "ADMIN" ? (
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(goal)}
                          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteGoal(goal.id)}
                          disabled={deletingId === goal.id}
                          className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {deletingId === goal.id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
