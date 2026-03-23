"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { useParams } from "next/navigation";

type InviteLink = {
  id: string;
  token: string;
  expiresAt?: string | null;
  event?: {
    id: string;
    title: string;
    description?: string | null;
    startDate: string;
    location?: string | null;
  };
};

export default function InvitePage() {
  const params = useParams<{ token: string }>();
  const [invite, setInvite] = useState<InviteLink | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const token = getToken();
        if (!token) {
          setError("Please sign in to view this invite link.");
          return;
        }
        const data = await fetchJson<InviteLink[]>("/event-invite-links", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const match = data.find((item) => item.token === params.token);
        if (!match) {
          setError("Invite link not found.");
          return;
        }
        setInvite(match);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load invite.";
        setError(message);
      }
    };

    load();
  }, [params.token]);

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        {error ? (
          <p className="text-sm text-rose-600">{error}</p>
        ) : invite?.event ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              You are invited
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-zinc-900">
              {invite.event.title}
            </h1>
            <p className="mt-3 text-sm text-zinc-600">
              {invite.event.description || "Join us for this church event."}
            </p>
            <div className="mt-4 space-y-1 text-sm text-zinc-600">
              <p>Starts: {new Date(invite.event.startDate).toLocaleString()}</p>
              {invite.event.location ? (
                <p>Location: {invite.event.location}</p>
              ) : null}
              {invite.expiresAt ? (
                <p>Invite expires: {new Date(invite.expiresAt).toLocaleString()}</p>
              ) : null}
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              To attend, sign in and register for the event.
            </p>
          </>
        ) : (
          <p className="text-sm text-zinc-600">Loading invite...</p>
        )}
      </div>
    </div>
  );
}
