import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, TrendingUp, Clock, Zap } from 'lucide-react'

const alerts = [
  {
    icon: TrendingUp,
    title: 'High RTO Alert',
    description: 'Supplier "Tech Solutions" RTO increased to 6.2%',
    severity: 'warning',
  },
  {
    icon: Clock,
    title: 'Pending Approvals',
    description: '234 products awaiting approval',
    severity: 'info',
  },
  {
    icon: Zap,
    title: 'Fraud Signal',
    description: '3 suspicious transactions detected',
    severity: 'danger',
  },
]

export function AlertsSection() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>Active alerts requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const Icon = alert.icon
            const bgColor = {
              warning: 'bg-orange-50 border-l-4 border-orange-400',
              info: 'bg-blue-50 border-l-4 border-blue-400',
              danger: 'bg-red-50 border-l-4 border-red-400',
            }[alert.severity]

            const iconColor = {
              warning: 'text-orange-600',
              info: 'text-blue-600',
              danger: 'text-red-600',
            }[alert.severity]

            return (
              <div key={index} className={`p-3 rounded ${bgColor}`}>
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColor}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {alert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {alert.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
