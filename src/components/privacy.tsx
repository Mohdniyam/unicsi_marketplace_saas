"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Shield, ChevronRight } from "lucide-react";

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
   Section Wrapper with animation
───────────────────────────────────────────── */
function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section heading component
───────────────────────────────────────────── */
function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #0097B2, #7ed957)" }}
      >
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Bullet List
───────────────────────────────────────────── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
        >
          <ChevronRight
            className="mt-0.5 flex-shrink-0"
            size={16}
            style={{ color: "#0097B2" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const PrivacyPolicy = () => {
  const hero = useInView(0.3);

  return (
    <div className="w-full bg-white">
      {/* ── HERO ── */}
      <section
        ref={hero.ref}
        className="relative overflow-hidden min-h-[42vh] flex items-center justify-center px-6 md:px-12 text-center"
      >
        {/* gradient background blob */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, #7ed957 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #0097B2 0%, transparent 60%)",
          }}
        />
        {/* decorative top bar */}
        {/* <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #7ed957, #0097B2)" }}
        /> */}

        <div className="relative max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={hero.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-5"
            style={{ background: "linear-gradient(135deg, #0097B2, #7ed957)" }}
          >
            <Shield size={14} />
            Legal Document
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Privacy{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0097B2, #7ed957)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Policy
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-500 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={hero.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Last Updated:{" "}
            <span className="font-semibold text-gray-700">
              24th February, 2026
            </span>
          </motion.p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-12">
        {/* 1. Introduction */}
        <AnimatedSection>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <SectionHeading number="1" title="Introduction" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Unicsi Private Limited</strong>, a company incorporated
              under the Companies Act, 2013, having its registered office at:
            </p>
            <div className="mt-4 flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <MapPin
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#0097B2" }}
              />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Ward No. 2 Lohadanda, Dandadih Jainagar,
                <br />
                Jainagar (Koderma), Koderma,
                <br />
                Jainagar, Jharkhand, India – 825109
              </p>
            </div>
            <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              (hereinafter referred to as "Unicsi", "Company", "We", "Us", or
              "Our") operates the Unicsi web application, website, and related
              services (collectively referred to as the "Platform").
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              We are committed to protecting the privacy of users accessing or
              using our Platform. By using the Platform, you agree to the terms
              of this Privacy Policy.
            </p>
          </div>
        </AnimatedSection>

        {/* 2. Information We Collect */}
        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <SectionHeading number="2" title="Information We Collect" />
            <p className="text-gray-600 text-sm md:text-base mb-5">
              We collect information in the following categories:
            </p>

            {/* Sub A */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-1 flex items-center gap-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded text-white"
                  style={{ background: "#0097B2" }}
                >
                  A
                </span>
                Information Provided by Users
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 mb-2">
                When you register or use the Platform, we may collect:
              </p>
              <BulletList
                items={[
                  "Full Name",
                  "Business Name",
                  "Email Address",
                  "Mobile Number",
                  "Business Address",
                  "GST details (if applicable)",
                  "Bank account details (for payouts/refunds)",
                  "Customer details uploaded by sellers for order fulfillment",
                  "Supplier information (for sourcing and coordination)",
                ]}
              />
              <p className="mt-4 text-gray-500 text-sm italic">
                If you upload customer data for order processing, you confirm
                that you have obtained lawful consent from such customers.
              </p>
            </div>

            {/* Sub B */}
            <div>
              <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-1 flex items-center gap-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded text-white"
                  style={{ background: "#7ed957" }}
                >
                  B
                </span>
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 mb-2">
                When accessing the Platform, we may automatically collect:
              </p>
              <BulletList
                items={[
                  "IP address",
                  "Device type",
                  "Browser type",
                  "Usage activity",
                  "Session duration",
                  "Log information",
                ]}
              />
              <p className="mt-4 text-gray-500 text-sm">
                This information helps us improve performance and user
                experience.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Use of Information */}
        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <SectionHeading number="3" title="Use of Information" />
            <p className="text-gray-600 text-sm md:text-base mb-3">
              We use collected information for:
            </p>
            <BulletList
              items={[
                "Account verification",
                "Order processing and fulfillment",
                "Product sourcing operations",
                "Payment processing and refunds",
                "Customer support",
                "Marketing communications (SMS, Email, WhatsApp)",
                "Running advertisements and targeted marketing",
                "Platform improvement and analytics",
                "Compliance with legal requirements",
              ]}
            />
            <p className="mt-5 text-gray-500 text-sm">
              You may opt out of marketing communications at any time.
            </p>
          </div>
        </AnimatedSection>

        {/* 4. Sharing of Information */}
        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <SectionHeading number="4" title="Sharing of Information" />
            <p className="text-gray-600 text-sm md:text-base mb-3">
              We may share your information with:
            </p>
            <BulletList
              items={[
                "Logistics partners",
                "Payment gateway providers",
                "Technology and hosting providers",
                "Marketing and advertising partners",
                "Government authorities when required by law",
              ]}
            />
            <p className="mt-5 text-gray-700 text-sm md:text-base font-medium">
              We do not sell personal data to third parties.
            </p>
          </div>
        </AnimatedSection>

        {/* 5–6 side by side on md+ */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 5. Payment Processing */}
          <AnimatedSection delay={0.05} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="5" title="Payment Processing" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                All payments are processed through secure third-party payment
                gateways.
              </p>
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                Unicsi does not store debit/credit card information.
              </p>
            </div>
          </AnimatedSection>

          {/* 6. Cookies */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="6" title="Cookies" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We use cookies and similar technologies to enhance user
                experience and analyze traffic.
              </p>
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                You may disable cookies via browser settings; however, some
                features may not function properly.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* 7. Data Retention */}
        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <SectionHeading number="7" title="Data Retention" />
            <p className="text-gray-600 text-sm md:text-base mb-3">
              We retain user information:
            </p>
            <BulletList
              items={[
                "As long as your account remains active",
                "As required for legal or compliance purposes",
                "For resolving disputes or fraud prevention",
              ]}
            />
            <p className="mt-5 text-gray-600 text-sm md:text-base">
              Users may request account deletion by contacting us at:
            </p>
            <a
              href="mailto:privacy@unicsi.com"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: "#0097B2" }}
            >
              <Mail size={15} />
              privacy@unicsi.com
            </a>
          </div>
        </AnimatedSection>

        {/* 8–9 side by side on md+ */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 8. Data Security */}
          <AnimatedSection delay={0.05} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="8" title="Data Security" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We implement reasonable technical and organizational measures to
                protect user information in compliance with applicable Indian
                laws.
              </p>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                However, no digital system is completely secure, and users
                acknowledge associated risks.
              </p>
            </div>
          </AnimatedSection>

          {/* 9. User Rights */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="9" title="User Rights" />
              <p className="text-gray-600 text-sm md:text-base mb-3">
                Users may:
              </p>
              <BulletList
                items={[
                  "Request access to their data",
                  "Request correction of inaccurate data",
                  "Request deletion of their data",
                ]}
              />
              <p className="mt-4 text-gray-600 text-sm">
                Requests may be submitted via:
              </p>
              <a
                href="mailto:privacy@unicsi.com"
                className="mt-1 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
                style={{ color: "#0097B2" }}
              >
                <Mail size={15} />
                privacy@unicsi.com
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* 10–11 side by side on md+ */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 10. Children's Policy */}
          <AnimatedSection delay={0.05} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="10" title="Children's Policy" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The Platform is not intended for individuals under 18 years of
                age.
              </p>
            </div>
          </AnimatedSection>

          {/* 11. Changes to This Policy */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 h-full">
              <SectionHeading number="11" title="Changes to This Policy" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Continued
                use of the Platform constitutes acceptance of the updated
                policy.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* 12. Contact Details */}
        <AnimatedSection delay={0.05}>
          <div
            className="rounded-2xl p-6 md:p-8 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0097B2 0%, #7ed957 100%)",
            }}
          >
            {/* decorative circle */}
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white opacity-10 pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-20 text-[#0097b2] text-sm font-bold flex-shrink-0">
                  12
                </span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Contact Details
                </h2>
              </div>

              <p className="text-white/90 text-sm md:text-base font-semibold mb-4">
                Unicsi Private Limited
              </p>

              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-white/80"
                />
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  Ward No. 2 Lohadanda, Dandadih Jainagar
                  <br />
                  Jainagar (Koderma), Jharkhand – 825109
                </p>
              </div>

              <a
                href="mailto:privacy@unicsi.com"
                className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-white hover:text-white/75 transition-colors"
              >
                <Mail size={16} />
                privacy@unicsi.com
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
