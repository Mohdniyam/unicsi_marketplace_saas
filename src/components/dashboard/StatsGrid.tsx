import { Card, CardContent } from '@/components/ui/card'
import { ShoppingCart, TrendingUp, AlertCircle, Clock, DollarSign, Package } from 'lucide-react'

const stats = [
  {
    icon: ShoppingCart,
    label: 'Total Orders',
    value: '12,456',
    change: '+12.5%',
    positive: true,
  },
  {
    icon: DollarSign,
    label: 'GMV',
    value: '$2.4M',
    change: '+8.2%',
    positive: true,
  },
  {
    icon: AlertCircle,
    label: 'RTO %',
    value: '4.2%',
    change: '-1.3%',
    positive: true,
  },
  {
    icon: Clock,
    label: 'Pending Approvals',
    value: '234',
    change: '+45 today',
    positive: false,
  },
  {
    icon: TrendingUp,
    label: 'Active Suppliers',
    value: '1,289',
    change: '+25 this week',
    positive: true,
  },
  {
    icon: Package,
    label: 'Products Listed',
    value: '45,678',
    change: '+2,145 this month',
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
