"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogs } from "@/data/blogData";

/* ─────────────────────────────────────────────
   Intersection Observer Hook
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true);
        }),
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
   Category badge color map
───────────────────────────────────────────── */
const categoryColors: Record<string, string> = {
  "Getting Started": "#0097B2",
  "Product Research": "#7ed957",
  Operations: "#0097B2",
  "Brand Strategy": "#7ed957",
  Sourcing: "#0097B2",
  Marketing: "#7ed957",
};

/* ─────────────────────────────────────────────
   Featured Blog Card (first post, large)
───────────────────────────────────────────── */
function FeaturedCard({ blog }: { blog: (typeof blogs)[0] }) {
  const { ref, isInView } = useInView(0.2);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/blog/${blog.slug}`} className="group block">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
          {/* Image */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span
              className="absolute top-5 left-5 text-xs font-semibold text-white px-3 py-1.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, #0097B2, #7ed957)`,
              }}
            >
              Featured
            </span>
          </div>

          {/* Content */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{
                    backgroundColor: categoryColors[blog.category] || "#0097B2",
                  }}
                >
                  {blog.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={12} /> {blog.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#0097B2] transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs text-gray-400">{blog.date}</span>
              <span
                className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                style={{ color: "#0097B2" }}
              >
                Read Article <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Regular Blog Card
───────────────────────────────────────────── */
function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.0,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${blog.slug}`} className="group block h-full">
        <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Category badge */}
            <span
              className="absolute top-4 left-4 text-xs font-semibold text-white px-3 py-1 rounded-full"
              style={{
                backgroundColor: categoryColors[blog.category] || "#0097B2",
              }}
            >
              {blog.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Clock size={11} /> {blog.readTime}
              </span>
              <span>·</span>
              <span>{blog.date}</span>
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#0097B2] transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
              {blog.excerpt}
            </p>

            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">{blog.author}</span>
              <span
                className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-300"
                style={{ color: "#0097B2" }}
              >
                Read more <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Blog Listing Page
───────────────────────────────────────────── */
const BlogsPage = () => {
  const hero = useInView(0.3);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ── HERO ── */}
      <section
        ref={hero.ref}
        className="relative overflow-hidden py-10 md:py-12 px-6 md:px-12 text-center"
      >
        {/* bg blobs */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at 20% 60%, #7ed957 0%, transparent 55%), radial-gradient(ellipse at 80% 40%, #0097B2 0%, transparent 55%)",
          }}
        />
        {/* top bar */}
        {/* <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #0097B2, #7ed957)" }}
        /> */}

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={hero.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6"
            style={{ background: "linear-gradient(135deg, #0097B2, #7ed957)" }}
          >
            <Tag size={13} />
            Insights & Resources
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            The Unicsi{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0097B2, #7ed957)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Blog
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Practical guides, sourcing insights, and growth strategies for
            Indian dropshippers and eCommerce sellers.
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="px-6 md:px-12 pb-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #0097B2, #7ed957)",
                      color: "white",
                      borderColor: "transparent",
                    }
                  : {
                      background: "white",
                      color: "#555",
                      borderColor: "#e5e7eb",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── BLOG CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-12">
        {/* Featured */}
        {featured && <FeaturedCard blog={featured} />}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            No articles in this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
