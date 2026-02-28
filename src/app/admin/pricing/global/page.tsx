'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertCircle } from 'lucide-react'

export default function GlobalCommissionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Global Commission</h1>
          <p className="text-muted-foreground">Set default commission rates across the platform</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Update Rates
        </Button>
      </div>

      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="flex gap-3 pt-6">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-900">Changes take effect in 24 hours</p>
            <p className="text-sm text-yellow-800">Commission rate changes are applied after 24 hours for fair supplier notification</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Global Rates</CardTitle>
          <CardDescription>Default commission rates applied to all new suppliers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Base Commission Rate</p>
              <p className="text-3xl font-bold text-primary">12.5%</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Payment Gateway Fee</p>
              <p className="text-3xl font-bold text-primary">1.5%</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Logistics Commission</p>
              <p className="text-3xl font-bold text-primary">2.0%</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Total Default Rate</p>
              <p className="text-3xl font-bold text-primary">16%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Commission Breakup</CardTitle>
          <CardDescription>Detailed commission structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Order Processing Fee</p>
                <p className="text-sm text-muted-foreground">Transactional fee</p>
              </div>
              <Badge variant="outline">8%</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Logistics Support Fee</p>
                <p className="text-sm text-muted-foreground">Fulfillment assistance</p>
              </div>
              <Badge variant="outline">2%</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Platform Ads Fee</p>
                <p className="text-sm text-muted-foreground">Marketing support</p>
              </div>
              <Badge variant="outline">1.5%</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">Payment Processing</p>
                <p className="text-sm text-muted-foreground">Gateway charges</p>
              </div>
              <Badge variant="outline">1.5%</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-primary/5">
              <div>
                <p className="font-medium">Total Commission</p>
                <p className="text-sm text-muted-foreground">Full breakdown</p>
              </div>
              <Badge className="bg-primary">13%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
