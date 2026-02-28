'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Download } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '../loading'

export default function AWBManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AWB Management</h1>
          <p className="text-muted-foreground">Manage and track air waybills for shipments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search AWB</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1 flex items-center gap-2 bg-input px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by AWB number, tracking ID..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2,847,531</p>
              <p className="text-sm text-muted-foreground">Total AWBs Generated</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">2,634,128</p>
              <p className="text-sm text-muted-foreground">Active AWBs</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">187,234</p>
              <p className="text-sm text-muted-foreground">Delivered</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">26,169</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AWB Status Distribution</CardTitle>
          <CardDescription>Current status of all air waybills</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Delivered</p>
              <p className="text-sm text-muted-foreground">Shipments successfully delivered</p>
            </div>
            <Badge className="bg-green-100 text-green-800">187,234 (6.6%)</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">In Transit</p>
              <p className="text-sm text-muted-foreground">Currently being transported</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800">1,856,421 (65.2%)</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Processing</p>
              <p className="text-sm text-muted-foreground">Awaiting collection or sorting</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">634,892 (22.3%)</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Issues</p>
              <p className="text-sm text-muted-foreground">Damaged, lost, or returned</p>
            </div>
            <Badge className="bg-red-100 text-red-800">25,881 (0.9%)</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Generated</p>
              <p className="text-sm text-muted-foreground">Newly created, not yet processed</p>
            </div>
            <Badge className="bg-gray-100 text-gray-800">143,103 (5.0%)</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent AWBs</CardTitle>
          <CardDescription>Latest generated air waybills</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Loading />}>
            <div className="text-center py-12 text-muted-foreground">
              <p>AWB list table will be displayed here</p>
            </div>
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
