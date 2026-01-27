'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'

export default function CourierPartnersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courier Partners</h1>
          <p className="text-muted-foreground">Manage shipping and logistics partnerships</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Courier
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Active Partners</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">98.2%</p>
              <p className="text-sm text-muted-foreground">Avg Reliability</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">847K</p>
              <p className="text-sm text-muted-foreground">Shipments This Month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">3.2%</p>
              <p className="text-sm text-muted-foreground">Avg Damage Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Courier Partners List</CardTitle>
          <CardDescription>All active logistics and courier partners</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
            <div>
              <p className="font-medium">DHL Express</p>
              <p className="text-sm text-muted-foreground">Metro coverage • 247K shipments</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">99.1% Reliability</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
            <div>
              <p className="font-medium">FedEx India</p>
              <p className="text-sm text-muted-foreground">National coverage • 189K shipments</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">97.8% Reliability</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
            <div>
              <p className="font-medium">Blue Dart Express</p>
              <p className="text-sm text-muted-foreground">Pan-India coverage • 234K shipments</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">98.5% Reliability</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
            <div>
              <p className="font-medium">Ecom Express</p>
              <p className="text-sm text-muted-foreground">Regional coverage • 87K shipments</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">96.2% Reliability</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
            <div>
              <p className="font-medium">Shiprocket Premium</p>
              <p className="text-sm text-muted-foreground">Multi-carrier integration • 134K shipments</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">98.7% Reliability</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
