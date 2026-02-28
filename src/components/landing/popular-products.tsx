<<<<<<< HEAD
import Home from "../../../public/images/Home.png"
import BeautyHealth from "../../../public/images/Beauty&Health.png"
import Clothing from "../../../public/images/Clothing.png"
import Kids from "../../../public/images/KidPlay.png"
import { CircleUpRightArrow, LeftArrowLine, RightArrowLine } from "../../../public/svg"
import Image from "next/image"

const PopularProducts = () => {
	const popularProducts = [
		{ id: 1, name: "Beauty & Health", image: BeautyHealth },
		{ id: 2, name: "Home & Kitchen", image: Home },
		{ id: 3, name: "Health & Beauty", image: Clothing },
		{ id: 4, name: "Toy's, Baby", image: Kids },
		{ id: 5, name: "Electronics", image: BeautyHealth },
		{ id: 6, name: "Home", image: Home },
	]
	return (
		<div className="my-8 sm:my-12 md:my-16 lg:my-20">
			<div className="text-center pt-2 font-[600] text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4">
				<h1>Start dropshipping with Best Niche Category's</h1>
			</div>

			<div
				className="flex gap-2 overflow-x-scroll hide-scrollbar"
				style={{
					marginTop: "20px",
					maxWidth: "100%",
					paddingBottom: "8px",
				}}
			>
				{popularProducts.map((product) => (
					<div
						key={product.id}
						className="min-w-[200px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[380px] relative flex-shrink-0"
					>
						<Image
							src={product.image || "/placeholder.svg"}
							alt={product.name}
							className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[450px] object-cover rounded-md"
						/>
						<CircleUpRightArrow className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-8 sm:h-8" />
						<p
							className="absolute text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold"
							style={{ bottom: "20px", left: "15px", lineHeight: "100%" }}
						>
							{product.name}
						</p>
					</div>
				))}
			</div>
			<div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4" style={{ marginTop: "10px" }}>
				<LeftArrowLine className="mt-2 sm:mt-3 md:mt-4 text-[#8E8E8E] w-6 h-6 sm:w-8 sm:h-8" />
				<RightArrowLine className="mt-2 sm:mt-3 md:mt-4 text-[#8E8E8E] w-6 h-6 sm:w-8 sm:h-8" />
			</div>
		</div>
	)
}

export default PopularProducts
=======
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Home from "../../../public/images/Home.png";
import BeautyHealth from "../../../public/images/Beauty&Health.png";
import Clothing from "../../../public/images/Clothing.png";
import Kids from "../../../public/images/KidPlay.png";
import {
  CircleUpRightArrow,
  LeftArrowLine,
  RightArrowLine,
} from "../../../public/svg";
import Image from "next/image";

const popularProducts = [
  { id: 1, name: "Beauty & Health", image: BeautyHealth },
  { id: 2, name: "Home & Kitchen", image: Home },
  { id: 3, name: "Health & Beauty", image: Clothing },
  { id: 4, name: "Toy's, Baby", image: Kids },
  { id: 5, name: "Electronics", image: BeautyHealth },
  { id: 6, name: "Home", image: Home },
];

