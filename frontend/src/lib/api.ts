export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

type FetchOptions = Omit<RequestInit, "body"> & { body?: unknown };

export async function fetchJson<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    let message = "Request failed.";
    try {
      const data = (await response.json()) as { message?: string };
      if (data?.message) {
        message = Array.isArray(data.message)
          ? data.message.join(" ")
          : data.message;
      }
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  return (await response.json()) as T;
}
