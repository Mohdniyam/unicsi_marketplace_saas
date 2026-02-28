'use client'

import { useState, useEffect, useCallback } from 'react'

export interface LiveProduct {
  id: string
  product_id: string
  supplier_id: string
  supplier: {
    name: string
  }
  title: string
  description: string
  category: string
  brand: string
  sku: string
  price: number
  stock: number
  rating: number
  reviews_count: number
  images: string[]
  status: 'live' | 'out_of_stock'
  created_at: string
  updated_at: string
  gmv?: number
  variants: {
    id: string
    product_id: string
    sku: string
    category: string
    variant_price: number
    variant_stock: number
    variant_images: string[]
  }[]
  approval_status: string
}

export interface LiveProductsStats {
  total_active: number
  total_gmv: number
  conversion_rate: number
  new_this_week: number
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export function useLiveProducts(page = 1, limit = 20) {
  const [products, setProducts] = useState<LiveProduct[]>([])
  const [stats, setStats] = useState<LiveProductsStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchLiveProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch live products
        const productsResponse = await fetch(
          `${API_BASE_URL}admin/products/get-live-products`,
        )

        if (!productsResponse.ok) {
          throw new Error(`Failed to fetch live products: ${productsResponse.statusText}`)
        }

        const productsData = await productsResponse.json()
        console.log(productsData?.data)
        setProducts(productsData?.data || [])
        setTotal(productsData?.data?.length || 0)

        // Fetch stats
        const statsResponse = await fetch(`${API_BASE_URL}admin/products/live/stats`)
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData.data)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch live products'
        setError(errorMessage)
        console.error('[v0] Live products fetch error:', errorMessage)
      } finally {
        setLoading(false)
      }
    }

    fetchLiveProducts()
  }, [page, limit])

  const deleteProduct = useCallback(async (productId: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}admin/products/${productId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete product')
      }

      setProducts((prev) => prev.filter((p) => p.id !== productId))
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete product'
      console.error('[v0] Delete product error:', errorMessage)
    }
  }, [])

  const updateProductStatus = useCallback(
    async (productId: string, status: 'live' | 'out_of_stock') => {
      try {
        const response = await fetch(`${API_BASE_URL}admin/products/${productId}/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        })

        if (!response.ok) {
          throw new Error('Failed to update product status')
        }

        setProducts((prev) =>
          prev.map((p) => (p.id === productId ? { ...p, status } : p)),
        )
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to update product status'
        console.error('[v0] Update product status error:', errorMessage)
      }
    },
    [],
  )

  return {
    products,
    stats,
    loading,
    error,
    total,
    deleteProduct,
    updateProductStatus,
  }
}
