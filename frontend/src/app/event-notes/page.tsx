"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type EventNote = {
  id: string;
  content: string;
  eventId: string;
  userId: string;
  createdAt: string;
};

type EventItem = {
  id: string;
  title: string;
};

export default function EventNotesPage() {
  const router = useRouter();
  const [items, setItems] = useState<EventNote[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [eventId, setEventId] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
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
        const [notesData, eventsData] = await Promise.all([
          fetchJson<EventNote[]>("/event-notes", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(notesData);
        setEvents(eventsData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load event notes.";
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

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();
    if (!token || !currentUser) {
      router.push("/sign-in");
      return;
    }
    setError("");
    setCreating(true);
    try {
      await fetchJson("/event-notes", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          content,
          event: { connect: { id: eventId } },
          user: { connect: { id: currentUser.id } },
        },
      });
      setContent("");
      setEventId("");
      const refreshed = await fetchJson<EventNote[]>("/event-notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create note.";
      setError(message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (note: EventNote) => {
    setEditingId(note.id);
    setEditContent(note.content);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  const saveEdit = async () => {
    const token = getToken();
    if (!token || !editingId) {
      return;
    }
    setSavingEdit(true);
    setError("");
    try {
      await fetchJson(`/event-notes/${editingId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: { content: editContent },
      });
      const refreshed = await fetchJson<EventNote[]>("/event-notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
      cancelEdit();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update note.";
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
              Event notes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Notes from the team
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
            <h2 className="text-lg font-semibold text-zinc-900">Create note</h2>
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
              Note
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                className="mt-2 min-h-[100px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                required
              />
            </label>
            <button
              type="submit"
              disabled={creating}
              className="h-11 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {creating ? "Saving..." : "Add note"}
            </button>
          </form>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading notes...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No notes found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((note) => (
              <div
                key={note.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                {editingId === note.id ? (
                  <div className="space-y-3">
                    <textarea
                      value={editContent}
                      onChange={(event) => setEditContent(event.target.value)}
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
                      {note.content}
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-zinc-600">
                      <p>Event ID: {note.eventId}</p>
                      <p>User ID: {note.userId}</p>
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                      {new Date(note.createdAt).toLocaleString()}
                    </p>
                    {currentRole === "ADMIN" ? (
                      <button
                        type="button"
                        onClick={() => startEdit(note)}
                        className="mt-3 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                      >
                        Edit
                      </button>
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
