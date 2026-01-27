'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function RejectedProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rejected Products</h1>
          <p className="text-muted-foreground">Products that have been rejected during review</p>
        </div>
        <Badge variant="destructive" className="text-lg px-4 py-2">
          142 Rejected
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">142</p>
              <p className="text-sm text-muted-foreground">Total Rejected</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">34</p>
              <p className="text-sm text-muted-foreground">Resubmitted</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">3.2</p>
              <p className="text-sm text-muted-foreground">Avg Rejection Rate %</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rejection Reasons</CardTitle>
          <CardDescription>Common reasons for product rejections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm font-medium">Non-compliant Images</span>
              <Badge variant="outline">42</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm font-medium">Incomplete Details</span>
              <Badge variant="outline">38</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm font-medium">Prohibited Category</span>
              <Badge variant="outline">28</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm font-medium">Policy Violation</span>
              <Badge variant="outline">18</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <span className="text-sm font-medium">Pricing Issues</span>
              <Badge variant="outline">16</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rejected Products List</CardTitle>
          <CardDescription>View detailed rejection information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>Rejected products table will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
