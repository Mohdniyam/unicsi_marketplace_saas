'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function SettlementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settlement Reports</h1>
        <p className="text-muted-foreground">Financial settlement and reconciliation reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹124.5Cr</p>
              <p className="text-sm text-muted-foreground">Total GMV</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹40.8Cr</p>
              <p className="text-sm text-muted-foreground">Total Payouts</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹16.2Cr</p>
              <p className="text-sm text-muted-foreground">Platform Revenue</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">100%</p>
              <p className="text-sm text-muted-foreground">Reconciliation Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <div className="text-center py-12 text-muted-foreground">
          <p>Settlement reports table will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}
