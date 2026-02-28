"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Intersection Observer Hook
───────────────────────────────────────────── */
function useInView(threshold = 0.35) {
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

const AboutPage = () => {
  const hero = useInView(0.4);
  const story = useInView(0.3);
  const pillars = useInView(0.3);
  const mission = useInView(0.3);
  const vision = useInView(0.3);

  return (
    <div className="w-full bg-white">
      {/* ───────────────── HERO SECTION ───────────────── */}
      <section
        ref={hero.ref}
        className="min-h-[80vh] flex items-center justify-center px-6 md:px-12"
      >
        <div className="max-w-5xl text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 60 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            About <span style={{ color: "#0097B2" }}>Us</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <strong>Unicsi Private Limited</strong> is an India-based product
            sourcing and dropshipping technology platform focused on simplifying
            commerce for modern online sellers.
            <br />
            <br />
            Founded with the objective of bridging the gap between reliable
            suppliers and ambitious entrepreneurs, Unicsi provides a structured
            and technology-enabled sourcing infrastructure that enables
            efficient product discovery, supplier coordination, and scalable
            operations.
            <br />
            <br />
            In an increasingly competitive e-commerce landscape, product
            differentiation and supply reliability are critical success factors.
            Unicsi addresses these challenges by offering access to curated,
            high-potential products while reducing the operational complexity
            traditionally associated with sourcing and fulfillment.
          </motion.p>
        </div>
      </section>

      {/* ───────────────── OUR APPROACH ───────────────── */}
      <section ref={story.ref} className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, x: -60 }}
            animate={story.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Approach
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={story.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            We operate with a focus on:
          </motion.p>

          <motion.ul
            className="space-y-3 text-gray-600 text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={story.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {[
              "Structured sourcing processes",
              "Transparent coordination mechanisms",
              "Operational efficiency",
              "Responsible data handling",
              "Scalable platform architecture",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#0097B2" }}
                />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="text-gray-600 text-base md:text-lg leading-relaxed mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={story.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Our systems are designed to support both emerging sellers and
            established e-commerce operators seeking consistent and dependable
            supply channels.
          </motion.p>
        </div>
      </section>

      {/* ───────────────── PILLARS ───────────────── */}
      <section ref={pillars.ref} className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Verified Infrastructure",
              text: "We onboard only vetted suppliers and warehouses to ensure consistent dispatch timelines and operational stability.",
            },
            {
              title: "Structured Automation",
              text: "Our system reduces manual friction by integrating sourcing workflows with coordinated fulfillment systems.",
            },
            {
              title: "India-First Model",
              text: "By distributing inventory across multiple Indian states, we enable faster delivery and lower logistical complexity.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-sm
    transform-gpu
    transition-all duration-500 ease-out
hover:shadow-[0_0_20px_4px_rgba(126,217,87,0.18),0_0_20px_4px_rgba(0,151,178,0.18)]
    hover:-translate-y-2 bg-white"
              initial={{ opacity: 0, y: 60 }}
              animate={pillars.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#0097B2" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────── MISSION ───────────────── */}
      <section
        ref={mission.ref}
        className="bg-gray-50 py-20 px-6 md:px-12 text-center"
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={mission.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={mission.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.3,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          To streamline product sourcing through a reliable, technology-driven
          platform that enhances operational efficiency and enables sustainable
          business growth.
        </motion.p>
      </section>

      {/* ───────────────── VISION ───────────────── */}
      <section
        ref={vision.ref}
        className="bg-gray-100 py-20 px-6 md:px-12 text-center"
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={vision.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Vision
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={vision.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.3,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          To become a trusted sourcing infrastructure partner for e-commerce
          businesses across India, fostering innovation, reliability, and
          long-term value creation.
        </motion.p>
      </section>
    </div>
  );
};

export default AboutPage;
