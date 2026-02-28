"use client";

import React from "react";

const MapSection: React.FC = () => {
  return (
    <section
      id="map-section"
      className="w-full max-w-[1920px] mx-auto px-0 pt-4"
    >
      {/* ── Header ── */}
      {/* <div className="text-center mb-10">
        <p className="text-[#5a6478] text-sm tracking-widest mb-3">
          Find Us Here
        </p>
        <div className="w-10 h-[3px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] mx-auto mb-5" />
        <h2
          className="text-[#1a2340] font-extrabold leading-tight"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(24px, 3vw, 40px)",
          }}
        >
          Our Location
        </h2>
      </div> */}

      {/* ── Map ── */}
      <div className="w-full overflow-hidden" style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.263207044298!2d77.02724005541994!3d28.620295800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0525333fffff%3A0x6ffba5399bd1c7e7!2sNawada!5e0!3m2!1sen!2sin!4v1771757522718!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="UNICSI"
        />
      </div>
    </section>
  );
};

export default MapSection;

/*
  ─────────────────────────────────────────────
  USAGE:
    import MapSection from "@/components/MapSection";
    <MapSection />

  CUSTOMISE:
    - Change height by editing style={{ height: "500px" }}
    - Remove the header block if you want map-only
    - The iframe always fills 100% of its container width
  ─────────────────────────────────────────────
*/
