<<<<<<< HEAD
"use client"

import { useState } from "react"
import { Search as SearchIcon, Camera as CameraIcon, Heart, Star, Menu as MenuIcon, X as XIcon } from "lucide-react"
// import banner from "../../../public/images/banner.png"
import sample1 from "../../../public/images/sample1.jpeg"
import sample2 from "../../../public/images/sample2.jpeg"
import sample3 from "../../../public/images/sample3.jpeg"
import sample4 from "../../../public/images/sample4.jpeg"
import sample5 from "../../../public/images/sample5.jpeg"
import sample6 from "../../../public/images/sample6.jpeg"
import sample7 from "../../../public/images/sample7.jpeg"
import sample8 from "../../../public/images/sample8.jpeg"
import sample9 from "../../../public/images/sample9.jpeg"
import { useRouter } from "next/navigation"

const products = [
    { id: 1, name: "Modern Classic Four Seasons Pet Kennel with Summer Cool Mat Bite Resistant Thickened Dog Sofa for Large", discountedPrice: "₹ 985", originalPrice: "₹ 1200", rating: 4.5, reviews: 120, image: sample1 },
    { id: 2, name: "Modern Classic Four Seasons Pet Kennel with Summer Cool Mat Bite Resistant Thickened Dog Sofa for Large", discountedPrice: "₹ 985", originalPrice: "₹ 1200", rating: 4.2, reviews: 85, image: sample2 },
    { id: 3, name: "Modern Classic Four Seasons Pet Kennel with Summer Cool Mat Bite Resistant Thickened Dog Sofa for Large", discountedPrice: "₹ 985", originalPrice: "₹ 1200", rating: 4.8, reviews: 200, image: sample3 },
    { id: 4, name: "New Hot Selling Ride on Children's Kid's Girl Boy Baby Children Kids Toy Twisted Twisting Wiggle Twist Swing Car", discountedPrice: "Rs. 889/-", originalPrice: "₹ 1600", rating: 4.6, reviews: 150, image: sample4 },
    { id: 5, name: "New Hot Selling Ride on Children's Kid's Girl Boy Baby Children Kids Toy Twisted Twisting Wiggle Twist Swing Car", discountedPrice: "Rs. 889/-", originalPrice: "₹ 1600", rating: 4.3, reviews: 95, image: sample5 },
    { id: 6, name: "New Hot Selling Ride on Children's Kid's Girl Boy Baby Children Kids Toy Twisted Twisting Wiggle Twist Swing Car", discountedPrice: "Rs. 889/-", originalPrice: "₹ 1600", rating: 4.7, reviews: 180, image: sample6 },
    { id: 7, name: "New 3-in-1 IPL Laser Epilator Painless Ice Cool Hair Removal Device with Ice Cooling System for Home Use", discountedPrice: "Rs. 789/-", originalPrice: "₹ 2000", rating: 4.4, reviews: 110, image: sample7 },
    { id: 8, name: "New 3-in-1 IPL Laser Epilator Painless Ice Cool Hair Removal Device with Ice Cooling System for Home Use", discountedPrice: "Rs. 789/-", originalPrice: "₹ 2000", rating: 4.9, reviews: 220, image: sample8 },
    { id: 9, name: "New 3-in-1 IPL Laser Epilator Painless Ice Cool Hair Removal Device with Ice Cooling System for Home Use", discountedPrice: "Rs. 789/-", originalPrice: "₹ 2000", rating: 4.1, reviews: 75, image: sample9 },
];

