'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useForgotPassword } from '@/hooks/useForgotPassword'
import { AlertCircle, ArrowLeft, CheckCircle2, Mail } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ForgotPasswordPage() {
  const [formEmail, setFormEmail] = useState('')
  const { loading, error, success, requestPasswordReset } = useForgotPassword()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formEmail.trim()) {
      return
    }

    try {
      await requestPasswordReset(formEmail)
    } catch {
      // Error is handled by the hook
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardTitle className="text-center">Check Your Email</CardTitle>
            <CardDescription className="text-center">
              We've sent a password reset link to <span className="font-medium text-foreground">{formEmail}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">What to do next:</p>
              <ol className="text-sm text-muted-foreground space-y-2 ml-4 list-decimal">
                <li>Check your email inbox for the reset link</li>
                <li>Click the link to create a new password</li>
                <li>Sign in with your new password</li>
              </ol>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                Didn't receive the email?{' '}
                <button
                  onClick={() => setFormEmail('')}
                  className="text-primary hover:underline font-medium"
                >
                  Try again
                </button>
              </p>
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-center">Forgot Your Password?</CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading || !formEmail.trim()}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">Or</span>
              </div>
            </div>

            <Link href="/login">
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Button>
            </Link>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <span className="font-medium">Tip:</span> Password reset links expire in 24 hours for security reasons.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
