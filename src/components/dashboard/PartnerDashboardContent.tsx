import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StatsGrid } from './StatsGrid'
import { OrdersChart } from './OrdersChart'
import { TopSuppliers } from './TopSuppliers'
import { AlertsSection } from './AlertsSection'

export default function PartnerDashboardContent() {
    return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Get detailed insights about your Orders, Margins, GMV, RTO% etc.
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Chart */}
        <div className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Orders Overview</CardTitle>
              <CardDescription>
                Order trends for the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OrdersChart />
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <AlertsSection />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Suppliers */}
        <TopSuppliers />

        {/* Quick Actions */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 my-button text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors">
                Review Pending Products
              </button>
              <button className="w-full px-4 py-2 my-button text-foreground border border-border rounded-lg hover:bg-secondary/80 font-medium transition-colors">
                View High RTO Orders
              </button>
              <button className="w-full px-4 py-2 my-button text-foreground border border-border rounded-lg hover:bg-secondary/80 font-medium transition-colors">
                Manage Suppliers
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    )
}