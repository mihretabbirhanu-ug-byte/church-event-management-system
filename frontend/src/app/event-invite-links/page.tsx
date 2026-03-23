"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type EventInviteLink = {
  id: string;
  token: string;
  expiresAt?: string | null;
  eventId: string;
  createdAt: string;
};

type EventItem = {
  id: string;
  title: string;
};

export default function EventInviteLinksPage() {
  const router = useRouter();
  const [items, setItems] = useState<EventInviteLink[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [eventId, setEventId] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editExpiresAt, setEditExpiresAt] = useState("");
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
        const [linksData, eventsData] = await Promise.all([
          fetchJson<EventInviteLink[]>("/event-invite-links", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(linksData);
        setEvents(eventsData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load invite links.";
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
      const tokenValue = `INV-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .slice(2, 8)
        .toUpperCase()}`;
      await fetchJson("/event-invite-links", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          token: tokenValue,
          expiresAt: expiresAt ? new Date(expiresAt).toISOString() : null,
          event: { connect: { id: eventId } },
        },
      });
      setEventId("");
      setExpiresAt("");
      const refreshed = await fetchJson<EventInviteLink[]>("/event-invite-links", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to create invite link.";
      setError(message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (link: EventInviteLink) => {
    setEditingId(link.id);
    setEditExpiresAt(link.expiresAt ? link.expiresAt.slice(0, 16) : "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditExpiresAt("");
  };

  const saveEdit = async () => {
    const token = getToken();
    if (!token || !editingId) {
      return;
    }
    setSavingEdit(true);
    setError("");
    try {
      await fetchJson(`/event-invite-links/${editingId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          expiresAt: editExpiresAt ? new Date(editExpiresAt).toISOString() : null,
        },
      });
      const refreshed = await fetchJson<EventInviteLink[]>("/event-invite-links", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(refreshed);
      cancelEdit();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update invite link.";
      setError(message);
    } finally {
      setSavingEdit(false);
    }
  };

  const deleteInvite = async (id: string) => {
    const token = getToken();
    if (!token) {
      return;
    }
    setDeletingId(id);
    setError("");
    try {
      await fetchJson(`/event-invite-links/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((link) => link.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to delete invite link.";
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
              Invite links
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Event invite links
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
            <h2 className="text-lg font-semibold text-zinc-900">Create invite link</h2>
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
              Expires at
              <input
                type="datetime-local"
                value={expiresAt}
                onChange={(event) => setExpiresAt(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
            <button
              type="submit"
              disabled={creating}
              className="h-11 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {creating ? "Creating..." : "Create invite link"}
            </button>
          </form>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading invite links...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No invite links found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((link) => (
              <div
                key={link.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                {editingId === link.id ? (
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-zinc-700">
                      Expires at
                      <input
                        type="datetime-local"
                        value={editExpiresAt}
                        onChange={(event) => setEditExpiresAt(event.target.value)}
                        className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      />
                    </label>
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
                      Token: {link.token}
                    </p>
                    <p className="mt-2 text-xs text-zinc-600">
                      Event ID: {link.eventId}
                    </p>
                    <p className="mt-2 text-xs text-zinc-600">
                      Expires:{" "}
                      {link.expiresAt
                        ? new Date(link.expiresAt).toLocaleString()
                        : "No expiry"}
                    </p>
                    <p className="mt-3 text-xs text-zinc-500">
                      Created: {new Date(link.createdAt).toLocaleString()}
                    </p>
                    {currentRole === "ADMIN" ? (
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(link)}
                          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteInvite(link.id)}
                          disabled={deletingId === link.id}
                          className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {deletingId === link.id ? "Deleting..." : "Delete"}
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
