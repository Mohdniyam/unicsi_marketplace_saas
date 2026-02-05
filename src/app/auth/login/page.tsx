'use client'

import { useState } from 'react'

export default function LoginPage() {
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

      // 🚀 Redirect based on role
      if (data.data.role === 'ADMIN') {
        window.location.href = "https://admin.unicsi.com/admin/dashboard"
      }
      else if (data.data.role === 'PARTNER') {
        window.location.href = "https://partner.unicsi.com/partner/dashboard"
      }
      else if (data.data.role === 'KEY_ACCOUNT_MANAGER') {
        window.location.href = "https://kam.unicsi.com/kam/dashboard"
      }
      else {
        window.location.href = "https://unicsi.com"
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
        className="w-full my-button text-white p-2"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
