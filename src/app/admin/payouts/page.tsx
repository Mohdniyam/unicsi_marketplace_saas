import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Payouts - Admin Panel',
  description: 'Financial settlement control',
}

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Payouts</h1>
        <p className="text-muted-foreground mt-1">
          Financial settlement and supplier payouts
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Payouts Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Payouts management module coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
