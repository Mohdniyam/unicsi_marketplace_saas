"use client";

import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Intersection Hook
───────────────────────────────────────────── */
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => setIsInView(entry.isIntersecting)),
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}

/* ─────────────────────────────────────────────
   AdaptiveSection (same as Enterprise)
───────────────────────────────────────────── */
interface AdaptiveSectionProps {
  children: ReactNode;
  bgColor?: string;
  isFirst?: boolean;
}

const AdaptiveSection = ({
  children,
  bgColor = "bg-white",
  isFirst = false,
}: AdaptiveSectionProps) => {
  const roundedClasses = isFirst
    ? ""
    : "rounded-tr-2xl rounded-tl-2xl overflow-hidden";

  return (
    <section
      className={`${bgColor} text-black grid place-content-center sticky top-16 ${roundedClasses}`}
    >
      {children}
    </section>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const WhyUnicsi = () => {
  const hero = useInView(0.4);
  const section1 = useInView(0.3);
  const section6 = useInView(0.3);

  return (
    <div className="w-full bg-white">
      {/* ───────────────── HERO ───────────────── */}
      <section
        ref={hero.ref}
        className="min-h-[60vh] lg:min-h-[75vh] flex items-center justify-center px-6 md:px-12 text-center"
      >
        <div className="max-w-5xl">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Why <span style={{ color: "#0097B2" }}>Unicsi?</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Built for Dropshippers and eCom Sellers. Designed for Growth.
            <br />
            <br />
            Unicsi is more than just a sourcing platform — it is a complete
            dropshipping ecosystem connecting ambitious sellers with verified
            suppliers, high-potential products, and reliable logistics across
            India. <br /> <br />
            We understand that success in dropshipping depends on three core
            factors: the right product, the right supplier, and the right
            delivery system. Unicsi brings all three together in one streamlined
            platform.
          </motion.p>
        </div>
      </section>

      {/* ───────────────── 3 CORE FACTORS ───────────────── */}
      <section ref={section1.ref} className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            "The Right Product",
            "The Right Supplier",
            "The Right Delivery System",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={section1.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 bg-white rounded-lg shadow-sm
    transform-gpu
    transition-all duration-500 ease-out
hover:shadow-[0_0_20px_4px_rgba(126,217,87,0.18),0_0_20px_4px_rgba(0,151,178,0.18)]
    hover:-translate-y-2"
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: "#0097B2" }}
              >
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────── LENIS STICKY SCROLL — 4 IMAGE+TEXT SECTIONS ───────────────── */}
      <ReactLenis root>
        <main className="bg-white">
          <div className="wrapper">
            {/* 1. Unique Products */}
            <AdaptiveSection bgColor="bg-[#f1f1f1]" isFirst={true}>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 md:px-12">
                <div>
                  <Image
                    src="/images/why1.jpeg"
                    alt="Trending products"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Access to Unique & Trending Products
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We curate and onboard products based on demand potential,
                    supplier reliability, and scalability. Our focus is on
                    offering unique, high-conversion, and non-saturated products
                    — helping sellers avoid price wars and stand out in
                    competitive markets.
                  </p>
                </div>
              </div>
            </AdaptiveSection>

            {/* 2. Network of Trusted Suppliers */}
            <AdaptiveSection bgColor="bg-[#fff]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 md:px-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Network of Trusted Suppliers
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Unicsi connects dropshippers with multiple verified
                    suppliers across different Indian states. This distributed
                    sourcing model improves stock availability, reduces
                    fulfillment delays, and ensures faster shipping timelines.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/why2.jpeg"
                    alt="Warehouse suppliers"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </AdaptiveSection>

            {/* 3. Integrated Courier Support */}
            <AdaptiveSection bgColor="bg-[#f1f1f1]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 md:px-12">
                <div>
                  <Image
                    src="/images/why3.png"
                    alt="Courier and delivery logistics"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Integrated Courier Support
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We simplify logistics by providing courier coordination and
                    shipment handling support, allowing sellers to focus on
                    marketing and scaling instead of operational complexities.
                  </p>
                </div>
              </div>
            </AdaptiveSection>

            {/* 4. Bulk & B2B Supply */}
            <AdaptiveSection bgColor="bg-[#fff]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 md:px-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Bulk & B2B Supply
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    In addition to dropshipping, Unicsi also offers bulk
                    purchasing options for sellers who want better margins and
                    inventory control. Whether you're testing products through
                    dropshipping or scaling through bulk buying, our platform
                    supports both models.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/why4.jpeg"
                    alt="Bulk warehouse inventory"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </AdaptiveSection>
          </div>
        </main>
      </ReactLenis>

      {/* ───────────────── SIMPLIFIED OPERATIONS ───────────────── */}
      <section ref={section6.ref} className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={section6.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Simplified Operations.
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={section6.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            From sourcing to dispatch, our system is designed to reduce manual
            effort and improve operational clarity — making growth more
            predictable and scalable.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default WhyUnicsi;
