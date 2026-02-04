'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '../../orders/loading'

export default function LiveProductsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<Loading />}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Live Products</h1>
            <p className="text-muted-foreground">All active products available for sale</p>
          </div>
          <Badge variant="default" className="my-button text-primary-foreground text-lg px-4 py-2">
            3,847 Live
          </Badge>
        </div>
      </Suspense>

      <Card>
        <CardHeader>
          <CardTitle>Product Search & Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1 flex items-center gap-2 bg-input px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
          <Button variant="outline" className="my-button text-primary-foreground">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3,847</p>
              <p className="text-sm text-muted-foreground">Total Active</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹2.4Cr</p>
              <p className="text-sm text-muted-foreground">Total GMV</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">42.3%</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">892</p>
              <p className="text-sm text-muted-foreground">New This Week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Products List</CardTitle>
          <CardDescription>All currently active products in the marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>Live products table will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
