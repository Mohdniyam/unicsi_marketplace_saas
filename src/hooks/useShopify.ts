import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { apiClient } from "@/lib/api-client"

export const useShopify = (shopName: string) => {
   return useQuery({
      queryKey: ["shopify"],
      queryFn: () => apiClient.get(`/dropshipper/shopify/connect?shop=${shopName}`),
   })
}