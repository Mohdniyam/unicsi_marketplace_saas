"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profileImg1 from "../../../public/images/pp1.jpg";
import profileImg2 from "../../../public/images/pp2.jpg";
import Image from "next/image";

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { threshold, rootMargin: "0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}

function useTypewriter(text: string, speed = 30, trigger = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (trigger) {
      setDisplayed("");
      setDone(false);
    }
  }, [trigger]);

  useEffect(() => {
    if (!trigger) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [displayed, text, speed, trigger]);

  return { displayed, done };
}

const Cursor = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      className="inline-block w-[2px] h-[0.9em] bg-gray-700 align-middle ml-[1px] rounded-sm"
    />
  );
};

function TypewriterParagraph({
  text,
  isInView,
  startDelay = 1100,
  speed = 28,
  className = "",
}: {
  text: string;
  isInView: boolean;
  startDelay?: number;
  speed?: number;
  className?: string;
}) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTriggered(false);
      const t = setTimeout(() => setTriggered(true), startDelay);
      return () => clearTimeout(t);
    } else {
      setTriggered(false);
    }
  }, [isInView, startDelay]);

  const { displayed, done } = useTypewriter(text, speed, triggered);

  return (
    <p className={className}>
      {displayed}
      <Cursor show={triggered && !done} />
    </p>
  );
}

const Testimonials = () => {
  const { ref, isInView } = useInView(0.25);

  const text1 =
    '"Finding winning products was always difficult until I joined Unicsi. Their product selection and Seller support genuinely stand out."';
  const text2 =
    '"Unicsi made dropshipping simple for me. Unique products, fast dispatch, and clear communication. Perfect for Indian Dropshipper who want to scale without headaches."';

  const cardClass = `
    bg-white p-4 md:p-6 rounded-lg shadow-sm
    transform-gpu
    transition-all duration-500 ease-out
hover:shadow-[0_0_20px_4px_rgba(126,217,87,0.18),0_0_20px_4px_rgba(0,151,178,0.18)]
    hover:-translate-y-2
    cursor-pointer
  `;

  return (
    <section ref={ref} className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap gap-x-2 mb-6 md:mb-8">
          {"What Do Other Dropshippers Say?".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 1.3,
                delay: isInView ? 0.1 + i * 0.1 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            className={cardClass}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{
              duration: 1.5,
              delay: isInView ? 0.5 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex gap-2 md:gap-3 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -15 }
                }
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: isInView ? 0.8 : 0,
                }}
              >
                <Image
                  src={profileImg1 || "/placeholder.svg"}
                  alt="Customer 1"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.h4
                  className="font-semibold text-base md:text-lg"
                  initial={{ opacity: 0, x: -16 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
                  }
                  transition={{ duration: 0.8, delay: isInView ? 0.95 : 0 }}
                >
                  Veena
                </motion.h4>
                <motion.p
                  className="text-gray-500 text-sm md:text-base"
                  initial={{ opacity: 0, x: -16 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
                  }
                  transition={{ duration: 0.8, delay: isInView ? 1.05 : 0 }}
                >
                  Dropshipper
                </motion.p>
              </div>
            </div>

            <TypewriterParagraph
              text={text1}
              isInView={isInView}
              startDelay={1100}
              speed={28}
              className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 min-h-[4rem]"
            />

            <motion.div
              className="text-xs md:text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: isInView ? 1.3 : 0 }}
            >
              Veena, Dropshipper
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={cardClass}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
              duration: 1.5,
              delay: isInView ? 0.7 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex gap-2 md:gap-3 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: 15 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 15 }
                }
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: isInView ? 1.0 : 0,
                }}
              >
                <Image
                  src={profileImg2 || "/placeholder.svg"}
                  alt="Customer 2"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.h4
                  className="font-semibold text-base md:text-lg"
                  initial={{ opacity: 0, x: 16 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }
                  }
                  transition={{ duration: 0.8, delay: isInView ? 1.15 : 0 }}
                >
                  Ram
                </motion.h4>
                <motion.p
                  className="text-gray-500 text-sm md:text-base"
                  initial={{ opacity: 0, x: 16 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }
                  }
                  transition={{ duration: 0.8, delay: isInView ? 1.25 : 0 }}
                >
                  Dropshipper
                </motion.p>
              </div>
            </div>

            <TypewriterParagraph
              text={text2}
              isInView={isInView}
              startDelay={1300}
              speed={28}
              className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 min-h-[4rem]"
            />

            <motion.div
              className="text-xs md:text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: isInView ? 1.5 : 0 }}
            >
              Ram, Dropshipper
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
