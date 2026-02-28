import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Manage Orders - Admin Panel',
  description: 'View and manage all orders on the platform',
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Orders</h1>
        <p className="text-muted-foreground mt-1">
          Central order visibility and management
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Orders Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Orders management module coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
