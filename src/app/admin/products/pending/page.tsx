'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Loading = () => null

export default function PendingApprovalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pending Approvals</h1>
          <p className="text-muted-foreground">Review and approve products pending verification</p>
        </div>
        <Badge variant="default" className="my-button text-primary-foreground text-lg px-4 py-2">
          47 Pending
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Approval Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1 flex items-center gap-2 bg-input px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by product name or SKU..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
          <Button variant="outline" className="my-button text-primary-foreground">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">47</p>
              <p className="text-sm text-muted-foreground">Awaiting Review</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">12</p>
              <p className="text-sm text-muted-foreground">Needs Revision</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2.3</p>
              <p className="text-sm text-muted-foreground">Avg Review Time (hrs)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Suspense fallback={<Loading />}>
        <Card>
          <CardHeader>
            <CardTitle>Products Pending Approval</CardTitle>
            <CardDescription>Review each product to approve or reject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <p>Pending products table will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </Suspense>
    </div>
  )
}
