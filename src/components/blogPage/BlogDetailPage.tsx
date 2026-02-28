"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import { blogs, type BlogSection } from "@/data/blogData";

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
   Content Block Renderer
───────────────────────────────────────────── */
function ContentBlock({ block }: { block: BlogSection }) {
  const { ref, isInView } = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {block.type === "paragraph" && (
        <p className="text-gray-600 text-base md:text-[17px] leading-relaxed md:leading-8 mb-6">
          {block.text}
        </p>
      )}

      {block.type === "heading" && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      )}

      {block.type === "subheading" && (
        <h3
          className="text-base md:text-lg font-semibold mt-6 mb-3"
          style={{ color: "#0097B2" }}
        >
          {block.text}
        </h3>
      )}

      {block.type === "bullets" && block.items && (
        <ul className="space-y-3 mb-6 mt-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
            >
              <ChevronRight
                size={16}
                className="mt-1 flex-shrink-0"
                style={{ color: "#0097B2" }}
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {block.type === "highlight" && (
        <div
          className="relative my-8 p-5 md:p-6 rounded-2xl border-l-4 bg-gradient-to-r"
          style={{
            borderLeftColor: "#0097B2",
            background:
              "linear-gradient(135deg, rgba(0,151,178,0.06) 0%, rgba(126,217,87,0.06) 100%)",
          }}
        >
          <p className="text-gray-700 text-sm md:text-base leading-relaxed italic font-medium">
            {block.text}
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Related Card
───────────────────────────────────────────── */
function RelatedCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400 bg-white hover:-translate-y-1">
        <div className="relative h-40 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-5">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: "#0097B2" }}
          >
            {blog.category}
          </span>
          <h4 className="mt-3 text-sm font-bold text-gray-900 leading-snug group-hover:text-[#0097B2] transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h4>
          <p className="mt-1 text-xs text-gray-400 flex items-center gap-1">
            <Clock size={10} /> {blog.readTime}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Main Blog Detail Page
───────────────────────────────────────────── */
const BlogDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const heroRef = useRef<HTMLDivElement>(null);
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setHeroInView(true);
        }),
      { threshold: 0.2 },
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          This article doesn't exist or may have been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, #0097B2, #7ed957)" }}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Cover image full width */}
        <div className="relative h-64 md:h-120 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* top accent bar */}
          {/* <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, #0097B2, #7ed957)" }}
          /> */}

          {/* Back link */}
          <div className="absolute top-6 left-6 md:left-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 text-sm font-medium hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft size={14} /> All Articles
            </Link>
          </div>

          {/* Category pill */}
          <div className="absolute bottom-6 left-6 md:left-12">
            <span
              className="text-xs font-semibold text-white px-3 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #0097B2, #7ed957)",
              }}
            >
              {blog.category}
            </span>
          </div>
        </div>

        {/* Title area below image */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight"
          >
            {blog.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100"
          >
            <span className="flex items-center gap-1.5">
              <User size={13} style={{ color: "#0097B2" }} />
              <span className="text-gray-600 font-medium">{blog.author}</span>
              <span className="text-gray-300">·</span>
              <span>{blog.authorRole}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} style={{ color: "#0097B2" }} />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} style={{ color: "#0097B2" }} />
              {blog.readTime}
            </span>
          </motion.div>

          {/* Excerpt lead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 text-base md:text-lg text-gray-500 leading-relaxed font-medium"
          >
            {blog.excerpt}
          </motion.p>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16">
        {blog.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </article>

      {/* ── DIVIDER ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          className="h-px w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0097B2, #7ed957, transparent)",
          }}
        />
      </div>

      {/* ── RELATED ARTICLES ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
          More Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((b) => (
            <RelatedCard key={b.id} blog={b} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #0097B2, #7ed957)" }}
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