const banner = "https://unicsi-media-storage.s3.ap-south-1.amazonaws.com/images/banner.png"

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()

    // const heroImage = "/modern-dropshipping-hero-background.jpg"
    // const productImage = "/luxury-leather-messenger-bag.jpg"

    return (
        <div className="relative w-full overflow-hidden p-4">
            {/* Main Hero Section */}
            <div
                className="relative w-full h-[97vh] md:h-[930px] mx-auto rounded-[24px]  overflow-hidden"
            // style={{
            //   minHeight: "600px",
            //   marginLeft: "auto",
            //   marginRight: "auto",
            //   border : "2px solid red"

            // }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-1 bg-cover bg-no-repeat bg-opacity-100"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[url('https://unicsi-media-storage.s3.ap-south-1.amazonaws.com/images/banner.png')] rounded-2xl bg-cover bg-no-repeat"></div>

                {/* Navigation */}
                <nav className="relative z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-between items-center">
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-6 text-white text-sm md:text-base">
                            <a href="#" className="hover:text-blue-300 transition-colors font-medium">
                                All Categories
                            </a>
                            <a href="#" className="hover:text-blue-300 transition-colors font-medium">
                                Solutions
                            </a>
                            <a href="#" className="hover:text-blue-300 transition-colors font-medium">
                                Why UNICSI
                            </a>
                            <a href="#" className="hover:text-blue-300 transition-colors font-medium">
                                Pricing
                            </a>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white hover:text-blue-300 transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>

                    <div className="flex items-center gap-2 sm:gap-4 ml-auto">
                        <button className="text-white hover:text-blue-300  font-bold text-xs sm:text-sm md:text-base whitespace-nowrap" onClick={() => router.push("/auth/login")}>
                            Login
                        </button>
                        <button
                            className="text-white my-button px-4 sm:px-6 py-2 rounded-full font-medium transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"

                            
                        >
                            Sign up
                        </button>
                    </div>
                </nav>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 backdrop-blur-md z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col p-6 gap-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-white font-bold text-lg">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="Close menu"
                            >
                                <XIcon size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 text-white">
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-colors font-medium text-base py-2 border-b border-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                All Categories
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-colors font-medium text-base py-2 border-b border-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Solutions
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-colors font-medium text-base py-2 border-b border-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Why UNICSI
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-colors font-medium text-base py-2 border-b border-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </a>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-[90] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
                )}

                {/* Main Hero Content */}
                <div className="relative z-40 px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-20 lg:pt-28 text-center flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 md:mb-6 leading-tight tracking-wide">
                            Fulfill Your Dropshipping
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-wide font-medium">
                            WITH UNICSI
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-12 font-medium max-w-3xl mx-auto px-2 leading-relaxed">
                            From Global Suppliers to Seamless Automation – Your Gateway to Hassle-Free Success Starts Here!
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative z-40 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-12 flex justify-center">
                    <div className="w-full max-w-2xl md:max-w-5xl bg-white/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-row sm:flex-row items-center gap-3 sm:gap-4 shadow-2xl border border-white/30">
                        <SearchIcon className="ml-2 sm:ml-3 mr-2 sm:mr-4 flex-shrink-0 text-white" size={18} />
                        <input
                            type="text"
                            placeholder="Find the product you're looking for"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-white text-sm sm:text-base md:text-lg w-full focus:outline-none"
                        />
                        <div className="flex items-center gap-2 sm:gap-3 mr-2 sm:mr-3 flex-shrink-0">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                {/* <CameraIcon className="text-gray-500" size={20} /> */}
                            </button>
                            <button className="my-button text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base md:text-lg transition-colors whitespace-nowrap">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Products Section */}
            <div className="relative w-full mt-[-250px] sm:mt-12 md:mt-[-250px] lg:mt-[-250px] px-4 sm:px-6 md:px-8">
                <div className="flex flex-row sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-0 mb-6 md:mb-8">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-normal text-white">Popular Products</h2>
                    <a
                        href="#"
                        className="text-[#fff] hover:text-[#fff] transition-colors text-sm sm:text-base md:text-lg font-medium underline"
                    >
                        View more
                    </a>
                </div>

                {/* Product Cards Carousel */}
                <div className="w-full overflow-x-auto hide-scrollbar">
                    <div className="flex gap-4 sm:gap-6 pb-4 min-w-min">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-3 sm:p-4 flex-shrink-0 w-60 sm:w-72 md:w-80"
                            >
                                <div className="relative mb-3 sm:mb-4">
                                    <img
                                        src={product.image?.src || "/placeholder.svg"}
                                        alt={`Product ${product}`}
                                        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md"
                                    />
                                    <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
                                        <Heart size={20} className="text-red-500" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 line-clamp-2">
                                        {product.name}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <Star size={20} className="text-yellow-400" />
                                        <p className="text-sm sm:text-base text-gray-600 font-medium">{product.rating}</p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <span className="line-through text-sm sm:text-base text-gray-500 font-light">{product.originalPrice}</span>
                                        <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">{product.discountedPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
