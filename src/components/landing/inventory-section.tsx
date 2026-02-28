"use client";

import { useState, useRef, useEffect } from "react";
import inventory1 from "../../../public/images/invt1.png";
import inventory2 from "../../../public/images/invt2.png";
import { Plus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Staggered word-by-word text reveal
───────────────────────────────────────────── */
const WordReveal = ({
  text,
  delay = 0,
  className = "",
  isInView,
}: {
  text: string;
  delay?: number;
  className?: string;
  isInView: boolean;
}) => {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.85,
                    delay: delay + i * 0.11,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : { opacity: 0, y: 22, filter: "blur(4px)" }
          }
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const InventorySection = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            // Section entered view → trigger animations
            setIsInView(true);
          } else if (!entry.isIntersecting && entry.intersectionRatio < 0.2) {
            // Section left view → reset animations for bidirectional effect
            setIsInView(false);
          }
        });
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-50px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      ref={sectionRef}
      className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* ── Left side — Images ── */}
          <div className="w-full lg:w-2/5 lg:flex-shrink-0 relative">
            <div className="relative">
              {/* ── TOP IMAGE: clip-path wipe from left → right ── */}
              <motion.div
                className="overflow-hidden mb-4 sm:mb-6 md:mb-8"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={
                  isInView
                    ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
                    : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
                }
                transition={{
                  duration: 1.3,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={inventory1 || "/placeholder.svg"}
                  alt="Warehouse workers managing inventory"
                  className="w-full sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
                />
              </motion.div>

              {/* ── DOTTED CONNECTOR LINE ── */}
              <motion.div
                className="hidden md:block absolute right-6 md:right-8 top-48 md:top-56 "
                initial={{ height: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { height: "3rem", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              />

              {/* ── BOTTOM IMAGE: card "dealt" from top image position ── */}
              <motion.div
                className="bg-white rounded-lg shadow-sm overflow-hidden relative w-full sm:w-4/5 md:w-5/6 lg:w-4/5 ml-auto "
                initial={{
                  opacity: 0,
                  x: -60,
                  y: -120,
                  scale: 0.82,
                  rotate: -4,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                    : { opacity: 0, x: -60, y: -120, scale: 0.82, rotate: -4 }
                }
                transition={{
                  duration: 1.4,
                  delay: 1.05,
                  ease: [0.34, 1.1, 0.64, 1],
                }}
              >
                <Image
                  src={inventory2 || "/placeholder.svg"}
                  alt="Order fulfillment process"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-auto object-cover"
                />
                {/* Dimensions label */}
                {/* <motion.div
                  className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4"
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.7, y: 8 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: 2.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                    463.65 × 290.46
                  </div>
                </motion.div> */}
              </motion.div>
            </div>
          </div>

          {/* ── Right side — Content ── */}
          <motion.div
            className="w-full lg:w-3/5 space-y-6 sm:space-y-7 md:space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <WordReveal
                  text="India-Based Inventory."
                  delay={0.25}
                  isInView={isInView}
                />
                <br />
                <WordReveal
                  text="Faster Fulfillment."
                  delay={0.52}
                  isInView={isInView}
                />
              </h1>
            </div>

            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 24 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1.1,
                        delay: 0.78,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
                  : { opacity: 0, y: 24 }
              }
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                At Unicsi, the majority of our products are stocked across
                verified warehouses in India. We work with multiple trusted
                suppliers located in different states, allowing us to optimize
                shipping routes and reduce delivery timelines. By distributing
                inventory across regions, we ensure faster dispatch, lower
                logistical friction, and improved fulfillment reliability for
                sellers nationwide. Instead of depending on a single supply
                source, our multi-state supplier network enables better
                availability, quicker processing, and smoother scaling — so you
                can focus on selling while we handle sourcing efficiency.
              </p>
            </motion.div>

            {/* Accordion items */}
            <div className="space-y-3 sm:space-y-4">
              {/* Item 1 */}
              <motion.div
                className="border-b border-gray-200 pb-3 sm:pb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1.0,
                          delay: 1.05,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                    : { opacity: 0, x: -30 }
                }
              >
                <button
                  onClick={() => toggleSection("selection")}
                  className="flex items-center justify-between w-full text-left group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">
                    Expert Product Selection
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSections.selection ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedSections.selection && (
                    <motion.div
                      key="selection-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                        Our sourcing team evaluates supplier credibility,
                        regional demand patterns, and product performance before
                        onboarding any item to the platform. We prioritize
                        products that offer differentiation, scalability, and
                        operational stability.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                className="border-b border-gray-200 pb-3 sm:pb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1.0,
                          delay: 1.22,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                    : { opacity: 0, x: -30 }
                }
              >
                <button
                  onClick={() => toggleSection("automation")}
                  className="flex items-center justify-between w-full text-left group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">
                    Smart Automation
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSections.automation ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedSections.automation && (
                    <motion.div
                      key="automation-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                        Unicsi integrates structured sourcing workflows with
                        simplified order coordination systems, helping sellers
                        reduce manual work and maintain consistent operational
                        control.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-2 sm:pt-3 md:pt-4"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.9,
                        delay: 1.42,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
                  : { opacity: 0, y: 20, scale: 0.95 }
              }
            >
              {/* <button className="my-button hover:bg-[#0097B2] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InventorySection;
