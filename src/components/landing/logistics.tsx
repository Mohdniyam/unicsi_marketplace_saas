<<<<<<< HEAD
"use client"

import { useState } from "react"
import logistic from "../../../public/images/logistic.jpg"
import logistic2 from "../../../public/images/logistic2.jpg"
import logistic3 from "../../../public/images/logistic3.jpg"
import logistic4 from "../../../public/images/logistic4.jpg"
import logistic5 from "../../../public/images/logistic5.jpg"
import Image from "next/image"

const Logistics = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleCardClick = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }
=======
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logistic from "../../../public/images/logistic.jpg";
import logistic2 from "../../../public/images/logistic2.jpg";
import logistic3 from "../../../public/images/logistic3.jpg";
import logistic4 from "../../../public/images/logistic4.jpg";
import logistic5 from "../../../public/images/logistic5.jpg";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Bidirectional InView hook — responsive threshold
───────────────────────────────────────────── */
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const getThreshold = () => {
      if (typeof window === "undefined") return threshold;
      if (window.innerWidth < 640) return 0.08; // mobile
      if (window.innerWidth < 1024) return 0.15; // tablet
      return threshold; // desktop — unchanged
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { threshold: getThreshold(), rootMargin: "0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}

const Logistics = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.25);

  const headingWords =
    "Engineered for Reliable Delivery and to Reduce RTO.".split(" ");
>>>>>>> origin/sonali

  const cards = [
    {
      image: logistic,
      title: (
        <>
<<<<<<< HEAD
          Global <br /> Fulfillment <br /> Network
        </>
      ),
=======
          Smart <br /> Supplier <br /> Distribution
        </>
      ),
      paragraph:
        "Our multi-state supplier network enables faster regional dispatch, reducing long transit times that often lead to delivery failures and RTO.",
>>>>>>> origin/sonali
    },
    {
      image: logistic2,
      title: (
        <>
<<<<<<< HEAD
          Exclusive <br /> CJPacket <br /> Shipping Lines
        </>
      ),
=======
          Address & <br /> Order <br />
          Validation System
        </>
      ),
      paragraph:
        "Structured order coordination helps minimize incorrect details, failed deliveries, and unnecessary return-to-origin cases.",
>>>>>>> origin/sonali
    },
    {
      image: logistic3,
      title: (
        <>
<<<<<<< HEAD
          Customizable <br /> Brand <br /> Packaging
        </>
      ),
=======
          Optimized <br /> Courier <br /> Partnerships
        </>
      ),
      paragraph:
        "We integrate with reliable courier partners and route optimization systems to improve delivery success rates and reduce shipment delays.",
>>>>>>> origin/sonali
    },
    {
      image: logistic4,
      title: (
        <>
<<<<<<< HEAD
          Seamless <br /> E-commerce <br /> Platform <br /> Integration
        </>
      ),
=======
          Proactive <br /> Shipment <br /> Tracking
        </>
      ),
      paragraph:
        "Real-time tracking visibility allows sellers to monitor orders closely and take action before delivery issues turn into RTO.",