=======
"use client";

import { motion, useInView, easeOut, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import PopularProducts from "./Products";

// ─── Carousel config ──────────────────────────────────────────────────────────
const SLIDES = [
  {
    image: "/images/banner.png",
    textPosition: "center",
    line1Class:
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold",
    line2Class:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium",
    noWrap: true,
    typeLines: ["Fulfill Your Dropshipping", "WITH UNICSI"],
    paragraph:
      "From sourcing to shipping, Unicsi simplifies dropshipping so you can focus on marketing, scaling, and growing your brand.",
  },
  {
    image: "/images/hero4.png",
    textPosition: "left",
    line1Class:
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold",
    line2Class:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium",
    noWrap: true,
    typeLines: ["The Infrastructure", "Behind Winning Stores", "WITH UNICSI"],
    paragraph:
      "Structured sourcing, optimized logistics, and scalable systems built for serious Dropshippers who want long-term growth.",
  },
  {
    image: "/images/hero3.png",
    textPosition: "right",
    line1Class:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",
    line2Class:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium",
    noWrap: false,
    typeLines: ["Smart Bulk", "Sourcing", "WITH UNICSI"],
    paragraph:
      "Source products in bulk at competitive pricing with stable inventory and structured fulfillment support. Unicsi provides reliable bulk sourcing with efficient logistics across India.",
  },
];

const LINGER_MS = 1800;
const SUBTITLE_FADE_MS = 1000;
const ACTIVE_COLOR = "#0097b2";

// ─── Typewriter ───────────────────────────────────────────────────────────────
function useTypewriter(lines: string[], speed = 55, slideIndex: number) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    lines.map(() => ""),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [settledIndex, setSettledIndex] = useState(slideIndex);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayedLines(lines.map(() => ""));
    setCurrentLine(0);
    setCurrentChar(0);
    setDone(false);
    const t = setTimeout(() => setSettledIndex(slideIndex), 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  useEffect(() => {
    if (settledIndex !== slideIndex) return;

    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const target = lines[currentLine];
    if (currentChar < target.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = target.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [settledIndex, slideIndex, currentLine, currentChar, lines, speed]);

  const ready = settledIndex === slideIndex;
  return { displayedLines, done: done && ready };
}

// ─── Cursor ───────────────────────────────────────────────────────────────────
const Cursor = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      className="inline-block w-[2px] h-[0.9em] bg-white align-middle ml-1 rounded-sm"
    />
  );
};

// ─── AnimatedSection ──────────────────────────────────────────────────────────
const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 50, filter: "blur(8px)" }
      }
      transition={{ duration: 0.75, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Text alignment helper ────────────────────────────────────────────────────
function getTextClasses(position: string) {
  switch (position) {
    case "left":
      return {
        outerFlex: "justify-start",
        innerText: "text-left",
        padding: "pl-20 sm:pl-24 md:pl-28 lg:pl-36",
      };
    case "center":
      return {
        outerFlex: "justify-center",
        innerText: "text-center",
        padding: "px-6",
      };
    default:
      return {
        outerFlex: "justify-end",
        innerText: "text-right",
        padding: "pr-6 sm:pr-10 md:pr-16 lg:pr-24",
      };
  }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useInView(heroRef, { once: false, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + SLIDES.length) % SLIDES.length;
      const isForward =
        next > activeIndex || (activeIndex === SLIDES.length - 1 && next === 0);
      setDirection(isForward ? 1 : -1);
      setActiveIndex(next);
    },
    [activeIndex],
  );

  const currentSlide = SLIDES[activeIndex];

  // Per-slide typewriter lines
  const { displayedLines, done: typewriterDone } = useTypewriter(
    currentSlide.typeLines,
    55,
    activeIndex,
  );

  // ── Auto-advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!typewriterDone || isPaused) return;

    const t = setTimeout(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SUBTITLE_FADE_MS + LINGER_MS);

    return () => clearTimeout(t);
  }, [typewriterDone, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
    }),
  };

  const textStyle = getTextClasses(currentSlide.textPosition);
  const wrapClass = currentSlide.noWrap ? "whitespace-nowrap" : "";

  // ── Dynamic line splitting based on typeLines count ───────────────────────
  const hasTwoLines = currentSlide.typeLines.length === 2;

  const headingLines = hasTwoLines
    ? [displayedLines[0]]
    : [displayedLines[0], displayedLines[1]];

  const unicsiLine = hasTwoLines
    ? (displayedLines[1] ?? "")
    : (displayedLines[2] ?? "");

  // Cursor logic: show cursor on the last actively-typing line
  const typingLineIndex = currentSlide.typeLines.findIndex(
    (_, i) =>
      displayedLines[i] !== undefined &&
      displayedLines[i].length > 0 &&
      displayedLines[i].length < currentSlide.typeLines[i].length,
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={heroRef}
        className="relative w-full h-[97vh] sm:h-[80vh] md:h-[930px] mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ── SLIDING BACKGROUND ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${currentSlide.image}')` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />
        </div>

        {/* ── HERO TEXT ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.15 }}
            className={`absolute inset-0 z-40 flex items-center pointer-events-none md:-mt-20 
  max-lg:!justify-center max-lg:!px-5 max-lg:!pl-5 max-lg:!pr-5 max-lg:!items-start max-lg:!pt-30
  ${textStyle.outerFlex} ${textStyle.padding}`}
          >
            <div
              className={`max-w-xl w-full max-lg:!text-center ${textStyle.innerText}`}
            >
              {/* Regular heading lines */}
              {headingLines.map((text, i) => (
                <h1
                  key={i}
                  className={`${currentSlide.line1Class} max-lg:whitespace-normal ${wrapClass} text-white mb-1 sm:mb-2 leading-tight tracking-wide min-h-[1.2em]`}
                >
                  {text}
                  <Cursor show={!typewriterDone && typingLineIndex === i} />
                </h1>
              ))}

              {/* "WITH UNICSI" line — typewritten for all slides */}
              <h1
                className={`${currentSlide.line2Class} max-lg:whitespace-normal ${wrapClass} text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-wide min-h-[1.2em]`}
              >
                {unicsiLine}
                <Cursor
                  show={
                    !typewriterDone &&
                    unicsiLine.length > 0 &&
                    unicsiLine.length < "WITH UNICSI".length
                  }
                />
              </h1>

              {/* Subtitle — per slide paragraph */}
              <motion.p
                key={`subtitle-${activeIndex}`}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={
                  typewriterDone
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 30, filter: "blur(6px)" }
                }
                transition={{
                  duration: SUBTITLE_FADE_MS / 1000,
                  ease: easeOut,
                }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed"
              >
                {currentSlide.paragraph}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── NAV DOTS ── */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 lg:gap-4 bg-white py-3 lg:py-5 px-[7px] lg:px-[10px] shadow-lg"
          style={{ borderRadius: "0 1rem 1rem 0" }}
        >
          {SLIDES.map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative flex items-center justify-center focus:outline-none cursor-pointer"
                style={{ width: 24, height: 24 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="dot-ring"
                    className="absolute rounded-full border-2"
                    style={{
                      borderColor: ACTIVE_COLOR,
                      width: 22,
                      height: 22,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <motion.span
                  animate={{
                    width: isActive ? 11 : 9,
                    height: isActive ? 11 : 9,
                    backgroundColor: isActive
                      ? ACTIVE_COLOR
                      : "rgba(160,160,160,0.65)",
                  }}
                  whileHover={{
                    backgroundColor: isActive ? ACTIVE_COLOR : "#0097b260",
                    scale: 1.25,
                  }}
                  transition={{ duration: 0.22 }}
                  className="rounded-full block cursor-pointer"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── POPULAR PRODUCTS ── */}
      <AnimatedSection delay={0.1}>
        <PopularProducts isInView={true} />
      </AnimatedSection>
    </div>
  );
};

export default Hero;
>>>>>>> origin/sonali
