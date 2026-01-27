'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import type { KYCDocument } from '@/hooks/useKYCVerifications'

interface KYCDocumentModalProps {
  document: KYCDocument | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onVerify: (documentId: string) => Promise<void>
  onReject: (documentId: string, reason: string) => Promise<void>
  loading: boolean
}

export function KYCDocumentModal({
  document,
  open,
  onOpenChange,
  onVerify,
  onReject,
  loading,
}: KYCDocumentModalProps) {
  const [rejectionReason, setRejectionReason] = useState('')
  const [showRejectForm, setShowRejectForm] = useState(false)

  if (!document) return null

  const handleVerify = async () => {
    await onVerify(document.id)
    onOpenChange(false)
  }

  const handleRejectSubmit = async () => {
    if (rejectionReason.trim()) {
      await onReject(document.id, rejectionReason)
      setRejectionReason('')
      setShowRejectForm(false)
      onOpenChange(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getStatusIcon(document.status)}
            {document.supplierName}
          </DialogTitle>
          <DialogDescription>
            {document.documentType.replace(/_/g, ' ').toUpperCase()} - Submitted on {formatDate(document.submittedAt)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Supplier Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{document.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{document.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-muted-foreground">Account Status</p>
              <Badge variant="outline" className="mt-1">
                {document.accountStatus.charAt(0).toUpperCase() + document.accountStatus.slice(1)}
              </Badge>
            </div>
          </div>

          {/* GST Details */}
          {document.gstDetails ? (
            <div className="space-y-4">
              <h3 className="font-semibold">KYC Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* GST Document */}
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">GST Document</p>
                  <div className="bg-gray-100 rounded h-32 flex items-center justify-center mb-3 overflow-hidden">
                    {document.gstDetails.gst_image ? (
                      <img
                        src={document.gstDetails.gst_image || "/placeholder.svg"}
                        alt="GST"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground">No image</p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">GST Number</p>
                  <p className="text-sm font-medium">{document.gstDetails.gst_number}</p>
                </div>

                {/* PAN Document */}
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">PAN Document</p>
                  <div className="bg-gray-100 rounded h-32 flex items-center justify-center mb-3 overflow-hidden">
                    {document.gstDetails.pan_image ? (
                      <img
                        src={document.gstDetails.pan_image || "/placeholder.svg"}
                        alt="PAN"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground">No image</p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">PAN Number</p>
                  <p className="text-sm font-medium">{document.gstDetails.pan_number}</p>
                </div>

                {/* Aadhar Document */}
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Aadhar Document</p>
                  <div className="bg-gray-100 rounded h-32 flex items-center justify-center mb-3 overflow-hidden">
                    {document.gstDetails.andhar_image ? (
                      <img
                        src={document.gstDetails.andhar_image || "/placeholder.svg"}
                        alt="Aadhar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground">No image</p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Aadhar Number</p>
                  <p className="text-sm font-medium">{document.gstDetails.andhar_number}</p>
                </div>
              </div>

              {/* Document Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">GST Status</p>
                  <Badge variant={document.gstDetails.gst_status ? 'default' : 'destructive'} className="mt-1">
                    {document.gstDetails.gst_status ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GST Validity</p>
                  <p className="font-medium">{formatDate(document.gstDetails.gst_validity)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Submitted Date</p>
                  <p className="font-medium">{formatDate(document.gstDetails.created_at)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">No KYC documents submitted yet</p>
            </div>
          )}

          {/* Current Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Verification Status</p>
              <Badge
                className="mt-1"
                variant={
                  document.status === 'verified'
                    ? 'default'
                    : document.status === 'rejected'
                      ? 'destructive'
                      : 'secondary'
                }
              >
                {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
              </Badge>
            </div>
            {document.verifiedAt && (
              <div>
                <p className="text-sm text-muted-foreground">Verified On</p>
                <p className="font-medium">{formatDate(document.verifiedAt)}</p>
              </div>
            )}
            {document.rejectionReason && (
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Rejection Reason</p>
                <p className="font-medium text-red-600">{document.rejectionReason}</p>
              </div>
            )}
          </div>

          {/* Rejection Form */}
          {showRejectForm && document.status === 'pending' && (
            <div className="space-y-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm font-medium">Rejection Reason</p>
              <Textarea
                placeholder="Explain why you're rejecting this document..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="min-h-24"
              />
            </div>
          )}

          {/* Actions */}
          {document.status === 'pending' && (
            <div className="flex gap-3 justify-end">
              {!showRejectForm ? (
                <>
                  <Button variant="outline" onClick={() => setShowRejectForm(true)} disabled={loading}>
                    Reject
                  </Button>
                  <Button onClick={handleVerify} disabled={loading} className="bg-green-600 hover:bg-green-700">
                    Verify & Approve
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setShowRejectForm(false)} disabled={loading}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleRejectSubmit}
                    disabled={!rejectionReason.trim() || loading}
                    variant="destructive"
                  >
                    Confirm Rejection
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
