import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const topSuppliers = [
  {
    id: 1,
    name: 'Tech Solutions Ltd',
    orders: 1234,
    rto: '2.1%',
    status: 'Active',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Fashion Forward Inc',
    orders: 987,
    rto: '3.5%',
    status: 'Active',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Electronics Plus',
    orders: 856,
    rto: '2.8%',
    status: 'Active',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Home & Living Co',
    orders: 743,
    rto: '4.2%',
    status: 'Pending Review',
    rating: 4.3,
  },
  {
    id: 5,
    name: 'Beauty Essentials',
    orders: 654,
    rto: '1.9%',
    status: 'Active',
    rating: 4.9,
  },
]

export function TopSuppliers() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Top Suppliers by Performance</CardTitle>
        <CardDescription>Based on order volume and RTO metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* {topSuppliers.map((supplier) => (
            <div key={supplier.id} className="flex items-center justify-between p-3 my-button rounded-lg hover:my-button transition-colors">
              <div className="flex items-center gap-3 flex-1">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="my-button text-primary-foreground text-xs font-semibold">
                    {supplier.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {supplier.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {supplier.orders} orders • Rating: {supplier.rating}⭐
                  </p>
                </div>
              </div>
              <div className="text-right ml-4">
                <Badge variant={supplier.status === 'Active' ? 'default' : 'secondary'} className="mb-1 block">
                  {supplier.status}
                </Badge>
                <p className="text-xs text-muted-foreground">RTO: {supplier.rto}</p>
              </div>
            </div>
          ))} */}
        </div>
      </CardContent>
    </Card>
  )
}
