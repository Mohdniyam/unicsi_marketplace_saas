'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading.jsx'

export default function CategoryPricingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Category-wise Pricing</h1>
          <p className="text-muted-foreground">Set commission rates for specific product categories</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Add Category Rule
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 bg-input px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search categories..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">48</p>
              <p className="text-sm text-muted-foreground">Categories with Custom Rates</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">12-18%</p>
              <p className="text-sm text-muted-foreground">Commission Range</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Suspense fallback={<Loading />}>
        <Card>
          <CardHeader>
            <CardTitle>Category Commission Rules</CardTitle>
            <CardDescription>Showing 1-10 of 48 categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
                <div>
                  <p className="font-medium">Electronics</p>
                  <p className="text-sm text-muted-foreground">1,242 products</p>
                </div>
                <div className="text-right">
                  <Badge>15%</Badge>
                  <p className="text-xs text-muted-foreground mt-1">vs 13% global</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
                <div>
                  <p className="font-medium">Fashion & Apparel</p>
                  <p className="text-sm text-muted-foreground">1,856 products</p>
                </div>
                <div className="text-right">
                  <Badge>12%</Badge>
                  <p className="text-xs text-muted-foreground mt-1">vs 13% global</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
                <div>
                  <p className="font-medium">Home & Garden</p>
                  <p className="text-sm text-muted-foreground">892 products</p>
                </div>
                <div className="text-right">
                  <Badge>14%</Badge>
                  <p className="text-xs text-muted-foreground mt-1">vs 13% global</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
                <div>
                  <p className="font-medium">Sports & Outdoors</p>
                  <p className="text-sm text-muted-foreground">567 products</p>
                </div>
                <div className="text-right">
                  <Badge>13%</Badge>
                  <p className="text-xs text-muted-foreground mt-1">Global rate</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30">
                <div>
                  <p className="font-medium">Beauty & Personal Care</p>
                  <p className="text-sm text-muted-foreground">734 products</p>
                </div>
                <div className="text-right">
                  <Badge>16%</Badge>
                  <p className="text-xs text-muted-foreground mt-1">vs 13% global</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Suspense>
    </div>
  )
}
