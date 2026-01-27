'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function WalletManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Wallet Management</h1>
        <p className="text-muted-foreground">Manage supplier and partner wallet balances</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹47.3Cr</p>
              <p className="text-sm text-muted-foreground">Total Wallet Balance</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">₹28.4Cr</p>
              <p className="text-sm text-muted-foreground">Supplier Wallets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">₹18.9Cr</p>
              <p className="text-sm text-muted-foreground">Partner Wallets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">342</p>
              <p className="text-sm text-muted-foreground">Active Wallets</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <div className="text-center py-12 text-muted-foreground">
          <p>Wallet details and balances table will be displayed here</p>
        </div>
      </Card>
    </div>
  )
}
