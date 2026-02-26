import { Copy } from "lucide-react";
import React from "react";

interface CartDrawerProps {
  onClose: () => void;
}

const CartDrawer = ({ onClose }: CartDrawerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black/40" onClick={onClose} />

      {/* Cart Panel */}
      <div className="w-108 bg-white shadow-xl animate-slideIn flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold">Push To Shopify</h2>
          <button
            className="text-lg font-extrabold cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {/* Cart Item */}
            <div className="flex items-start gap-3 bg-gray-50 rounded-md p-3">
              {/* Image */}
              <div className="w-16 h-16 shrink-0">
                <img
                  src="/images/vita-c.webp"
                  alt="Product"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-1">
                {/* Title */}
                <p className="text-sm font-medium text-slate-900 leading-tight">
                  Tangerine Vita C Dark Spot Care Cream 100gm Each (Pack of 2)
                </p>

                {/* Code Row */}
                <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                  <span>C-Code:</span>
                  <span className="font-bold text-slate-900">C2463343</span>
                  <Copy strokeWidth={2.5} className="w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
