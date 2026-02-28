'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle } from 'lucide-react'

export default function CODSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">COD Settings</h1>
        <p className="text-muted-foreground">Cash on Delivery configuration and limits</p>
      </div>

      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="flex gap-3 pt-6">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-blue-900">COD is enabled for all regions</p>
            <p className="text-sm text-blue-800">Suppliers can accept cash payments up to configured limits</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹1,00,000</p>
              <p className="text-sm text-muted-foreground">Max COD Limit</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">2.5%</p>
              <p className="text-sm text-muted-foreground">COD Commission</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹23.4Cr</p>
              <p className="text-sm text-muted-foreground">Monthly COD Volume</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">1.2%</p>
              <p className="text-sm text-muted-foreground">Failed Transactions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>COD Regional Settings</CardTitle>
          <CardDescription>Configure COD by region and supplier category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Metro Cities</p>
              <p className="text-sm text-muted-foreground">Delhi, Mumbai, Bangalore, Hyderabad</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              <p className="text-xs text-muted-foreground mt-1">₹1,00,000 limit</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Tier-1 Cities</p>
              <p className="text-sm text-muted-foreground">All major state capitals</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              <p className="text-xs text-muted-foreground mt-1">₹50,000 limit</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Regional Coverage</p>
              <p className="text-sm text-muted-foreground">All serviceable areas</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              <p className="text-xs text-muted-foreground mt-1">₹25,000 limit</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Remote Areas</p>
              <p className="text-sm text-muted-foreground">Limited courier coverage</p>
            </div>
            <div className="text-right">
              <Badge className="bg-yellow-100 text-yellow-800">Conditional</Badge>
              <p className="text-xs text-muted-foreground mt-1">₹10,000 limit</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>COD Charges & Commission</CardTitle>
          <CardDescription>COD processing fees and commission structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Base COD Commission</span>
            <Badge variant="outline">2.5%</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Failed Transaction Fee</span>
            <Badge variant="outline">₹8 per order</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <span className="text-sm font-medium">Chargeback Fee</span>
            <Badge variant="outline">2% of order value</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
