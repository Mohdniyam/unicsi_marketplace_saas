"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { apiClient } from "@/lib/api-client"

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResponse {
  success: boolean
  message: string
  data: {
    id: string
    name: string
    email: string
    role: string
  }
}

// Login mutation
export const useLogin = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      apiClient.post("/auth/login", credentials),
    onSuccess: (data: LoginResponse) => {
      // Redirect based on role
      const roleRoutes: Record<string, string> = {
        ADMIN: "/admin/dashboard",
        PARTNER: "/partner/dashboard",
        SUPPLIER: "/supplier/dashboard",
        KEY_ACCOUNT_MANAGER: "/kam/dashboard",
      }

      const redirectPath = roleRoutes[data.data.role] || "/dashboard"
      
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ["user"] })
      
      router.push(redirectPath)
    },
    onError: (error: Error) => {
      console.error("Login failed:", error.message)
    },
  })
}

// Logout mutation
export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => apiClient.post("/auth/logout", {}),
    onSuccess: () => {
      queryClient.clear() // Clear all cached data
      router.push("/auth/login")
    },
  })
}

// Get current user
export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => apiClient.get("/auth/me"),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}