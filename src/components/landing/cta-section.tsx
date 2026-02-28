<<<<<<< HEAD
import Image from "next/image"
import inventory from "../../../public/images/InvtMang.png"
import inventory2 from "../../../public/images/inventory2.png"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"



const CTASection = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
            }}
            className="min-h-screen md:min-h-[547px] py-8 md:py-4"
        >
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 px-4 sm:px-6 md:px-12 lg:mx-0 my-4">
                {/* Left Section - Stats */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                    className="w-full md:w-1/2"
                >
                    <div
                        style={{
                            display: "grid",
                            // gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        }}
                        className="md:grid-cols-2 lg:grid-cols-2"
                    >
                        <div
                            className="px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base"
                            style={{
                                borderTop: "1px solid #DBDBDB",
                                borderBottom: "1px solid #DBDBDB",
                                borderRight: "1px solid #DBDBDB",
                            }}
                        >
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">10+</h1>
                            <p>Smart Fulfillment Warehouses</p>
                            {/* (PAN-India) */}
                            <p className="text-sm sm:text-base">(PAN-India)</p>
                        </div>
                        <div className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]">
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">50K+</h1>
                            <p>Verified Product SKUs</p>
                            {/* (Ready to Ship) */}
                            <p className="text-sm sm:text-base">(Winning & Trending))</p>
                        </div>
                        <div
                            className="px-4 sm:px-6 md:px-10 py-6 md:py-10 text-sm sm:text-base"
                            style={{
                                borderTop: "1px solid #DBDBDB",
                                borderBottom: "1px solid #DBDBDB",
                                borderRight: "1px solid #DBDBDB",
                            }}
                        >
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">15K+</h1>
                            <p>Active Sellers & Brands</p>
                            {/* (India + MENA) */}
                            <p className="text-sm sm:text-base">(Dropshippers + D2C)</p>
                        </div>
                        <div className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]">
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">10+</h1>
                            <p>Courier & Logistics Partners</p>
                            {/* (Global) */}
                            <p className="text-sm sm:text-base">(Pan-India Coverage)</p>
                        </div>
                    </div>

                    {/* CTA Text */}
                    <div style={{ lineHeight: "1.4" }} className="mt-8 md:mt-4">
                        <p className="text-xl sm:text-2xl md:text-[34px]">
                            Already Running <span style={{ color: "#0097B2" }}>A Store?</span> <br />
                            <span style={{ color: "#7ED957" }}>Connect Now</span> For Hyper-Growth!
                        </p>
                    </div>
                </div>

                {/* Right Section - Images */}
                <div
                    style={{
                        // gap: "1px",
                        position: "relative",

                    }}
                    className="w-full md:w-1/2 flex flex-col md:flex-row items-stretch gap-5"
                >
                    <div className="flex flex-col items-center w-full md:flex-1">
                        <Image
                            src={inventory}
                            alt="Warehouse worker"
                            style={{ objectFit: "cover" }}
                            className="w-full"
                        />
                        <Button
                            className="bottom-4 text-base sm:text-lg md:text-[18.94px] py-3 md:py-4 mt-6 md:mt-[47px] w-full my-button"
                            style={{
                                borderRadius: "50px",
                            }}
                        >
                            Connect my store
                            <ArrowRight className="inline-block" />
                        </Button>
                    </div>
                    <div className="hidden md:flex md:flex-1 md:flex-col md:justify-end">
                        <Image
                            src={inventory2}
                            alt="Packaging"
                            style={{ objectFit: "cover" }}
                            className="w-full"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CTASection
=======
"use client";

import { ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

/* ─────────────────────────────────────────────
   Count-up hook — slower duration + smoother ease
───────────────────────────────────────────── */
function useCountUp(target: number, duration = 8.0, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.08, 0.6, 0.2, 1], // Very gradual start, smooth deceleration
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [start, target, duration]);

  return value;
}

