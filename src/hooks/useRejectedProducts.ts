'use client'

import { useState, useEffect, useCallback } from 'react'

export interface RejectedProduct {
  id: string
  product_id: string
  supplier_id: string
  supplier_name: string
  name: string
  description: string
  category: string
  brand: string
  sku: string
  price: number
  images: string[]
  rejection_reason: string
  rejection_details: string
  rejected_at: string
  resubmit_count: number
  status: 'rejected'
}

export interface RejectionStats {
  total_rejected: number
  resubmitted: number
  avg_rejection_rate: number
  rejection_reasons: {
    [key: string]: number
  }
}

const API_BASE_URL = 'http://localhost:8000'

export function useRejectedProducts(page = 1, limit = 20) {
  const [products, setProducts] = useState<RejectedProduct[]>([])
  const [stats, setStats] = useState<RejectionStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchRejectedProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch rejected products
        const productsResponse = await fetch(
          `${API_BASE_URL}/api/v1/admin/products/rejected?page=${page}&limit=${limit}`,
        )

        if (!productsResponse.ok) {
          throw new Error(`Failed to fetch rejected products: ${productsResponse.statusText}`)
        }

        const productsData = await productsResponse.json()
        setProducts(productsData.data || [])
        setTotal(productsData.total || 0)

        // Fetch stats
        const statsResponse = await fetch(`${API_BASE_URL}/api/v1/admin/products/rejected/stats`)
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData.data)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch rejected products'
        setError(errorMessage)
        console.error('[v0] Rejected products fetch error:', errorMessage)
      } finally {
        setLoading(false)
      }
    }

    fetchRejectedProducts()
  }, [page, limit])

  const deleteRejectedProduct = useCallback(async (productId: string) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/admin/products/${productId}/rejected`,
        {
          method: 'DELETE',
        },
      )

      if (!response.ok) {
        throw new Error('Failed to delete rejected product')
      }

      setProducts((prev) => prev.filter((p) => p.id !== productId))
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to delete rejected product'
      console.error('[v0] Delete rejected product error:', errorMessage)
    }
  }, [])

  return {
    products,
    stats,
    loading,
    error,
    total,
    deleteRejectedProduct,
  }
}
