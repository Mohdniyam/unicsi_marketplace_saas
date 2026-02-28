"use client";
import { Button } from "@/components/ui/button";
import { Arrow, Cart } from "../../../public/svg";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Cart icon positions config
───────────────────────────────────────────── */
const cartPositions = [
  { top: "34%", left: "20%", delay: 0.5 },
  { top: "3%", left: "45.5%", delay: 0.8 },
  { top: "34%", left: "70%", delay: 1.1 },
  { top: "85%", left: "46%", delay: 1.4 },
  { top: "62%", left: "90%", delay: 1.7 },
  { top: "62%", left: "2.5%", delay: 2.0 },
];

/* ─────────────────────────────────────────────
   Text reveal: characters flip up one by one
───────────────────────────────────────────── */
const CharReveal = ({
  text,
  delay = 0,
  isInView,
  className = "",
}: {
  text: string;
  delay?: number;
  isInView: boolean;
  className?: string;
}) => {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: 90 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 40, rotateX: 90 }
          }
          transition={{
            duration: 1.0,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            transformOrigin: "bottom center",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const FeaturesSection = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Responsive threshold — lower on mobile/tablet so animations
    // fire before the tall section fully enters the viewport
    const getThresholds = (): number[] => {
      if (typeof window === "undefined") return [0.15, 0.35, 0.6];
      if (window.innerWidth < 640) return [0.05, 0.1]; // mobile
      if (window.innerWidth < 1024) return [0.08, 0.15]; // tablet
      return [0.15, 0.35, 0.6]; // desktop — unchanged
    };

    const getTriggerRatio = (): number => {
      if (typeof window === "undefined") return 0.4;
      if (window.innerWidth < 640) return 0.05; // mobile
      if (window.innerWidth < 1024) return 0.08; // tablet
      return 0.4; // desktop — unchanged
    };

    const getRootMargin = (): string => {
      if (typeof window === "undefined") return "-50px";
      if (window.innerWidth < 1024) return "0px"; // no negative margin on mobile/tablet
      return "-50px"; // desktop — unchanged
    };

    const triggerRatio = getTriggerRatio();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= triggerRatio) {
            setIsInView(true);
          } else if (!entry.isIntersecting && entry.intersectionRatio < 0.02) {
            setIsInView(false);
          }
        });
      },
      { threshold: getThresholds(), rootMargin: getRootMargin() },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ minHeight: "auto", width: "100%", backgroundColor: "#000000" }}
      className="px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-0 min-h-[auto] lg:min-h-[500px]">
        {/* ── Left — Video with cart icons ── */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <motion.video
            src="/video/shopify.mp4"
            autoPlay
            loop
            muted
            playsInline
            // On mobile/tablet: constrain width so it doesn't stretch full-bleed
            // On desktop: original full-width behaviour
            className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-full rounded-xl object-cover"
            initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.88, filter: "blur(12px)" }
            }
            transition={{ duration: 2.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Cart icons — each pops in with spring scale bounce */}
          {/* {cartPositions.map((pos, idx) => (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                zIndex: 10,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: -30 }
              }
              transition={{
                duration: 1.2,
                delay: pos.delay,
                ease: [0.34, 1.3, 0.64, 1],
              }}
            >
              <Cart className="w-[26px] h-[26px] md:w-[46px] md:h-[46px]" />
            </motion.div>
          ))} */}
        </div>

        {/* ── Right — Text content ── */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div>
            {/* Heading — character-by-character flip reveal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-snug sm:leading-tight">
              <CharReveal
                text="Best Ecommerce"
                delay={0.5}
                isInView={isInView}
              />
              <br />
              <CharReveal
                text="Integrations for"
                delay={1.0}
                isInView={isInView}
              />
              <br />
              <CharReveal text="Dropshipping" delay={1.5} isInView={isInView} />
            </h1>

            {/* Paragraphs — staggered slide in from right */}
            <div className="mt-6 sm:mt-10 flex flex-col gap-4">
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed"
                initial={{ opacity: 0, x: 60 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
                }
                transition={{
                  duration: 1.6,
                  delay: 2.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Seamlessly connect your store with Unicsi and automate your
                sourcing workflow. Add products in minutes, sync orders
                instantly, and manage fulfillment without manual coordination.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed"
                initial={{ opacity: 0, x: 60 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
                }
                transition={{
                  duration: 1.6,
                  delay: 2.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Unicsi integrates smoothly with leading e-commerce platforms
                like Shopify, Amazon, WooCommerce, Wix, and more — helping
                sellers save time, reduce errors, and scale efficiently.
              </motion.p>
            </div>
          </div>

          {/* CTA — rises up with a glow pulse */}
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.4, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block"
              animate={
                isInView
                  ? {
                      boxShadow: [
                        "0 0 0px rgba(0,151,178,0)",
                        "0 0 32px rgba(0,151,178,0.55)",
                        "0 0 0px rgba(0,151,178,0)",
                      ],
                    }
                  : { boxShadow: "0 0 0px rgba(0,151,178,0)" }
              }
              transition={{ duration: 2.0, delay: 3.2, ease: "easeInOut" }}
              style={{ borderRadius: "50px" }}
            >
              <Button
                className="my-button text-base sm:text-lg md:text-xl py-3 sm:py-4 md:py-6 w-full sm:w-auto"
                style={{
                  borderRadius: "50px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                }}
                onClick={() => router.push("/signup")}
              >
                <span>Connect my store</span>
                <Arrow className="inline-block ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
