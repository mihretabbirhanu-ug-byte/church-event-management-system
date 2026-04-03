"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useParams, useRouter } from "next/navigation";

type EventDetail = {
  id: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  registrations?: { id: string }[];
};

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
      <span className="text-blue-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default function AdminEventDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
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
        const data = await fetchJson<EventDetail>(`/events/${params.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvent(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load event details.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params.id, router]);

  return (
    <div className="min-h-full bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Event details</p>
          <h1 className="text-5xl font-normal tracking-tight text-zinc-950">{event?.title ?? "Event"}</h1>
        </header>

        {loading ? (
          <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="shimmer h-[26rem] w-full" />
            <div className="space-y-4 p-6">
              <div className="shimmer h-5 w-full rounded-md" />
              <div className="shimmer h-5 w-5/6 rounded-md" />
              <div className="space-y-2">
                <div className="shimmer h-4 w-1/3 rounded-md" />
                <div className="shimmer h-4 w-1/4 rounded-md" />
                <div className="shimmer h-4 w-1/3 rounded-md" />
                <div className="shimmer h-4 w-1/4 rounded-md" />
              </div>
              <div className="flex justify-end">
                <div className="shimmer h-11 w-28 rounded-xl" />
              </div>
            </div>
          </section>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">{error}</div>
        ) : event ? (
          <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="h-[26rem] w-full overflow-hidden bg-slate-900">
              {event.imageUrl ? (
                <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-700 via-violet-600 to-cyan-500 px-6 text-center text-3xl font-semibold text-white">
                  {event.title}
                </div>
              )}
            </div>

            <div className="space-y-4 p-6">
              <p className="text-base leading-relaxed text-zinc-700">{event.description || "No description provided."}</p>

              <div className="space-y-2">
                <InfoRow
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  }
                  text={new Date(event.startDate).toLocaleDateString()}
                />
                <InfoRow
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 14" />
                    </svg>
                  }
                  text={new Date(event.startDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                />
                <InfoRow
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  text={event.location || "No location"}
                />
                <InfoRow
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  }
                  text={`${event.registrations?.length ?? 0} registered`}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => router.push("/admin/browse-events")}
                  className="h-11 rounded-xl border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

