"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import CartDrawer from "./cart-drawer";

const PRODUCT_TABS = [
  "Push to Shopify",
  "Inventory Request",
  "Potential Heroes",
  "Hot Selling Products",
  "Popular Demand",
];

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Nike Shoes - Men",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Running Sneakers Pro",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Casual Canvas Shoes",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Premium Leather Boots",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1543163521-9733539c2d7f?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Sport Performance Shoes",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1538619666990-a4c074d65e1b?w=400&h=400&fit=crop",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">All Products</h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {PRODUCT_TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap text-sm transition-colors duration-200 ${
                activeTab === index
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onPushToShopify={() => {
                console.log("Clicked PushToShopify");
                setIsCartOpen(true);
              }}
            />
          ))}
        </div>
        {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
      </div>
    </div>
  );
}
