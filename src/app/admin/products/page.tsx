import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Manage Products - Admin Panel',
  description: 'Product approval and control',
}

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Products</h1>
        <p className="text-muted-foreground mt-1">
          Product approval and control
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Products Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Products management module coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
