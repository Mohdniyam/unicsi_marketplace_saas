<<<<<<< HEAD
import { Pencil, NibPen, Sound, Paint, HumanIcon, Diamond } from "@/../public/svg"

const services = [
    {
        id: 1,
        title: "Custom Packaging",
        description: "UNICSI help source from cooperated factories in China and assign to you for selling.",
        icon: Pencil,
        variant: "secondary",
    },
    {
        id: 2,
        title: "Custom Packaging",
        description:
            "Custom Packaging for Dropshipping is turn one-time buyers into loyal customers with packaging that speaks volumes.",
        icon: NibPen,
        variant: "secondary",
    },
    {
        id: 3,
        title: "3PL Fulfillment",
        description:
            "Enjoy hassle-free order processing and lightning-fast global shipping for your own products stocked in UNICSI's warehouse.",
        icon: Sound,
        variant: "secondary",
    },
    {
        id: 4,
        title: "ODM Power",
        description: "Collaborate with UNICSI's top manufacturers to develop your exclusive, high-quality products",
        icon: Paint,
        variant: "secondary",
    },
    {
        id: 5,
        title: "Print on Demand",
        description: "Bring your creative visions to life with custom-printed merchandise.",
        icon: HumanIcon,
        variant: "secondary",
    },
    {
        id: 6,
        title: "Bulk Purchase",
        description: "Save on bulk orders with wholesale pricing, flexible terms, and fast global delivery.",
        icon: Diamond,
        variant: "secondary",
    },
]

const Services = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header - responsive text sizes and spacing */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
                        UNICSI Supports You in Every Step
                        <br className="hidden sm:block" />
                        <span className="block sm:inline"> of Growth</span>
                    </h2>
                </div>

                {/* Services Grid - responsive grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div
                                key={service.id}
                                className={`
                  group rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 transition-all duration-300 hover:scale-105 
                  ${service.variant === "primary"
                                        ? "bg-[#0097B2] text-white"
                                        : "bg-gray-100 text-black hover:bg-[#0097B2] hover:text-white"
                                    }
                `}
                            >
                                {/* Icon - responsive icon sizing */}
                                <div className="mb-4 sm:mb-5 md:mb-6">
                                    <div
                                        className={`
                      w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-300
                      ${service.variant === "primary"
                                                ? "bg-white text-[#65A30D]"
                                                : "my-button text-black group-hover:bg-white group-hover:text-[#943A09]"
                                            }
                                            
                    `}
                                    >
                                        <IconComponent size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                    </div>
                                </div>

                                {/* Content - responsive text sizes */}
                                <div>
                                    <h3
                                        className={`
                      text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300
                      ${service.variant === "primary" ? "text-white" : "text-[#0C0C0C] group-hover:text-white"}
                    `}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`
                      text-sm sm:text-base leading-relaxed transition-colors duration-300
                      ${service.variant === "primary" ? "text-white/90" : "text-[#0C0C0CE5] group-hover:text-white"}
                    `}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
=======
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Pencil,
  NibPen,
  Sound,
  Paint,
  HumanIcon,
  Diamond,
} from "@/../public/svg";

const services = [
  {
    id: 1,
    title: "Dropshipping Solutions",
    description:
      "Launch and scale without holding inventory. Access unique, high-potential products from verified suppliers and ship directly to your customers with streamlined order coordination.",
    icon: Pencil,
  },
  {
    id: 2,
    title: "Integrated Logistics",
    description:
      "Reliable courier partnerships and optimized fulfillment workflows help reduce delays, improve delivery success rates, and lower RTO.",
    icon: NibPen,
  },
  {
    id: 3,
    title: "High-Quality Brand Packaging",
    description:
      "Build a professional brand identity with premium custom packaging solutions designed to enhance customer experience and increase repeat purchases.",
    icon: Sound,
  },
  {
    id: 4,
    title: "Bulk (B2B) Supply",
    description:
      "Scale beyond testing. Source products in bulk at competitive pricing with stable inventory support for higher margins and operational control.",
    icon: Paint,
  },
  {
    id: 5,
    title: "Print-on-Demand Dropshipping",
    description:
      "Create and sell custom-designed products without upfront inventory. From apparel to merchandise, we help turn creative ideas into scalable product lines.",
    icon: HumanIcon,
  },
  {
    id: 6,
    title: "Structured Sourcing & Supplier Network",
    description:
      "Work with verified, multi-state suppliers to ensure inventory stability, faster dispatch, and consistent product quality.",
    icon: Diamond,
  },
];

