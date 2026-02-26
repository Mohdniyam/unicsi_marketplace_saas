"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  {
    id: 1,
    name: "Querky Home Essentials",
    image: "/images/home-essentials.webp",
    slug: "home-essentials",
  },
  {
    id: 2,
    name: "Beauti & Personal Care",
    image: "/images/beauty.webp",
    slug: "beauti-personal-care",
  },
  {
    id: 3,
    name: "Car & Bike Accessories",
    image: "/images/car-bikes.webp",
    slug: "car-bikes-accessories",
  },
  {
    id: 4,
    name: "Gym & Wellness",
    image: "/images/gym.webp",
    slug: "gym",
  },
  {
    id: 5,
    name: "Footwear",
    image: "/images/footwear.webp",
    slug: "footwear",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/images/accessories.webp",
    slug: "accessories",
  },
  {
    id: 7,
    name: "Jewellery",
    image: "/images/jewellery.webp",
    slug: "jewellery",
  },
  {
    id: 8,
    name: "kids",
    image: "/images/kids.webp",
    slug: "kids",
  },
  {
    id: 9,
    name: "Electronics",
    image: "/images/electronics.webp",
    slug: "electronics",
  },
  {
    id: 10,
    name: "Men's Fashion",
    image: "/images/men-fashion.webp",
    slug: "mens-fashion",
  },
  {
    id: 11,
    name: "Women Ethnic",
    image: "/images/women-ethnic.webp",
    slug: "women-ethnic",
  },
  {
    id: 12,
    name: "Women Western",
    image: "/images/women-western.webp",
    slug: "women-western",
  },
];

export default function TopCategories() {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("category-scroll");
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const router = useRouter();
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Top Categories</h2>

        {/* <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 hover:bg-slate-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 hover:bg-slate-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div> */}
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6 text-slate-600 font-semibold" />
        </button>

        {/* Scroll Container */}
        <div
          id="category-scroll"
          className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar"
        >
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="shrink-0 w-28 text-center cursor-pointer group"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  onClick={() => router.push(`/categories/${category.slug}`)}
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-800/80 group-hover:text-teal-600 transition-colors">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 text-slate-600 font-semibold" />
        </button>
      </div>
    </div>
  );
}
