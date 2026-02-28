'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download } from 'lucide-react'

export default function SupplierPayoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Supplier Payouts</h1>
          <p className="text-muted-foreground">Manage supplier payment settlements and transfers</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹28.4Cr</p>
              <p className="text-sm text-muted-foreground">Paid This Month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹12.8Cr</p>
              <p className="text-sm text-muted-foreground">Pending Payouts</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">342</p>
              <p className="text-sm text-muted-foreground">Suppliers Paid</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">98.2%</p>
              <p className="text-sm text-muted-foreground">On-Time Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payout Status</CardTitle>
          <CardDescription>Current payout cycle status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Paid Payouts</p>
              <p className="text-sm text-muted-foreground">Successfully transferred</p>
            </div>
            <Badge className="bg-green-100 text-green-800">₹28.4Cr</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Pending Payouts</p>
              <p className="text-sm text-muted-foreground">Waiting for next cycle</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">₹12.8Cr</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">On Hold</p>
              <p className="text-sm text-muted-foreground">Waiting for settlement</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800">₹3.2Cr</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Failed Transfers</p>
              <p className="text-sm text-muted-foreground">Retry scheduled</p>
            </div>
            <Badge className="bg-red-100 text-red-800">₹82L</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payouts</CardTitle>
          <CardDescription>Latest supplier payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>Recent payouts table will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
