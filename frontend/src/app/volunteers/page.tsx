"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Volunteer = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
};

export default function VolunteersPage() {
  const router = useRouter();
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const data = await fetchJson<Volunteer[]>("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setVolunteers(data.filter((user) => user.role === "VOLUNTEER"));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load volunteers.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Volunteers
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Volunteer directory
            </h1>
          </div>
          <Link
            href="/events"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to events
          </Link>
        </header>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Search volunteers
          </label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, or phone"
            className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
          />
        </div>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading volunteers...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : volunteers.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No volunteers found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {volunteers
              .filter((volunteer) => {
                const q = query.trim().toLowerCase();
                if (!q) return true;
                return (
                  volunteer.fullName.toLowerCase().includes(q) ||
                  volunteer.email.toLowerCase().includes(q) ||
                  volunteer.phone.toLowerCase().includes(q)
                );
              })
              .map((volunteer) => (
              <div
                key={volunteer.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-zinc-900">
                  {volunteer.fullName}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {volunteer.email}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {volunteer.phone}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
