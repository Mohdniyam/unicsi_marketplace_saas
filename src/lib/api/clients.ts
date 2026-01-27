export async function apiFetch(path: string, options?: RequestInit) {
    console.log(process.env.NEXT_PUBLIC_API_URL)
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  })
}
