'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle } from 'lucide-react'

export default function PenaltiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">RTO Penalties</h1>
        <p className="text-muted-foreground">Monitor and manage supplier penalties for high RTO rates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">34</p>
              <p className="text-sm text-muted-foreground">Active Penalties</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">12</p>
              <p className="text-sm text-muted-foreground">Suspended Suppliers</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹47.2L</p>
              <p className="text-sm text-muted-foreground">Total Penalties</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">18</p>
              <p className="text-sm text-muted-foreground">Appeals Pending</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-red-200 bg-red-50">
        <CardContent className="flex gap-3 pt-6">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-900">Critical: 3 suppliers at risk of suspension</p>
            <p className="text-sm text-red-800">These suppliers exceed RTO limits and may be suspended within 48 hours</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Penalty Types</CardTitle>
          <CardDescription>Different categories of RTO-related penalties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Warning</p>
              <p className="text-sm text-muted-foreground">RTO rate exceeds 4% • Supplier notified</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">12 suppliers</Badge>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Commission Reduction</p>
              <p className="text-sm text-muted-foreground">5-10% commission reduction for 30 days</p>
            </div>
            <Badge className="bg-orange-100 text-orange-800">8 suppliers</Badge>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Featured Listing Removal</p>
              <p className="text-sm text-muted-foreground">Products removed from featured sections</p>
            </div>
            <Badge className="bg-red-100 text-red-800">7 suppliers</Badge>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Partial Suspension</p>
              <p className="text-sm text-muted-foreground">Limited to certain categories • 7 days</p>
            </div>
            <Badge className="bg-red-100 text-red-800">5 suppliers</Badge>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Full Suspension</p>
              <p className="text-sm text-muted-foreground">Account completely suspended • Pending appeals</p>
            </div>
            <Badge className="bg-red-100 text-red-800">2 suppliers</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Penalties Applied</CardTitle>
          <CardDescription>Latest penalties issued this month</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">Premium Electronics Co.</p>
                <p className="text-sm text-muted-foreground">RTO rate: 6.2% • Applied: 2 days ago</p>
              </div>
              <Badge className="bg-orange-100 text-orange-800">Commission Reduced</Badge>
            </div>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">Fashion Hub Ltd</p>
                <p className="text-sm text-muted-foreground">RTO rate: 4.8% • Applied: 5 days ago</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
