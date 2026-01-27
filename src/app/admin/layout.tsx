import React from "react"
import type { Metadata } from 'next'
import { AdminLayout } from '@/components/layout/AdminLayout'

export const metadata: Metadata = {
  title: 'Admin Dashboard - UNICSI',
  description: 'Super Admin Panel for UNICSI Marketplace',
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}
