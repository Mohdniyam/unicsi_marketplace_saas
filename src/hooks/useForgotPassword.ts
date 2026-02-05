'use client'

import { useState, useCallback } from 'react'

export interface ForgotPasswordResponse {
  success: boolean
  message: string
  resetToken?: string
}

export function useForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')

  const requestPasswordReset = useCallback(async (userEmail: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Failed to send reset email')
      }

      const data: ForgotPasswordResponse = await response.json()
      setEmail(userEmail)
      setSuccess(true)
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process request'
      setError(errorMessage)
      console.error('[v0] Forgot password error:', errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const resetState = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
    setEmail('')
  }, [])

  return {
    loading,
    error,
    success,
    email,
    requestPasswordReset,
    resetState,
  }
}
