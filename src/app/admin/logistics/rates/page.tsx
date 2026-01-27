'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function RateCardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rate Cards</h1>
          <p className="text-muted-foreground">Manage courier shipping rates and weight slabs</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Update Rates
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹45</p>
              <p className="text-sm text-muted-foreground">Avg Metro Rate (500g)</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹65</p>
              <p className="text-sm text-muted-foreground">Avg Regional Rate (500g)</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹95</p>
              <p className="text-sm text-muted-foreground">Avg Remote Rate (500g)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>DHL Express Rate Card</CardTitle>
          <CardDescription>Current rates for DHL Express shipping</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Metro (Delhi, Mumbai, Bangalore)</p>
              <p className="text-sm text-muted-foreground">500g</p>
            </div>
            <Badge>₹42</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Metro (Delhi, Mumbai, Bangalore)</p>
              <p className="text-sm text-muted-foreground">1kg</p>
            </div>
            <Badge>₹65</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Tier-1 (Major Cities)</p>
              <p className="text-sm text-muted-foreground">500g</p>
            </div>
            <Badge>₹55</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Tier-1 (Major Cities)</p>
              <p className="text-sm text-muted-foreground">1kg</p>
            </div>
            <Badge>₹82</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Regional Coverage</p>
              <p className="text-sm text-muted-foreground">500g</p>
            </div>
            <Badge>₹68</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium">Regional Coverage</p>
              <p className="text-sm text-muted-foreground">1kg</p>
            </div>
            <Badge>₹95</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
