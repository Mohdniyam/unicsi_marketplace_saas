"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  {
    id: 1,
    name: "Querky Home Essentials",
    image: "/images/home-essentials.avif",
    slug: "home-essentials",
  },
  {
    id: 2,
    name: "Beauti & Personal Care",
    image: "/images/beauty-personal.jpg",
    slug: "beauti",
  },
  {
    id: 3,
    name: "Car & Bike Accessories",
    image: "/images/car-bikes.jpg",
    slug: "car-bikes-accessories",
  },
  {
    id: 4,
    name: "Gym & Wellness",
    image: "/images/gym.jpg",
    slug: "gym",
  },
  {
    id: 5,
    name: "Footwear",
    image: "/images/footwear.jpeg",
    slug: "footwear",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/images/accessories.jpg",
    slug: "accessories",
  },
  {
    id: 7,
    name: "Jewellery",
    image: "/images/jewellery.jpeg",
    slug: "jewellery",
  },
  {
    id: 8,
    name: "kids",
    image: "/images/kids.jpg",
    slug: "kids",
  },
  {
    id: 9,
    name: "Electronics",
    image: "/images/electronics.jpeg",
    slug: "electronics",
  },
  {
    id: 10,
    name: "Men's Fashion",
    image: "/images/men-fashion.jpg",
    slug: "mens-fashion",
  },
  {
    id: 11,
    name: "Women Ethnic",
    image: "/images/women-ethnic.jpeg",
    slug: "women-ethnic",
  },
  {
    id: 12,
    name: "Women Western",
    image: "/images/women-western.jpeg",
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

        <div className="flex gap-2">
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
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        {/* <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6 text-slate-600 font-semibold" />
        </button> */}

        {/* Scroll Container */}
        <div
          id="category-scroll"
          className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar"
        >
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="shrink-0 w-36 text-center cursor-pointer group"
            >
              <div className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-28 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 text-slate-600 font-semibold" />
        </button> */}
      </div>
    </div>
  );
}
