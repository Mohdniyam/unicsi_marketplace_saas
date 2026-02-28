"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto px-10 py-16">
      {/* ── Header ── */}
      <div className="text-center mb-12">
        {/* Eyebrow */}
        <p className="text-[#5a6478] text-sm tracking-widest mb-3">
          Contact With Us
        </p>
        {/* Gradient underline bar */}
        <div className="w-10 h-[3px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] mx-auto mb-5" />
        {/* Heading */}
        <h2
          className="text-[#1a2340] font-extrabold leading-tight"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
          }}
        >
          Feel free to write our
          <br />
          team anytime
        </h2>
      </div>

      {/* ── Form ── */}
      <div className="max-w-[900px] mx-auto flex flex-col gap-6">
        {/* Row 1 — First Name / Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-[#eef0f4] text-[#1a2340] placeholder-[#8a95a8] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#0097b2] transition-all"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-[#eef0f4] text-[#1a2340] placeholder-[#8a95a8] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#0097b2] transition-all"
          />
        </div>

        {/* Row 2 — Mobile / Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full bg-[#eef0f4] text-[#1a2340] placeholder-[#8a95a8] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#0097b2] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#eef0f4] text-[#1a2340] placeholder-[#8a95a8] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#0097b2] transition-all"
          />
        </div>

        {/* Row 3 — Message */}
        <textarea
          name="message"
          placeholder="Write a Message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#eef0f4] text-[#1a2340] placeholder-[#8a95a8] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-[#0097b2] transition-all resize-y"
        />

        {/* Row 4 — Submit button centered */}
        <div className="flex justify-center pt-2">
          <button
            className="my-button text-white px-4 sm:px-6 py-2 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer"
            onClick={handleSubmit}
          >
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

/*
  ─────────────────────────────────────────────
  USAGE:
    import ContactForm from "@/components/ContactForm";
    <ContactForm />

  BRAND COLOURS:
    --gradient: linear-gradient(to right, #0097b2, #7ed957)
    Heading:    #1a2340
    Text:       #5a6478
    Input bg:   #eef0f4
    Placeholder:#8a95a8

  BUTTON:
    Uses .my-button class with gradient background.
    Hover reverses gradient direction via ::before overlay.
    Extend onClick handler for form submission logic.
  ─────────────────────────────────────────────
*/
