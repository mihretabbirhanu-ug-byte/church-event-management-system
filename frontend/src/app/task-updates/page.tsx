"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type TaskUpdate = {
  id: string;
  message: string;
  taskId: string;
  userId: string;
  createdAt: string;
};

export default function TaskUpdatesPage() {
  const router = useRouter();
  const [items, setItems] = useState<TaskUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const data = await fetchJson<TaskUpdate[]>("/task-updates", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load task updates.";
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
              Task updates
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Latest task notes
            </h1>
          </div>
          <Link
            href="/tasks"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to tasks
          </Link>
        </header>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading task updates...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No task updates found.
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((update) => (
              <div
                key={update.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  {update.message}
                </p>
                <div className="mt-3 space-y-1 text-xs text-zinc-600">
                  <p>Task ID: {update.taskId}</p>
                  <p>User ID: {update.userId}</p>
                </div>
                <p className="mt-3 text-xs text-zinc-500">
                  {new Date(update.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
