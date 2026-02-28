<<<<<<< HEAD
import call from "../../../public/images/call.png"
import Image from "next/image"
const LetsTalk = () => {
  return (
    <section className="bg-gray-100 px-3 py-8 md:py-12">
      <div className="container mx-auto relative rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image src={call} alt="Call Icon" className="w-full h-48 md:h-56 lg:h-64 object-cover" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 md:mb-6 max-w-3xl">
            Join millions of dropshippers who are making <br className="hidden md:block" /> money easily.
          </h2>
          <button className="my-button hover:bg-[#0097B2] text-white font-semibold px-8 md:px-10 lg:px-12 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base cursor-pointer">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  )
}

export default LetsTalk
=======
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import call from "../../../public/images/call.png";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Bidirectional InView hook
───────────────────────────────────────────── */
function useInView(threshold = 0.3) {
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

const LetsTalk = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className="bg-gray-100 px-3 py-8 md:py-12">
      {/* Container scales + fades in */}
      <motion.div
        className="container mx-auto relative rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }
        }
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background image — zoom out from slightly enlarged */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={isInView ? { scale: 1 } : { scale: 1.12 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={call}
            alt="Call Icon"
            className="w-full h-48 md:h-56 lg:h-64 object-cover"
          />
        </motion.div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          {/* Heading — slides down from above */}
          <motion.h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 max-w-3xl"
            initial={{ opacity: 0, y: -36 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -36 }}
            transition={{
              duration: 1.3,
              delay: isInView ? 0.5 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Join Thousands of Dropshippers Scaling
            <br className="hidden md:block" /> with UNICSI.
          </motion.h2>

          {/* Subtext — fades in below heading */}
          <motion.p
            className="text-white/80 text-sm md:text-base mb-4 md:mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{
              duration: 1.1,
              delay: isInView ? 0.7 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Get real time market insight!
          </motion.p>

          {/* Button — scales up with spring */}
          <motion.a
            href="https://whatsapp.com/channel/0029VbCCyVOKWEKpwRMaly2e"
            target="_blank"
            rel="noopener noreferrer"
            className="my-button hover:bg-[#0097B2] text-white font-semibold px-8 md:px-10 lg:px-12 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base cursor-pointer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16,
              delay: isInView ? 0.9 : 0,
            }}
          >
            <span>Join Now →</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default LetsTalk;
>>>>>>> origin/sonali
