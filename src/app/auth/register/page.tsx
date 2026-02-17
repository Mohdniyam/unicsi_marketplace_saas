'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'RESELLER',
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }
    )

    if (res.ok) {
      router.push('/auth/login')
    } else {
      alert('Registration failed')
    }
  }

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white p-6 rounded w-96 space-y-4"
    >
      <h1 className="text-xl font-bold">Register</h1>

      <input
        placeholder="Name"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button className="w-full bg-black text-white p-2 my-button">
        Register
      </button>

      {/* login link */}
      <p className="text-center">
        Already have an account? <a href="/auth/login" className="text-blue-500">Login</a>
      </p>
    </form>
  )
}
