'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Banner() {
  return (
    <div className="w-full mx-auto px-4 mb-8">
      <div
        className="relative w-full h-52 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden"
        style={{ borderRadius: '20px' }}
      >
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8 py-8 z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            Introducing
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 text-pretty">
            Products For Testing
          </h2>

          <p className="text-slate-300 text-sm md:text-base mb-6">
            Test and discover your next hero product
          </p>

          <div className="flex items-start">
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-2 rounded-full transition-all duration-200 flex items-center gap-2"
              onClick={() => console.log('Start testing')}
            >
              Start Product Testing Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
