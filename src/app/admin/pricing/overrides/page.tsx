'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function SupplierOverridesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Supplier Overrides</h1>
          <p className="text-muted-foreground">Manage individual supplier commission rates</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Add Override
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24</p>
              <p className="text-sm text-muted-foreground">Active Overrides</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">8-18%</p>
              <p className="text-sm text-muted-foreground">Override Range</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹2.3Cr</p>
              <p className="text-sm text-muted-foreground">GMV from Overrides</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supplier Commission Overrides</CardTitle>
          <CardDescription>Custom rates for individual suppliers overriding category/global rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
              <div>
                <p className="font-medium">Premium Electronics Co.</p>
                <p className="text-sm text-muted-foreground">ID: SUP-2847 • 842 products</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 border-green-200">10%</Badge>
                <p className="text-xs text-muted-foreground mt-1">High volume discount</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
              <div>
                <p className="font-medium">Fashion Hub Ltd</p>
                <p className="text-sm text-muted-foreground">ID: SUP-3421 • 1,230 products</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 border-green-200">11%</Badge>
                <p className="text-xs text-muted-foreground mt-1">Strategic partner</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
              <div>
                <p className="font-medium">Quality Home Goods</p>
                <p className="text-sm text-muted-foreground">ID: SUP-4856 • 567 products</p>
              </div>
              <div className="text-right">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">15%</Badge>
                <p className="text-xs text-muted-foreground mt-1">Higher risk category</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
              <div>
                <p className="font-medium">Sports Equipment Direct</p>
                <p className="text-sm text-muted-foreground">ID: SUP-5623 • 423 products</p>
              </div>
              <div className="text-right">
                <Badge className="bg-red-100 text-red-800 border-red-200">18%</Badge>
                <p className="text-xs text-muted-foreground mt-1">New supplier penalty</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
              <div>
                <p className="font-medium">Beauty & Wellness Store</p>
                <p className="text-sm text-muted-foreground">ID: SUP-6234 • 892 products</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 border-green-200">9%</Badge>
                <p className="text-xs text-muted-foreground mt-1">Premium seller</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
