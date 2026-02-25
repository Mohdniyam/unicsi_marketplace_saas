'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CATEGORIES = [
  { id: 1, name: 'Beauty & Personal Care' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Fashion & Apparel' },
  { id: 4, name: 'Home & Garden' },
  { id: 5, name: 'Sports & Outdoors' },
  { id: 6, name: 'Books & Media' },
]

export default function TopCategories() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll')
    if (container) {
      const scrollAmount = 300
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Top Categories</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Categories Scroll Container */}
      <div
        id="category-scroll"
        className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar"
      >
        {CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-48 group cursor-pointer"
          >
            <div className="relative h-32 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-400 opacity-30" />

              {/* Content */}
              <div className="relative h-full flex items-end p-4">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-colors duration-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
