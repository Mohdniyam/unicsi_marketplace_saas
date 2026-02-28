import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Analytics - Admin Panel',
  description: 'Business intelligence and metrics',
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Business intelligence and performance metrics
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Analytics module coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
