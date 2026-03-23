"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
};

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

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
        const usersData = await fetchJson<User[]>("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(usersData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load users.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const updateRole = async (userId: string, role: User["role"]) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setSavingId(userId);
    setError("");
    try {
      const updated = await fetchJson<User>(`/users/${userId}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: { role },
      });
      setUsers((prev) => prev.map((u) => (u.id === userId ? updated : u)));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update user.";
      setError(message);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Admin users
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Assign roles
            </h1>
          </div>
          <Link
            href="/admin/dashboard"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to dashboard
          </Link>
        </header>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Search users
          </label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, or phone"
            className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
          />
        </div>

        {error ? (
          <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading users...
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {users
              .filter((user) => {
                const q = query.trim().toLowerCase();
                if (!q) return true;
                return (
                  user.fullName.toLowerCase().includes(q) ||
                  user.email.toLowerCase().includes(q) ||
                  user.phone.toLowerCase().includes(q)
                );
              })
              .map((user) => (
              <div
                key={user.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-zinc-900">
                  {user.fullName}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{user.email}</p>
                <p className="mt-1 text-sm text-zinc-600">{user.phone}</p>
                <div className="mt-4 flex items-center gap-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Role
                  </label>
                  <select
                    value={user.role}
                    onChange={(event) =>
                      updateRole(user.id, event.target.value as User["role"])
                    }
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-1 text-sm"
                    disabled={savingId === user.id}
                  >
                    <option value="MEMBER">MEMBER</option>
                    <option value="VOLUNTEER">VOLUNTEER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
