'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'
import { useSuppliers } from '@/hooks/useSuppliers'
import { Skeleton } from '@/components/ui/skeleton'


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function SuppliersTable() {
  const { data: suppliers, isLoading } = useSuppliers()
  console.log(suppliers?.data)

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    )
  }

  if (!suppliers?.data || suppliers?.data.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>No suppliers found</p>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers?.data.map((supplier : any) => (
          <TableRow key={supplier.supplier_id}>
            <TableCell className="font-medium">{supplier.name}</TableCell>
            <TableCell>{supplier.email}</TableCell>
            <TableCell>{supplier.number}</TableCell>
            <TableCell>
              <Badge
                variant={supplier.account_status === 'active' ? 'default' : 'secondary'}
              >
                {supplier.account_status || 'active'}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">All Suppliers</h1>
          <p className="text-muted-foreground">Manage and monitor all supplier accounts</p>
        </div>
        <Button className="my-button hover:my-button">
          <Plus className="w-4 h-4 mr-2" />
          Add Supplier
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supplier Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1 flex items-center gap-2 bg-input px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search suppliers..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Suppliers List</CardTitle>
          <CardDescription>Showing your supplier accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading suppliers...</div>}>
            <SuppliersTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
