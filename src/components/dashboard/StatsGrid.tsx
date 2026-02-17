import { Card, CardContent } from '@/components/ui/card'
import { ShoppingCart, TrendingUp, AlertCircle, Clock, DollarSign, Package } from 'lucide-react'

const stats = [
  {
    icon: ShoppingCart,
    label: 'Total Orders',
    value: '0',
    change: '0',
    positive: true,
  },
  {
    icon: DollarSign,
    label: 'GMV',
    value: '0',
    change: '0',
    positive: true,
  },
  {
    icon: AlertCircle,
    label: 'RTO %',
    value: '0',
    change: '0',
    positive: true,
  },
  {
    icon: Clock,
    label: 'Pending Approvals',
    value: '0',
    change: '0',
    positive: false,
  },
  {
    icon: TrendingUp,
    label: 'Active Suppliers',
    value: '0',
    change: '0',
    positive: true,
  },
  {
    icon: Package,
    label: 'Products Listed',
    value: '0',
    change: '0',
    positive: true,
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-border bg-card hover:shadow-sm transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p
                    className={`text-xs font-medium ${
                      stat.positive ? 'text-green-600' : 'text-orange-600'
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
