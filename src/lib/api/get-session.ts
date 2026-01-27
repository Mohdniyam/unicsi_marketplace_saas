import { apiFetch } from "./clients"

export async function getSession() {
  const res = await apiFetch("/auth/me")

  if (!res.ok) return null
  return res.json()
}
