import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'RTO Management - Admin Panel',
  description: 'Return-to-origin governance',
}

export default function RTOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">RTO Management</h1>
        <p className="text-muted-foreground mt-1">
          Return-to-origin governance and analytics
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>RTO Control Center</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">RTO management module coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
