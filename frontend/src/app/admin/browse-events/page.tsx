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
  imageUrl?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations?: { id: string }[];
};

export default function AdminBrowseEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [deletingEventId, setDeletingEventId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventGoal, setEventGoal] = useState("");
  const [eventNote, setEventNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const toDateTimeLocalValue = (value?: string | null) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    const pad = (n: number) => String(n).padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

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
        const message = err instanceof Error ? err.message : "Unable to load events.";
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
      if (editingEventId) {
        await fetchJson<EventItem>(`/events/${editingEventId}`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
          body: {
            title,
            description: description || null,
            imageUrl: imageUrl || null,
            location: location || null,
            startDate: new Date(startDate).toISOString(),
            endDate: endDate ? new Date(endDate).toISOString() : null,
          },
        });
      } else {
        const created = await fetchJson<EventItem>("/events", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: {
            title,
            description: description || null,
            imageUrl: imageUrl || null,
            location: location || null,
            startDate: new Date(startDate).toISOString(),
            endDate: endDate ? new Date(endDate).toISOString() : null,
            createdBy: { connect: { id: user.id } },
          },
        });

        if (eventGoal.trim()) {
          await fetchJson("/event-goals", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: {
              title: eventGoal.trim(),
              description: null,
              event: { connect: { id: created.id } },
            },
          });
        }

        if (eventNote.trim()) {
          await fetchJson("/event-notes", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: {
              content: eventNote.trim(),
              event: { connect: { id: created.id } },
              user: { connect: { id: user.id } },
            },
          });
        }
      }

      setTitle("");
      setDescription("");
      setImageUrl("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setEventGoal("");
      setEventNote("");
      setEditingEventId(null);
      setShowCreate(false);
      await loadEvents(token);
    } catch (err) {
      const message = err instanceof Error ? err.message : `Unable to ${editingEventId ? "update" : "create"} event.`;
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (event: EventItem) => {
    setEditingEventId(event.id);
    setShowCreate(true);
    setTitle(event.title);
    setDescription(event.description || "");
    setImageUrl(event.imageUrl || "");
    setLocation(event.location || "");
    setStartDate(toDateTimeLocalValue(event.startDate));
    setEndDate(toDateTimeLocalValue(event.endDate));
    setEventGoal("");
    setEventNote("");
    setError("");
  };

  const handleDelete = async (eventId: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const confirmed = window.confirm("Delete this event? This action cannot be undone.");
    if (!confirmed) return;

    setDeletingEventId(eventId);
    setError("");
    try {
      await fetchJson(`/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadEvents(token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to delete event.";
      setError(message);
    } finally {
      setDeletingEventId(null);
    }
  };

  return (
    <div className="min-h-full bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-normal tracking-tight text-zinc-950">Browse Events</h1>
            <p className="mt-2 text-base text-zinc-600">Discover and manage all your events.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setEditingEventId(null);
              setShowCreate(true);
              setTitle("");
              setDescription("");
              setImageUrl("");
              setLocation("");
              setStartDate("");
              setEndDate("");
              setEventGoal("");
              setEventNote("");
            }}
            className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900"
          >
            Create Event
          </button>
        </header>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>
        ) : null}

        {showCreate ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleCreate} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Event title" className="rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
              </div>
              <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Event image URL" className="rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="min-h-[100px] rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
              <div className="grid gap-4 md:grid-cols-2">
                <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
                <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
              </div>

              <div className="mt-2 grid gap-4 border-t border-zinc-200 pt-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Event Goals</p>
                  <textarea value={eventGoal} onChange={(e) => setEventGoal(e.target.value)} placeholder="Goal for this event" className="min-h-[90px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Event Notes</p>
                  <textarea value={eventNote} onChange={(e) => setEventNote(e.target.value)} placeholder="Internal notes for this event" className="min-h-[90px] w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm" />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreate(false);
                    setEditingEventId(null);
                  }}
                  className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button type="submit" disabled={submitting} className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900 disabled:opacity-60">
                  {submitting ? (editingEventId ? "Updating..." : "Creating...") : editingEventId ? "Update Event" : "Save Event"}
                </button>
              </div>
            </form>
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <article key={index} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="shimmer h-44 w-full" />
                <div className="space-y-3 p-5">
                  <div className="shimmer h-8 w-1/2 rounded-md" />
                  <div className="space-y-2">
                    <div className="shimmer h-4 w-full rounded-md" />
                    <div className="shimmer h-4 w-5/6 rounded-md" />
                  </div>
                  <div className="shimmer h-4 w-2/3 rounded-md" />
                  <div className="shimmer h-4 w-1/3 rounded-md" />
                  <div className="shimmer h-10 w-full rounded-lg" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="shimmer h-10 w-full rounded-lg" />
                    <div className="shimmer h-10 w-full rounded-lg" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="h-44 w-full bg-zinc-900">
                  {event.imageUrl ? <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" /> : null}
                </div>
                <div className="space-y-3 p-5">
                  <h2 className="text-2xl font-semibold text-zinc-900">{event.title}</h2>
                  <p
                    className="text-sm text-zinc-600"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {event.description || "No description provided."}
                  </p>
                  <p className="text-sm text-zinc-500">{new Date(event.startDate).toLocaleString()}</p>
                  <p className="text-sm text-zinc-500">{event.location || "No location"}</p>
                  <p className="text-sm font-medium text-zinc-700">{event.registrations?.length ?? 0} registrations</p>
                  <div className="space-y-2 pt-1">
                    <Link
                      href={`/admin/event-details/${event.id}`}
                      //className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-900"
                      className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-white border border-black px-4 text-sm font-semibold text-black hover:bg-gray-100"
                    >
                      Open details
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(event)}
                        className="h-10 rounded-lg bg-white border border-black px-3 text-xs font-semibold text-black hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(event.id)}
                        disabled={deletingEventId === event.id}
                        className="h-10 rounded-lg border border-black px-3 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {deletingEventId === event.id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

