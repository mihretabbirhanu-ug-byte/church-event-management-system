"use client";

import { useEffect, useMemo, useState } from "react";
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
  registrations?: { id: string }[];
};

export default function AdminEventDetailsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
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
        const data = await fetchJson<EventItem[]>("/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load event details.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const sorted = useMemo(() => {
    return [...events].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  }, [events]);

  return (
    <div className="min-h-full bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header>
          <h1 className="text-5xl font-normal tracking-tight text-zinc-950">Event Details</h1>
          <p className="mt-2 text-xl text-zinc-600">Explore deeper information for all created events.</p>
        </header>

        {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}

        {loading ? (
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="divide-y divide-zinc-200">
              <div className="grid grid-cols-5 gap-4 px-5 py-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="shimmer h-4 w-24 rounded-md" />
                ))}
              </div>
              {Array.from({ length: 5 }).map((_, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-5 gap-4 px-5 py-4">
                  {Array.from({ length: 5 }).map((__, colIdx) => (
                    <div key={colIdx} className="shimmer h-4 w-full rounded-md" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-zinc-600">Event</th>
                  <th className="px-5 py-3 text-left font-semibold text-zinc-600">Date</th>
                  <th className="px-5 py-3 text-left font-semibold text-zinc-600">Location</th>
                  <th className="px-5 py-3 text-left font-semibold text-zinc-600">Registrations</th>
                  <th className="px-5 py-3 text-left font-semibold text-zinc-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {sorted.map((event) => (
                  <tr key={event.id}>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-zinc-900">{event.title}</p>
                      <p className="mt-1 text-zinc-500">{event.description || "No description"}</p>
                    </td>
                    <td className="px-5 py-4 text-zinc-700">{new Date(event.startDate).toLocaleString()}</td>
                    <td className="px-5 py-4 text-zinc-700">{event.location || "No location"}</td>
                    <td className="px-5 py-4 text-zinc-700">{event.registrations?.length ?? 0}</td>
                    <td className="px-5 py-4">
                      <Link href={`/admin/event-details/${event.id}`} className="inline-flex rounded-lg border border-zinc-300 px-3 py-1.5 font-semibold text-zinc-800 hover:bg-zinc-50">
                        Open
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

