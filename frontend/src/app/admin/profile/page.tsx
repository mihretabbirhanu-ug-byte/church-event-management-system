"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchJson } from "@/lib/api";
import {
  getToken,
  getUser,
  setUser,
} from "@/lib/auth";

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024;

function initialsFromName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).slice(0, 2);
  if (parts.length === 0) return "A";
  return parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
}

export default function AdminProfilePage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<ReturnType<typeof getUser> | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (!token || !user) {
      router.push("/sign-in");
      return;
    }
    if (user.role !== "ADMIN") {
      router.push("/me");
      return;
    }

    setCurrentUser(user);
  }, [router]);

  const notifyUserChanged = () => {
    window.dispatchEvent(new Event("profile-user-updated"));
  };

  const persistUserUpdate = (updatedUser: ReturnType<typeof getUser>) => {
    if (!updatedUser) {
      return;
    }
    setCurrentUser(updatedUser);
    setUser(updatedUser);
    notifyUserChanged();
  };

  const handleAvatarUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !currentUser) {
      return;
    }

    setError("");
    setSuccess("");

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setError("Image is too large. Please upload an image up to 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (!result) {
        setError("Unable to read image file.");
        return;
      }

      try {
        const token = getToken();
        if (!token) {
          router.push("/sign-in");
          return;
        }

        const updated = await fetchJson<NonNullable<ReturnType<typeof getUser>>>(
          `/users/${currentUser.id}`,
          {
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}` },
            body: { avatarUrl: result },
          }
        );
        persistUserUpdate(updated);
        setSuccess("Profile picture updated.");
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to update profile picture.";
        setError(message);
      }
    };
    reader.onerror = () => {
      setError("Unable to read image file.");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = async () => {
    if (!currentUser) {
      return;
    }

    setError("");
    setSuccess("");

    try {
      const token = getToken();
      if (!token) {
        router.push("/sign-in");
        return;
      }

      const updated = await fetchJson<NonNullable<ReturnType<typeof getUser>>>(
        `/users/${currentUser.id}`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
          body: { avatarUrl: null },
        }
      );
      persistUserUpdate(updated);
      setSuccess("Profile picture removed.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to remove profile picture.";
      setError(message);
    }
  };

  return (
    <div className="min-h-full bg-white px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Admin profile
            </p>
            <h1 className="text-3xl font-normal tracking-tight text-zinc-900">
              Profile details
            </h1>
          </div>
        </header>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            {success}
          </div>
        ) : null}

        {currentUser ? (
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                {currentUser.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={`${currentUser.fullName} profile`}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-orange-200 via-rose-300 to-fuchsia-400 text-xl font-bold text-white">
                    {initialsFromName(currentUser.fullName)}
                  </div>
                )}
                <div>
                  <p className="text-xl font-semibold text-zinc-900">{currentUser.fullName}</p>
                  <p className="text-sm text-zinc-600">{currentUser.role}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
                >
                  Upload picture
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                {currentUser.avatarUrl ? (
                  <button
                    type="button"
                    onClick={handleRemoveAvatar}
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:border-rose-200 hover:text-rose-700"
                  >
                    Remove picture
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Email</p>
                <p className="mt-2 text-sm text-zinc-800">{currentUser.email}</p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Phone</p>
                <p className="mt-2 text-sm text-zinc-800">{currentUser.phone}</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="shimmer h-20 w-20 rounded-full" />
                <div className="space-y-2">
                  <div className="shimmer h-6 w-40 rounded-md" />
                  <div className="shimmer h-4 w-24 rounded-md" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="shimmer h-9 w-32 rounded-md" />
                <div className="shimmer h-9 w-32 rounded-md" />
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="shimmer h-20 w-full rounded-xl" />
              <div className="shimmer h-20 w-full rounded-xl" />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

