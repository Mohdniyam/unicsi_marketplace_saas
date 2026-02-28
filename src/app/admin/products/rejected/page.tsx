'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Search, Eye, Trash2 } from 'lucide-react'
import { useRejectedProducts } from '@/hooks/useRejectedProducts'

export default function RejectedProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const { products, stats, loading, error } = useRejectedProducts()

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.supplier_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      ? true
      : false,
  )

  const rejectionReasons = stats?.rejection_reasons || {}

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rejected Products</h1>
          <p className="text-muted-foreground">Products that have been rejected during review</p>
        </div>
        <Badge variant="destructive" className="text-lg px-4 py-2">
          {stats?.total_rejected || 0} Rejected
        </Badge>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-sm text-red-800">{error}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">{stats?.total_rejected || 0}</p>
              <p className="text-sm text-muted-foreground">Total Rejected</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{stats?.resubmitted || 0}</p>
              <p className="text-sm text-muted-foreground">Resubmitted</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {stats?.avg_rejection_rate || 0}%
              </p>
              <p className="text-sm text-muted-foreground">Avg Rejection Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rejection Reasons</CardTitle>
          <CardDescription>Common reasons for product rejections</CardDescription>
        </CardHeader>
        <CardContent>
          {Object.keys(rejectionReasons).length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No rejection data available
            </p>
          ) : (
            <div className="space-y-3">
              {Object.entries(rejectionReasons)
                .sort(([, a], [, b]) => (b as number) - (a as number))
                .map(([reason, count]) => (
                  <div
                    key={reason}
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
                  >
                    <span className="text-sm font-medium">{reason}</span>
                    <Badge variant="outline">{count}</Badge>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Search Rejected Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 bg-input px-3 py-2 rounded-lg border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by product name, supplier, or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rejected Products List</CardTitle>
          <CardDescription>
            {filteredProducts.length} products ({products.length} total)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading rejected products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {products.length === 0 ? 'No rejected products' : 'No products match your search'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Rejection Reason</TableHead>
                    <TableHead className="text-right">Resubmits</TableHead>
                    <TableHead>Rejected Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-muted-foreground">{product.brand}</div>
                      </TableCell>
                      <TableCell className="text-sm">{product.supplier_name}</TableCell>
                      <TableCell className="text-sm font-mono">{product.sku}</TableCell>
                      <TableCell className="text-sm">{product.category}</TableCell>
                      <TableCell>
                        <div
                          className="text-sm text-red-600 max-w-xs truncate"
                          title={product.rejection_reason}
                        >
                          {product.rejection_reason}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline">{product.resubmit_count}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {new Date(product.rejected_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2"
                            title="View product details"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
