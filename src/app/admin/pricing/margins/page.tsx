'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function MarginCapsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Margin Caps</h1>
          <p className="text-muted-foreground">Set maximum and minimum margin limits for suppliers</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Update Caps
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">65%</p>
              <p className="text-sm text-muted-foreground">Max Margin Cap</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">5%</p>
              <p className="text-sm text-muted-foreground">Min Margin Floor</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">847</p>
              <p className="text-sm text-muted-foreground">Products with Cap</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">34</p>
              <p className="text-sm text-muted-foreground">Violations This Week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Category Margin Settings</CardTitle>
          <CardDescription>Margin caps and floors by category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Electronics</p>
              <p className="text-sm text-muted-foreground">1,242 products</p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex gap-2 justify-end">
                <Badge variant="outline" className="bg-green-50">Min: 8%</Badge>
                <Badge variant="outline" className="bg-red-50">Max: 60%</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Fashion & Apparel</p>
              <p className="text-sm text-muted-foreground">1,856 products</p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex gap-2 justify-end">
                <Badge variant="outline" className="bg-green-50">Min: 5%</Badge>
                <Badge variant="outline" className="bg-red-50">Max: 65%</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Home & Garden</p>
              <p className="text-sm text-muted-foreground">892 products</p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex gap-2 justify-end">
                <Badge variant="outline" className="bg-green-50">Min: 10%</Badge>
                <Badge variant="outline" className="bg-red-50">Max: 55%</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Beauty & Personal Care</p>
              <p className="text-sm text-muted-foreground">734 products</p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex gap-2 justify-end">
                <Badge variant="outline" className="bg-green-50">Min: 6%</Badge>
                <Badge variant="outline" className="bg-red-50">Max: 70%</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Violations</CardTitle>
          <CardDescription>Products with margins outside defined caps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-red-900">Premium Smart Watch</p>
                  <p className="text-sm text-red-800">Margin: 72% (Cap: 65%)</p>
                </div>
                <Badge className="bg-red-600">High Risk</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
