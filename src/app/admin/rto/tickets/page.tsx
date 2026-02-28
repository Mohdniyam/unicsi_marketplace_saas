'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DisputeTicketsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dispute Tickets</h1>
        <p className="text-muted-foreground">Manage customer and supplier dispute tickets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">47</p>
              <p className="text-sm text-muted-foreground">Open Tickets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">23</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">2.1</p>
              <p className="text-sm text-muted-foreground">Avg Resolution Days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹31.5L</p>
              <p className="text-sm text-muted-foreground">Total Dispute Value</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ticket Types</CardTitle>
          <CardDescription>Breakdown of dispute types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Non-Delivery</p>
              <p className="text-sm text-muted-foreground">Order not delivered within promised time</p>
            </div>
            <Badge className="bg-red-100 text-red-800">18</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Damaged Product</p>
              <p className="text-sm text-muted-foreground">Item received in damaged condition</p>
            </div>
            <Badge className="bg-red-100 text-red-800">14</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Wrong Item</p>
              <p className="text-sm text-muted-foreground">Different product received than ordered</p>
            </div>
            <Badge className="bg-red-100 text-red-800">9</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Quality Mismatch</p>
              <p className="text-sm text-muted-foreground">Product quality not as described</p>
            </div>
            <Badge className="bg-orange-100 text-orange-800">4</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Missing Items</p>
              <p className="text-sm text-muted-foreground">Some items from order missing</p>
            </div>
            <Badge className="bg-orange-100 text-orange-800">2</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resolution Status</CardTitle>
          <CardDescription>Ticket resolution breakdown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Full Refund</span>
            <Badge variant="outline">24</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Replacement</span>
            <Badge variant="outline">12</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Partial Refund</span>
            <Badge variant="outline">8</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Compensation</span>
            <Badge variant="outline">3</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
