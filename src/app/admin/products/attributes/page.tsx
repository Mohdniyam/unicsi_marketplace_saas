'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function AttributesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Attributes</h1>
          <p className="text-muted-foreground">Manage product attributes and values</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Attribute
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Attributes</CardTitle>
          <CardDescription>Configure attributes used across product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Size</p>
                  <p className="text-sm text-muted-foreground">Dropdown • 127 values</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Color</p>
                  <p className="text-sm text-muted-foreground">Dropdown • 89 values</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Material</p>
                  <p className="text-sm text-muted-foreground">Dropdown • 45 values</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Brand</p>
                  <p className="text-sm text-muted-foreground">Text • Auto-generated</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weight</p>
                  <p className="text-sm text-muted-foreground">Numeric • With unit</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Warranty</p>
                  <p className="text-sm text-muted-foreground">Dropdown • 12 values</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
