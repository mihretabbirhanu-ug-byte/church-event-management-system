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
  endDate?: string | null;
  location?: string | null;
};

export default function AdminEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

  const loadEvents = async (token: string) => {
    const data = await fetchJson<EventItem[]>("/events", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setEvents(data);
  };

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
        await loadEvents(token);
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

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();
    const user = getUser();
    if (!token || !user) {
      router.push("/sign-in");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      await fetchJson("/events", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title,
          description: description || null,
          location: location || null,
          startDate: new Date(startDate).toISOString(),
          endDate: endDate ? new Date(endDate).toISOString() : null,
          createdBy: { connect: { id: user.id } },
        },
      });
      setTitle("");
      setDescription("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      await loadEvents(token);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create event.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setError("");
    try {
      await fetchJson(`/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to delete event.";
      setError(message);
    }
  };

  const startEdit = (event: EventItem) => {
    setEditingId(event.id);
    setEditTitle(event.title);
    setEditDescription(event.description ?? "");
    setEditLocation(event.location ?? "");
    setEditStartDate(event.startDate.slice(0, 16));
    setEditEndDate(event.endDate ? event.endDate.slice(0, 16) : "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    setEditLocation("");
    setEditStartDate("");
    setEditEndDate("");
  };

  const saveEdit = async () => {
    const token = getToken();
    if (!token || !editingId) {
      return;
    }
    setSavingEdit(true);
    setError("");
    try {
      await fetchJson(`/events/${editingId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          title: editTitle,
          description: editDescription || null,
          location: editLocation || null,
          startDate: new Date(editStartDate).toISOString(),
          endDate: editEndDate ? new Date(editEndDate).toISOString() : null,
        },
      });
      const refreshed = await fetchJson<EventItem[]>("/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(refreshed);
      cancelEdit();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update event.";
      setError(message);
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
              Admin events
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Create and manage events
            </h1>
          </div>
          <Link
            href="/admin/dashboard"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to dashboard
          </Link>
        </header>

        <form
          onSubmit={handleCreate}
          className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          {error ? (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          ) : null}
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
              Location
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-zinc-700">
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-2 min-h-[100px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-zinc-700">
              Start date
              <input
                type="datetime-local"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                required
              />
            </label>
            <label className="text-sm font-medium text-zinc-700">
              End date
              <input
                type="datetime-local"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="h-11 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Creating..." : "Create event"}
          </button>
        </form>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading events...
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                {editingId === event.id ? (
                  <div className="space-y-3">
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      className="min-h-[80px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <input
                      value={editLocation}
                      onChange={(e) => setEditLocation(e.target.value)}
                      placeholder="Location"
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <div className="grid gap-3 md:grid-cols-2">
                      <input
                        type="datetime-local"
                        value={editStartDate}
                        onChange={(e) => setEditStartDate(e.target.value)}
                        className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      />
                      <input
                        type="datetime-local"
                        value={editEndDate}
                        onChange={(e) => setEditEndDate(e.target.value)}
                        className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        disabled={savingEdit}
                        className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {savingEdit ? "Saving..." : "Save"}
                      </button>
                      <button
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
                      <Link
                        href={`/events/${event.id}`}
                        className="text-lg font-semibold text-zinc-900 hover:text-emerald-700"
                      >
                        {event.title}
                      </Link>
                      <p className="mt-1 text-sm text-zinc-600">
                        {event.description || "No description provided."}
                      </p>
                      <p className="mt-2 text-xs text-zinc-500">
                        Starts: {new Date(event.startDate).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="rounded-lg border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => startEdit(event)}
                        className="rounded-lg border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