>>>>>>> origin/sonali
    },
    {
      image: logistic5,
      title: (
        <>
<<<<<<< HEAD
          Inventory <br /> Support and <br />
          Quality <br /> Control
        </>
      ),
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-12">
      <h4 className="text-center px-4 md:px-6 py-4 md:py-5 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Logistics Solutions to Help Businesses
      </h4>

      <div className="w-full px-4 md:px-6 lg:hidden">
        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full rounded-lg overflow-hidden">
=======
          Inventory <br /> Stability & <br />
          Dispatch <br /> Efficiency
        </>
      ),
      paragraph:
        "By maintaining consistent stock availability and faster processing workflows, we reduce order cancellations and dispatch delays — two major causes of RTO.",
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center py-8 md:py-12"
    >
      {/* Animated heading */}
      <h4 className="text-center px-4 md:px-6 py-4 md:py-5 text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-wrap justify-center gap-x-2">
        {headingWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 40, filter: "blur(6px)" }
            }
            transition={{
              duration: 0.7,
              delay: isInView ? i * 0.1 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h4>

      {/* ── Mobile / Tablet (hidden on lg+) ── */}
      <div className="w-full px-4 md:px-6 lg:hidden">
        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="relative w-full rounded-lg overflow-hidden cursor-pointer"
            >
>>>>>>> origin/sonali
              <Image
                src={card.image || "/placeholder.svg"}
                alt="Logistics"
                className="h-64 sm:h-80 w-full object-cover"
              />
<<<<<<< HEAD
              <h2 className="absolute text-white top-4 left-4 z-30 text-xl sm:text-2xl leading-tight font-medium">
                {card.title}
              </h2>
=======

              {/* Overlay — darker when expanded */}
              <div
                className={`absolute inset-0 z-20 transition-all duration-500 ${
                  expandedIndex === index ? "bg-black/60" : "bg-black/40"
                }`}
              />

              {/* Title */}
              <h2 className="absolute text-white top-4 left-4 z-30 text-xl sm:text-2xl leading-tight font-medium">
                {card.title}
              </h2>

              {/* Tap-to-reveal paragraph */}
              <div
                className={`absolute left-4 right-4 bottom-5 z-30 overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-white/90 text-sm leading-relaxed transition-all duration-500 delay-100 ${
                    expandedIndex === index
                      ? "opacity-100 translate-y-0 blur-none"
                      : "opacity-0 translate-y-4 blur-sm"
                  }`}
                >
                  {card.paragraph}
                </p>
              </div>

              {/* Tap hint — disappears once a card is opened */}
              {expandedIndex === null && index === 0 && (
                <span className="absolute bottom-4 right-4 z-30 text-white/60 text-xs">
                  Tap to read more
                </span>
              )}
>>>>>>> origin/sonali
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
=======
      {/* ── Desktop (lg+) — original, untouched ── */}
>>>>>>> origin/sonali
      <div className="hidden lg:block w-full overflow-hidden px-4 md:px-0">
        <div className="flex justify-center items-center gap-0 rounded-lg">
          {cards.map((card, index) => (
            <div
              key={index}
<<<<<<< HEAD
              onMouseEnter={() => setExpandedIndex(index as any)}
              onMouseLeave={() => setExpandedIndex(null)}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${expandedIndex === index ? "w-[492px]" : expandedIndex !== null ? "w-[123px]" : "w-[246px]"
                }`}
            >
              <Image src={card.image || "/placeholder.svg"} alt="Logistics" className="h-[623px] w-full object-cover" />

              <h2
                className={`absolute text-white top-9 left-6 z-30 leading-tight transition-all duration-500 ${expandedIndex === index
=======
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${
                expandedIndex === index
                  ? "w-[492px]"
                  : expandedIndex !== null
                    ? "w-[123px]"
                    : "w-[246px]"
              }`}
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt="Logistics"
                className="h-[623px] w-full object-cover"
              />

              <div
                className={`absolute inset-0 z-20 transition-all duration-500 ${
                  expandedIndex === index ? "bg-black/55" : "bg-black/40"
                }`}
              />

              <h2
                className={`absolute text-white top-9 left-6 z-30 leading-tight transition-all duration-500 ${
                  expandedIndex === index
>>>>>>> origin/sonali
                    ? "text-3xl opacity-100"
                    : expandedIndex !== null
                      ? "text-sm opacity-0"
                      : "text-2xl opacity-100"
<<<<<<< HEAD
                  }`}
              >
                {card.title}
              </h2>
=======
                }`}
              >
                {card.title}
              </h2>

              <div
                className={`absolute left-6 right-6 bottom-10 z-30 overflow-hidden transition-all duration-700 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-white/90 text-sm leading-relaxed transition-all duration-500 delay-150 ${
                    expandedIndex === index
                      ? "opacity-100 translate-y-0 blur-none"
                      : "opacity-0 translate-y-4 blur-sm"
                  }`}
                >
                  {card.paragraph}
                </p>
              </div>
>>>>>>> origin/sonali
            </div>
          ))}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default Logistics
=======
  );
};

export default Logistics;
>>>>>>> origin/sonali
