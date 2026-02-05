'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { PendingProduct } from '@/hooks/usePendingProducts'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'

interface ProductReviewModalProps {
  product: PendingProduct | null
  isOpen: boolean
  onClose: () => void
  onApprove: (productId: string) => void
  onReject: (productId: string, reason: string) => void
  onUpdate: (productId: string, updates: Partial<PendingProduct>) => void
  loading?: boolean
}

export function ProductReviewModal({
  product,
  isOpen,
  onClose,
  onApprove,
  onReject,
  onUpdate,
  loading,
}: ProductReviewModalProps) {
  const [editMode, setEditMode] = useState(false)
  const [rejectionDialogOpen, setRejectionDialogOpen] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')
  const [editedProduct, setEditedProduct] = useState<Partial<PendingProduct>>({})
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) return null

  const currentImage = product.images?.[currentImageIndex]

  const handleSaveChanges = async () => {
    try {
      await onUpdate(product.product_id, editedProduct)
      setEditMode(false)
      setEditedProduct({})
    } catch (error) {
      console.error('[v0] Error saving changes:', error)
    }
  }

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason')
      return
    }
    try {
      await onReject(product.product_id, rejectionReason)
      setRejectionDialogOpen(false)
      setRejectionReason('')
      onClose()
    } catch (error) {
      console.error('[v0] Error rejecting product:', error)
    }
  }

  const handleApprove = async () => {
    try {
      await onApprove(product.product_id)
      onClose()
    } catch (error) {
      console.error('[v0] Error approving product:', error)
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Review Product: {product.title}</DialogTitle>
            <DialogDescription>Supplier: {product.supplierName || 'Unknown'}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="space-y-2">
              <h3 className="font-semibold">Product Images</h3>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                {currentImage?.image_url ? (
                  <img
                    src={currentImage.image_url || "/placeholder.svg"}
                    alt={`Product view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-muted-foreground">No image available</p>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : product.images!.length - 1))
                    }
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} of {product.images.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev < product.images!.length - 1 ? prev + 1 : 0))
                    }
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Product Details */}
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">Title</Label>
                    {editMode ? (
                      <Input
                        value={editedProduct.title || product.title}
                        onChange={(e) => setEditedProduct({ ...editedProduct, title: e.target.value })}
                        className="mt-1"
                      />
                    ) : (
                      <p className="font-medium mt-1">{product.title}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Brand</Label>
                    {editMode ? (
                      <Input
                        value={editedProduct.brand || product.brand}
                        onChange={(e) => setEditedProduct({ ...editedProduct, brand: e.target.value })}
                        className="mt-1"
                      />
                    ) : (
                      <p className="font-medium mt-1">{product.brand}</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <Label className="text-xs text-muted-foreground">Description</Label>
                    {editMode ? (
                      <Textarea
                        value={editedProduct.description || product.description}
                        onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                        className="mt-1"
                        rows={3}
                      />
                    ) : (
                      <p className="mt-1 text-sm">{product.description || 'No description'}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Status</Label>
                    <Badge variant="outline" className="mt-1">
                      {product.approval_status.charAt(0).toUpperCase() + product.approval_status.slice(1)}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Lifecycle</Label>
                    <Badge
                      variant={product.lifecycle_status === 'active' ? 'default' : 'secondary'}
                      className="mt-1"
                    >
                      {product.lifecycle_status.charAt(0).toUpperCase() + product.lifecycle_status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                  <CardDescription>{product.variants.length} variant(s)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {product.variants.map((variant) => (
                    <div key={variant.variant_id} className="border rounded-lg p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">SKU</p>
                          <p className="font-medium text-sm">{variant.sku}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Variant Name</p>
                          <p className="font-medium text-sm">{variant.variant_name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-medium text-sm">₹{variant.variant_price}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Stock</p>
                          <p className="font-medium text-sm">{variant.variant_stock} units</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Weight</p>
                          <p className="font-medium text-sm">{variant.weight_grams}g</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">HSN Code</p>
                          <p className="font-medium text-sm">{variant.hsn_code}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Dimensions (cm)</p>
                          <p className="font-medium text-sm">
                            {variant.dimensions_cm.h} × {variant.dimensions_cm.l} × {variant.dimensions_cm.w}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <Badge variant={variant.is_active ? 'default' : 'secondary'} className="text-xs">
                            {variant.is_active ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Attributes */}
            {product.variants?.[0]?.attributes && (
              <Card>
                <CardHeader>
                  <CardTitle>Attributes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(product.variants[0].attributes).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                        <p className="font-medium text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Meta Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Meta Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Product ID</p>
                  <p className="font-mono text-xs">{product.product_id}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Supplier ID</p>
                  <p className="font-mono text-xs">{product.supplier_id}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Created</p>
                  <p className="text-xs">{new Date(product.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Updated</p>
                  <p className="text-xs">{new Date(product.updatedAt).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-4 border-t">
              {!editMode ? (
                <>
                  <Button variant="outline" onClick={() => setEditMode(true)}>
                    Edit Product
                  </Button>
                  <Button variant="destructive" onClick={() => setRejectionDialogOpen(true)} disabled={loading}>
                    Reject
                  </Button>
                  <Button onClick={handleApprove} disabled={loading}>
                    Approve & Publish
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setEditMode(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveChanges} disabled={loading}>
                    Save Changes
                  </Button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rejection Dialog */}
      <AlertDialog open={rejectionDialogOpen} onOpenChange={setRejectionDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Reject Product
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject this product? Please provide a reason.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="my-4">
            <Label htmlFor="rejection-reason">Rejection Reason</Label>
            <Textarea
              id="rejection-reason"
              placeholder="Enter the reason for rejection..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="mt-2"
              rows={4}
            />
          </div>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReject} className="bg-red-600 hover:bg-red-700">
              Reject Product
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