/* ─────────────────────────────────────────────
   Stat card
───────────────────────────────────────────── */
const StatCard = ({
  rawNumber,
  suffix,
  label,
  sub,
  style,
  className,
  countStarted,
  delay = 0,
}: {
  rawNumber: number;
  suffix: string;
  label: string;
  sub: string;
  style?: React.CSSProperties;
  className?: string;
  countStarted: boolean;
  delay?: number;
}) => {
  const [localStart, setLocalStart] = useState(false);

  // Respect the per-card delay before kicking off the count
  useEffect(() => {
    if (!countStarted) {
      setLocalStart(false);
      return;
    }
    const t = setTimeout(() => setLocalStart(true), delay * 1000);
    return () => clearTimeout(t);
  }, [countStarted, delay]);

  const displayValue = useCountUp(rawNumber, 8.0, localStart);

  const formatted =
    rawNumber >= 1000
      ? `${Math.floor(displayValue / 1000)}K${suffix}`
      : `${displayValue}${suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={countStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 2.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
        {formatted}
      </h1>
      <p>{label}</p>
      <p className="text-sm sm:text-base">{sub}</p>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Word-by-word staggered text reveal
───────────────────────────────────────────── */
const StaggeredText = ({
  children,
  delay = 0,
  className,
  style,
  isInView,
}: {
  children: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  isInView: boolean;
}) => {
  const words = typeof children === "string" ? children.split(" ") : [];

  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{
            duration: 2.2,
            delay: delay + i * 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Video Player with Play/Pause Button
───────────────────────────────────────────── */
const VideoWithControls = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full group">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={className ?? "w-full object-cover"}
      />
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-3 left-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white shadow-md transition-all duration-200 hover:bg-white/35 hover:scale-110 active:scale-95"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 fill-white stroke-white" />
        ) : (
          <Play className="w-4 h-4 fill-white stroke-white" />
        )}
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const CTASection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setIsInView(true);
          } else if (!entry.isIntersecting && entry.intersectionRatio < 0.2) {
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

  return (
    <div
      ref={sectionRef}
      style={{ width: "100%", display: "flex" }}
      className="min-h-screen md:min-h-[547px] py-8 md:py-4"
    >
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 px-4 sm:px-6 md:px-12 lg:mx-0 my-4">
        {/* ── Left Section ── */}
        <div
          className="w-full md:w-1/2"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Stats Grid */}
          <div
            className="md:grid-cols-2 lg:grid-cols-2"
            style={{ display: "grid" }}
          >
            {/* Card delays staggered: each card starts counting after the previous */}
            <StatCard
              rawNumber={10}
              suffix="+"
              label="Smart Fulfillment Warehouses"
              sub="(PAN-India)"
              countStarted={isInView}
              delay={0.4}
              className="px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base"
              style={{
                borderTop: "1px solid #DBDBDB",
                borderBottom: "1px solid #DBDBDB",
                borderRight: "1px solid #DBDBDB",
              }}
            />

            <StatCard
              rawNumber={50000}
              suffix="+"
              label="Verified Product SKUs"
              sub="(Winning & Trending)"
              countStarted={isInView}
              delay={1.2}
              className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]"
              style={undefined}
            />

            <StatCard
              rawNumber={15000}
              suffix="+"
              label="Active Sellers & Brands"
              sub="(Dropshippers + D2C)"
              countStarted={isInView}
              delay={2.0}
              className="px-4 sm:px-6 md:px-10 py-6 md:py-10 text-sm sm:text-base"
              style={{
                borderTop: "1px solid #DBDBDB",
                borderBottom: "1px solid #DBDBDB",
                borderRight: "1px solid #DBDBDB",
              }}
            />

            <StatCard
              rawNumber={10}
              suffix="+"
              label="Courier & Logistics Partners"
              sub="(Pan-India Coverage)"
              countStarted={isInView}
              delay={2.8}
              className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]"
              style={undefined}
            />
          </div>

          {/* CTA Text — word-by-word stagger */}
          <motion.div
            style={{ lineHeight: "1.4" }}
            className="mt-8 md:mt-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-xl sm:text-2xl md:text-[34px]">
              <StaggeredText delay={1.8} isInView={isInView}>
                Already Running
              </StaggeredText>{" "}
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
                }
                transition={{
                  duration: 2.2,
                  delay: 2.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ color: "#0097B2", display: "inline-block" }}
              >
                A Store?
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
                }
                transition={{
                  duration: 2.2,
                  delay: 2.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ color: "#7ED957", display: "inline-block" }}
              >
                Connect Now
              </motion.span>{" "}
              <StaggeredText delay={3.3} isInView={isInView}>
                For Hyper-Growth!
              </StaggeredText>
            </p>
          </motion.div>
        </div>

        {/* ── Right Section — Videos ── */}
        <div
          className="w-full md:w-1/2 flex flex-col md:flex-row items-stretch gap-5"
          style={{ position: "relative" }}
        >
          {/* Video 1: slides DOWN from above */}
          <div className="flex flex-col items-center w-full md:flex-1">
            <motion.div
              initial={{ opacity: 0, y: -150 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }
              }
              transition={{
                duration: 2.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <VideoWithControls
                src="/video/invt1.mp4"
                className="w-full object-cover"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 2.2,
                delay: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <Button
                className="bottom-4 text-base sm:text-lg md:text-[18.94px] py-3 md:py-6 mt-6 md:mt-[47px] w-full my-button"
                style={{ borderRadius: "50px" }}
              >
                <span>Connect my store</span>
                <ArrowRight className="inline-block" />
              </Button>
            </motion.div>
          </div>

          {/* Video 2: slides UP from below */}
          <div className="hidden md:flex md:flex-1 md:flex-col md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
              transition={{
                duration: 2.8,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <VideoWithControls
                src="/video/invt2.mp4"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
>>>>>>> origin/sonali
