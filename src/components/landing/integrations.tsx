"use client";
import { GraduationCap, TrendingUp, FolderOpen, Tag } from "lucide-react";
import businessProcessFlowDiagram from "../../../public/images/flow.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Get Expert Guidance To Launch Your Business",
  },
  {
    icon: TrendingUp,
    title: "Research",
    description: "Find Trending And High-Growth Products",
  },
  {
    icon: FolderOpen,
    title: "Source",
    description: "Get Your Products From UNICSI",
  },
  {
    icon: Tag,
    title: "Sell",
    description: "Make Money And Your Customers Happy",
  },
];

/* ─────────────────────────────────────────────
   Reusable hook — same observer pattern as FeaturesSection
───────────────────────────────────────────── */
function useInView(threshold = [0.15, 0.35, 0.6], rootMargin = "-50px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            setIsInView(true);
          } else if (!entry.isIntersecting && entry.intersectionRatio < 0.2) {
            setIsInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isInView };
}

/* ─────────────────────────────────────────────
   Letter-by-letter animation component
───────────────────────────────────────────── */
const AnimatedText = ({
  text,
  isInView,
  startDelay = 0.1,
  className = "",
}: {
  text: string;
  isInView: boolean;
  startDelay?: number;
  className?: string;
}) => {
  const letters = text.split("");

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 20, rotateX: -90 }
          }
          transition={{
            duration: 0.45,
            delay: startDelay + index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", transformOrigin: "bottom center" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Image — vertical slice wipe reveal
   Clips from left → right using clipPath
───────────────────────────────────────────── */
const ImageWipeReveal = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ clipPath: "inset(0 100% 0 0)" }}
    animate={
      isInView
        ? { clipPath: "inset(0 0% 0 0)" }
        : { clipPath: "inset(0 100% 0 0)" }
    }
    transition={{ duration: 2.4, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
    className="w-full"
  >
    <Image
      src={businessProcessFlowDiagram}
      alt="Process Flow showing Learn, Research, Source, and Sell steps"
      className="w-full h-auto rounded-lg shadow-sm"
    />
  </motion.div>
);

/* ─────────────────────────────────────────────
   Step card — slides from left (even) or right (odd)
   with a subtle 3-D perspective tilt on entry
───────────────────────────────────────────── */
const StepCard = ({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[number];
  index: number;
  isInView: boolean;
}) => {
  const fromLeft = index % 2 === 0;
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -80 : 80,
        rotateY: fromLeft ? -25 : 25,
        scale: 0.9,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotateY: 0, scale: 1 }
          : {
              opacity: 0,
              x: fromLeft ? -80 : 80,
              rotateY: fromLeft ? -25 : 25,
              scale: 0.9,
            }
      }
      transition={{
        duration: 0.9,
        delay: 1.8 + index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 800 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-md border border-gray-100"
    >
      <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="font-bold text-gray-900 text-sm sm:text-base">
        {step.title}
      </p>
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-snug">
        {step.description}
      </p>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   SVG underline — stroke draws itself in
───────────────────────────────────────────── */
const DrawUnderline = ({ isInView }: { isInView: boolean }) => {
  // Calculate delay: after "your income" letters finish animating
  // "Time to take the cap off" = 25 chars * 0.04 = 1.0s + 0.1 start = 1.1s
  // "your income" starts at delay 1.15, 11 chars * 0.04 = 0.44s → ends ~1.59s
  const underlineDelay = 1.65;

  return (
    <svg
      className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-56 h-2 sm:h-3 overflow-visible"
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="underlineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#0097b2" />
          <stop offset="100%" stopColor="#7ed957" />
        </linearGradient>
      </defs>
      <motion.path
        d="M2 10C50 2 150 2 198 10"
        stroke="url(#underlineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 1.0, delay: underlineDelay, ease: "easeOut" }}
      />
    </svg>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const Integrations = () => {
  const { ref, isInView } = useInView();

  // Line 1: "Time to take the cap off"
  const line1 = "Time to take the cap off";
  // Line 2: "your income"
  const line2 = "your income";

  // Line 1 delay starts at 0.1, each letter 0.04s apart
  const line1StartDelay = 0.1;
  // Line 2 starts right after line 1 finishes
  const line2StartDelay = line1StartDelay + line1.length * 0.04 + 0.05;

  return (
    <section
      ref={ref}
      className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header — letter-by-letter reveal ── */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-tight">
            {/* Line 1 */}
            <span
              className="block overflow-hidden"
              style={{ perspective: 600 }}
            >
              <AnimatedText
                text={line1}
                isInView={isInView}
                startDelay={line1StartDelay}
              />
            </span>

            {/* Line 2 with underline */}
            <span
              className="relative inline-block mt-1 sm:mt-2"
              style={{ perspective: 600 }}
            >
              <AnimatedText
                text={line2}
                isInView={isInView}
                startDelay={line2StartDelay}
              />
              <DrawUnderline isInView={isInView} />
            </span>
          </h2>
        </div>

        {/* ── Image wipe reveal ── */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4 md:px-0">
          <ImageWipeReveal isInView={isInView} />
        </div>

        {/* ── Step cards — alternating slide-in ── */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4 md:px-0">
          {steps.map((step, i) => (
            <StepCard
              key={step.title}
              step={step}
              index={i}
              isInView={isInView}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Integrations;
