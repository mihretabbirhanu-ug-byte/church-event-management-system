"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
  createdAt: string;
};

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"ALL" | User["role"]>("ALL");
  const [savingId, setSavingId] = useState<string | null>(null);

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

  const filteredUsers = users.filter((user) => {
    const q = query.trim().toLowerCase();
    const searchMatch =
      !q ||
      user.fullName.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.phone.toLowerCase().includes(q);
    const roleMatch = roleFilter === "ALL" ? true : user.role === roleFilter;
    return searchMatch && roleMatch;
  });

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
        err instanceof Error ? err.message : "Unable to update user role.";
      setError(message);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="min-h-full bg-white px-4 py-4 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-normal tracking-tight text-zinc-900">
              Assign roles
            </h1>
          </div>
        </header>

        <div className="p-0">
          <p className="mt-1 text-sm text-zinc-600">
            Search and filter system users ({filteredUsers.length} user
            {filteredUsers.length === 1 ? "" : "s"})
          </p>
          <div className="mt-4 flex flex-col gap-3 md:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, email, or phone"
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm md:flex-1"
            />
            <select
              value={roleFilter}
              onChange={(event) =>
                setRoleFilter(event.target.value as "ALL" | User["role"])
              }
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm md:w-52"
            >
              <option value="ALL">All Roles</option>
              <option value="ADMIN">Admin</option>
              <option value="MEMBER">Member</option>
              <option value="VOLUNTEER">Volunteer</option>
            </select>
          </div>
        </div>

        {error ? (
          <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="shimmer h-6 w-1/2 rounded-md" />
                  <div className="shimmer h-4 w-2/3 rounded-md" />
                  <div className="shimmer h-4 w-1/3 rounded-md" />
                  <div className="shimmer h-8 w-40 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr className="border-b border-zinc-200 text-left text-xs uppercase tracking-[0.12em] text-zinc-500">
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Email</th>
                    <th className="px-5 py-3">Phone</th>
                    <th className="px-5 py-3">Role</th>
                    <th className="px-5 py-3">Date Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td className="px-5 py-6 text-zinc-600" colSpan={5}>
                        No users found for your search/filter.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-zinc-100 last:border-b-0">
                        <td className="px-5 py-4 text-zinc-900">{user.fullName}</td>
                        <td className="px-5 py-4 text-zinc-700">{user.email}</td>
                        <td className="px-5 py-4 text-zinc-700">{user.phone}</td>
                        <td className="px-5 py-4 text-zinc-900">
                          <div className="flex items-center gap-2">
                            <select
                              value={user.role}
                              onChange={(event) =>
                                updateRole(user.id, event.target.value as User["role"])
                              }
                              className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-sm"
                              disabled={savingId === user.id}
                            >
                              <option value="ADMIN">ADMIN</option>
                              <option value="MEMBER">MEMBER</option>
                              <option value="VOLUNTEER">VOLUNTEER</option>
                            </select>
                            {savingId === user.id ? (
                              <span className="text-xs text-zinc-500">Saving...</span>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-zinc-700">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

