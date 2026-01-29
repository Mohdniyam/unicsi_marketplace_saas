'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
        {
          method: 'POST',
          credentials: 'include', // 🔥 REQUIRED
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      // 🚀 Redirect based on role (NO cookie handling here)
      if (data.data.role === 'ADMIN') {
        router.replace('/admin/dashboard')
      } else if (data.data.role === 'PARTNER') {
        router.replace('/partner/dashboard')
      } else if (data.data.role === 'KEY_ACCOUNT_MANAGER') {
        router.replace('/kam/dashboard')
      } else {
        router.replace('/')
      }
    } catch (err: any) {
      alert(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 rounded w-96 space-y-4"
    >
      <h1 className="text-xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white p-2"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