/* ─────────────────────────────────────────────
   useInView
   threshold: how much of the section must be
   visible before animations fire.
   0.4 = 40% visible → animations start.
   This prevents the "already animated" problem
   where the section is just off-screen but the
   observer fires too early.
───────────────────────────────────────────── */
function useInView(threshold = 0.4) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Use a lower threshold on mobile/tablet so animations fire
    // before the tall section fully enters the viewport
    const getThreshold = () => {
      if (typeof window === "undefined") return threshold;
      if (window.innerWidth < 640) return 0.08; // mobile
      if (window.innerWidth < 1024) return 0.15; // tablet
      return threshold; // desktop — unchanged
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: getThreshold(),
        rootMargin: "0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}

/* ─────────────────────────────────────────────
   ServiceCard
   Each card flies in from the far left and
   "stacks" into its grid position one by one.
   index * 0.15s stagger = tight sequential feel.
───────────────────────────────────────────── */
const ServiceCard = ({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[number];
  index: number;
  isInView: boolean;
}) => {
  const IconComponent = service.icon;
  const [hovered, setHovered] = useState(false);

  // Sequential one-by-one stagger — very slow, dramatic
  const STAGGER = 0.55; // seconds between each card
  const BASE_DELAY = 0.4; // wait a beat after heading finishes
  const entryDelay = BASE_DELAY + index * STAGGER;

  return (
    <motion.div
      initial={{ opacity: 0, x: "-110vw", rotate: -3 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: {
                duration: 1.4,
                delay: entryDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : {
              opacity: 0,
              x: "-110vw",
              rotate: -3,
              transition: { duration: 0.4, delay: 0 },
            }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer h-full"
      style={{ isolation: "isolate" }}
    >
      {/* Liquid fill blob */}
      <motion.div
        aria-hidden
        initial={false}
        animate={hovered ? { y: "0%", scaleX: 1.08 } : { y: "110%", scaleX: 1 }}
        transition={{
          y: {
            duration: hovered ? 1.4 : 1.2,
            ease: hovered ? [0.4, 0, 0.2, 1] : [0.6, 0, 0.4, 1],
          },
          scaleX: { duration: 1.0, ease: "easeOut" },
        }}
        className="absolute inset-0 z-0 origin-bottom"
        style={{
          background: "linear-gradient(160deg, #0097b2 0%, #7ed957 100%)",
          borderRadius: "50% 50% 0 0 / 20px 20px 0 0",
        }}
      />

      {/* Ripple ring */}
      <motion.div
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        animate={
          hovered ? { scale: 2.8, opacity: 0 } : { scale: 0, opacity: 0.35 }
        }
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-2 border-[#0097B2] z-0"
      />

      {/* Card content */}
      <div
        className="relative z-10 p-6 sm:p-7 md:p-8 h-full flex flex-col"
        style={{ background: "transparent" }}
      >
        <div
          className="absolute inset-0 -z-10 rounded-xl sm:rounded-2xl transition-colors duration-700"
          style={{ background: hovered ? "transparent" : "#F3F4F6" }}
        />

        {/* Icon */}
        <div className="mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
          <motion.div
            animate={
              hovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.9, ease: [0.34, 1.3, 0.64, 1] }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            style={{
              background: hovered ? "#7ed957/30" : "#7ed957",
              transition: "background 0.5s ease",
            }}
          >
            <IconComponent
              size={24}
              className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
            />
          </motion.div>
        </div>

        <h3
          className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-500"
          style={{ color: hovered ? "#ffffff" : "#0C0C0C" }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed transition-colors duration-500 flex-grow"
          style={{ color: hovered ? "rgba(255,255,255,0.88)" : "#0C0C0CE5" }}
        >
          {service.description}
        </p>

        {/* Water drops on hover */}
        {[0, 1, 2].map((d) => (
          <motion.div
            key={d}
            aria-hidden
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={
              hovered
                ? {
                    y: [-4, -18, -4],
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1, 0.5],
                  }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 2.4,
              delay: d * 0.3,
              repeat: hovered ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute bottom-4 rounded-full w-2 h-2 bg-white/40"
            style={{ left: `${28 + d * 20}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   WordReveal
   Words animate ONLY when isInView becomes true.
   Each word has its own transition so it's
   self-contained — no ambiguity about when it fires.
───────────────────────────────────────────── */
const WordReveal = ({ isInView }: { isInView: boolean }) => {
  const line1 = "UNICSI Supports You in Every Step".split(" ");
  const line2 = "of Growth".split(" ");

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
        {line1.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, skewY: 6 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    transition: {
                      duration: 0.65,
                      delay: 0.05 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : { opacity: 0, y: 50, skewY: 6, transition: { duration: 0.2 } }
            }
            className="inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {word}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 mt-1">
        {line2.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, skewY: 6 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    transition: {
                      duration: 0.65,
                      delay: 0.05 + (line1.length + i) * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : { opacity: 0, y: 50, skewY: 6, transition: { duration: 0.2 } }
            }
            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{
              background: "linear-gradient(90deg, #7ed957, #0097b2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const Services = () => {
  const { ref, isInView } = useInView(0.4);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <WordReveal isInView={isInView} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
>>>>>>> origin/sonali
