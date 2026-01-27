'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'

export default function RTORulesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">RTO Rules</h1>
          <p className="text-muted-foreground">Configure return-to-origin policies and thresholds</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Rule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24</p>
              <p className="text-sm text-muted-foreground">Active RTO Rules</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">3.8%</p>
              <p className="text-sm text-muted-foreground">Avg RTO Rate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹42L</p>
              <p className="text-sm text-muted-foreground">Monthly RTO Cost</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">127</p>
              <p className="text-sm text-muted-foreground">Suppliers on Alert</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>RTO Rule Configuration</CardTitle>
          <CardDescription>Active rules and thresholds for RTO management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Category-wise RTO Threshold</p>
              <p className="text-sm text-muted-foreground">Different limits for product categories</p>
              <div className="mt-2">
                <Badge variant="outline">Electronics: 2%</Badge>
                <Badge variant="outline" className="ml-2">Fashion: 5%</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Supplier-wise RTO Tracking</p>
              <p className="text-sm text-muted-foreground">Individual supplier RTO rate limits</p>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">Green &lt; 2%</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 ml-2">Yellow 2-5%</Badge>
                <Badge className="bg-red-100 text-red-800 ml-2">Red &gt; 5%</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">RTO Penalty Configuration</p>
              <p className="text-sm text-muted-foreground">Auto-penalties for high RTO rates</p>
              <div className="mt-2">
                <Badge variant="outline">Warning at 4%</Badge>
                <Badge variant="outline" className="ml-2">Suspension at 8%</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>

          <div className="flex items-start justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Reason-based RTO Classification</p>
              <p className="text-sm text-muted-foreground">Categorize RTO by root cause</p>
              <div className="mt-2">
                <Badge variant="outline">Address Issue</Badge>
                <Badge variant="outline" className="ml-2">Product Damage</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
