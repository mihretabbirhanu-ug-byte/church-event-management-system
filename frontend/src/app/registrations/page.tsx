"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Registration = {
  id: string;
  ticketNumber: string;
  attendanceStatus: "NOT_MARKED" | "PRESENT";
  eventId: string;
  userId: string;
  registeredAt: string;
};

export default function RegistrationsPage() {
  const router = useRouter();
  const [items, setItems] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const data = await fetchJson<Registration[]>("/registrations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load registrations.";
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

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Registrations
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Event registrations
            </h1>
          </div>
          <Link
            href={backHref}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            {backLabel}
          </Link>
        </header>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading registrations...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No registrations found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((registration) => (
              <div
                key={registration.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  Ticket: {registration.ticketNumber}
                </p>
                <p className="mt-2 text-xs text-zinc-600">
                  Status: {registration.attendanceStatus}
                </p>
                <p className="mt-2 text-xs text-zinc-600">
                  Event ID: {registration.eventId}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  User ID: {registration.userId}
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  Registered: {new Date(registration.registeredAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