const PopularProducts = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [isInView, setIsInView] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  /* ── Intersection Observer — responsive thresholds ── */
  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1280;

    // Lower thresholds on mobile/tablet so isInView fires early enough
    const thresholds =
      w < 640
        ? [0.05, 0.1] // mobile
        : w < 1024
          ? [0.08, 0.15] // tablet
          : [0.2, 0.4, 0.6]; // desktop — unchanged

    const triggerRatio =
      w < 640
        ? 0.05 // mobile
        : w < 1024
          ? 0.08 // tablet
          : 0.6; // desktop — unchanged

    const rootMargin = w < 1024 ? "0px" : "-50px"; // remove negative margin on mobile/tablet

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= triggerRatio &&
            !hasAnimated.current
          ) {
            setIsInView(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: thresholds, rootMargin },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* ── Responsive detection ── */
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Autoplay ── */
  useEffect(() => {
    if (hoveredCardIndex !== null) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % popularProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredCardIndex]);

  const navigate = (dir: "left" | "right") => {
    setDirection(dir === "right" ? 1 : 0);
    setCurrentIndex((prev) => {
      if (dir === "right") return (prev + 1) % popularProducts.length;
      return (prev - 1 + popularProducts.length) % popularProducts.length;
    });
  };

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : 0);
    setCurrentIndex(index);
  };

  /* ── Three cards to display (desktop only) ── */
  const displayProducts =
    !isMobile && !isTablet
      ? [
          popularProducts[
            (currentIndex - 1 + popularProducts.length) % popularProducts.length
          ],
          popularProducts[currentIndex],
          popularProducts[(currentIndex + 1) % popularProducts.length],
        ]
      : popularProducts;

  /* ── Animation variants ── */
  const centerVariants: Variants = {
    enter: (d: number) => ({ x: d === 1 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (d: number) => ({
      x: d === 1 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.35, ease: "easeOut" },
    }),
  };

  const sideVariants: Variants = {
    left: {
      x: -460,
      opacity: 0.8,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    right: {
      x: 460,
      opacity: 0.8,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const mobileVariants: Variants = {
    enter: (d: number) => ({ x: d === 1 ? 300 : -300, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (d: number) => ({
      x: d === 1 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    }),
  };

  /* ── Shared card content ── */
  const ProductCard = ({
    product,
    isCenter,
    index,
  }: {
    product: (typeof popularProducts)[0];
    isCenter: boolean;
    index?: number;
  }) => (
    <div
      className="relative group w-full h-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setHoveredCardIndex(index ?? null)}
      onMouseLeave={() => setHoveredCardIndex(null)}
    >
      <motion.div
        className="w-full h-full"
        whileHover={isCenter ? { scale: 1.04 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 rounded-2xl ${
          isCenter ? "opacity-50 group-hover:opacity-80" : "opacity-60"
        }`}
      />

      {isCenter && (
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ scale: 1.2, rotate: 12 }}
          transition={{ duration: 0.5 }}
        >
          <CircleUpRightArrow className="w-8 h-8 drop-shadow-md" />
        </motion.div>
      )}

      <motion.p
        className="absolute text-white text-lg lg:text-xl font-bold"
        style={{ bottom: "20px", left: "18px", lineHeight: "100%" }}
        whileHover="hovered"
        initial={false}
      >
        <motion.span
          className="block"
          variants={{
            hovered: {
              y: -4,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {product.name}
        </motion.span>
        {isCenter && (
          <motion.span
            className="block h-[2px] bg-white mt-1 origin-left"
            initial={{ scaleX: 0 }}
            variants={{
              hovered: {
                scaleX: 1,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        )}
      </motion.p>
    </div>
  );

  /* ── Shared dots ── */
  const Dots = ({ size = "sm" }: { size?: "sm" | "md" }) => (
    <div
      className={`flex justify-center ${size === "md" ? "mt-6 space-x-3" : "mt-5 space-x-2"}`}
    >
      {popularProducts.map((_, i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          className={`rounded-full transition-all duration-500 ${
            size === "md" ? "w-3 h-3" : "w-2 h-2"
          } ${currentIndex === i ? "bg-black scale-125" : "bg-gray-400"}`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  /* ── Shared arrow buttons ── */
  const ArrowBtn = ({
    dir,
    size = "sm",
  }: {
    dir: "left" | "right";
    size?: "sm" | "md";
  }) => (
    <button
      onClick={() => navigate(dir)}
      className={`bg-white/90 hover:bg-white rounded-full shadow-lg transition-all ${
        size === "md" ? "p-2" : "p-1.5"
      }`}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      <svg
        className={`text-gray-700 ${size === "md" ? "w-5 h-5" : "w-4 h-4"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  /* ── Mobile view ── */
  if (isMobile) {
    return (
      <div ref={sectionRef} className="my-8 overflow-hidden">
        <motion.div
          className="text-center pt-2 font-[600] text-xl px-4"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Start dropshipping with Best Niche Category&apos;s</h1>
        </motion.div>

        <motion.div
          className="relative px-10 mt-5"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-[280px] h-[320px] flex items-center justify-center overflow-hidden">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={`${popularProducts[currentIndex].id}-${currentIndex}`}
                  custom={direction}
                  variants={mobileVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full rounded-2xl z-20"
                >
                  <ProductCard
                    product={popularProducts[currentIndex]}
                    isCenter={true}
                    index={currentIndex}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute inset-y-0 left-4 flex items-center">
            <ArrowBtn dir="left" size="sm" />
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <ArrowBtn dir="right" size="sm" />
          </div>
        </motion.div>

        <Dots size="sm" />
      </div>
    );
  }

  /* ── Tablet view ── */
  if (isTablet) {
    return (
      <div ref={sectionRef} className="my-12 overflow-hidden">
        <motion.div
          className="text-center pt-2 font-[600] text-2xl px-4"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Start dropshipping with Best Niche Category&apos;s</h1>
        </motion.div>

        <motion.div
          className="relative px-16 mt-5"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[380px] flex items-center justify-center overflow-hidden">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={`${popularProducts[currentIndex].id}-${currentIndex}`}
                  custom={direction}
                  variants={mobileVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full rounded-2xl z-20"
                >
                  <ProductCard
                    product={popularProducts[currentIndex]}
                    isCenter={true}
                    index={currentIndex}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute inset-y-0 left-12 flex items-center">
            <ArrowBtn dir="left" size="md" />
          </div>
          <div className="absolute inset-y-0 right-12 flex items-center">
            <ArrowBtn dir="right" size="md" />
          </div>
        </motion.div>

        <Dots size="md" />
      </div>
    );
  }

  /* ── Desktop view — original, untouched ── */
  return (
    <div ref={sectionRef} className="my-20 overflow-hidden">
      <motion.div
        className="text-center pt-2 font-[600] text-3xl lg:text-4xl px-4"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1>Start dropshipping with Best Niche Category&apos;s</h1>
      </motion.div>

      <motion.div
        className="relative mt-6"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl flex items-center justify-center h-[380px] md:h-[420px] lg:h-[460px] overflow-visible">
            <AnimatePresence custom={direction} initial={false}>
              {displayProducts.map((product, index) => {
                const isCenter = index === 1;
                const isLeft = index === 0;
                const actualIndex =
                  (currentIndex + index - 1 + popularProducts.length) %
                  popularProducts.length;

                return (
                  <motion.div
                    key={`${product.id}-${currentIndex}-${index}`}
                    custom={direction}
                    variants={isCenter ? centerVariants : sideVariants}
                    initial={isCenter ? "enter" : isLeft ? "left" : "right"}
                    animate={isCenter ? "center" : isLeft ? "left" : "right"}
                    exit={isCenter ? "exit" : isLeft ? "left" : "right"}
                    className={`absolute rounded-2xl ${
                      isCenter
                        ? "w-72 md:w-80 lg:w-[389px] h-[380px] md:h-[420px] lg:h-[460px] z-20"
                        : "w-60 md:w-72 lg:w-[320px] h-[320px] md:h-[360px] lg:h-[400px] z-10 cursor-pointer"
                    }`}
                    style={{
                      filter: isCenter
                        ? "drop-shadow(0 16px 40px rgba(0,0,0,0.2))"
                        : "drop-shadow(0 8px 20px rgba(0,0,0,0.1))",
                    }}
                    onClick={() =>
                      !isCenter && navigate(isLeft ? "left" : "right")
                    }
                  >
                    <ProductCard
                      product={product}
                      isCenter={isCenter}
                      index={actualIndex}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <motion.button
            onClick={() => navigate("left")}
            whileTap={{ scale: 0.88 }}
            className="focus:outline-none"
            aria-label="Scroll left"
          >
            <LeftArrowLine className="w-8 h-8 text-gray-800 cursor-pointer transition-colors duration-300" />
          </motion.button>

          <div className="flex items-center gap-2">
            {popularProducts.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToIndex(i)}
                animate={{
                  width: currentIndex === i ? 20 : 6,
                  backgroundColor: currentIndex === i ? "#0097B2" : "#D0D0D0",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[6px] rounded-full"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => navigate("right")}
            whileTap={{ scale: 0.88 }}
            className="focus:outline-none"
            aria-label="Scroll right"
          >
            <RightArrowLine className="w-8 h-8 text-gray-800 cursor-pointer transition-colors duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PopularProducts;
>>>>>>> origin/sonali
