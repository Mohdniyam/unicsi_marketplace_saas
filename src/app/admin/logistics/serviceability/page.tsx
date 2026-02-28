'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ServiceabilityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Serviceability</h1>
        <p className="text-muted-foreground">Manage delivery coverage and pin code serviceability</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">29,847</p>
              <p className="text-sm text-muted-foreground">Serviceable Pin Codes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">94.2%</p>
              <p className="text-sm text-muted-foreground">Population Coverage</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">2-3</p>
              <p className="text-sm text-muted-foreground">Avg Delivery Days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">1,423</p>
              <p className="text-sm text-muted-foreground">Non-Serviceable Pin Codes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Serviceability by Region</CardTitle>
          <CardDescription>Delivery coverage across different regions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">North India</p>
              <p className="text-sm text-muted-foreground">8,247 pin codes</p>
            </div>
            <Badge className="bg-green-100 text-green-800">99.2%</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">South India</p>
              <p className="text-sm text-muted-foreground">7,634 pin codes</p>
            </div>
            <Badge className="bg-green-100 text-green-800">98.8%</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">East India</p>
              <p className="text-sm text-muted-foreground">5,821 pin codes</p>
            </div>
            <Badge className="bg-green-100 text-green-800">97.5%</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">West India</p>
              <p className="text-sm text-muted-foreground">6,945 pin codes</p>
            </div>
            <Badge className="bg-green-100 text-green-800">98.3%</Badge>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium">Central India</p>
              <p className="text-sm text-muted-foreground">3,200 pin codes</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">92.1%</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
