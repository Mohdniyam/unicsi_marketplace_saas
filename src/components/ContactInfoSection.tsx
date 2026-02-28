"use client";

import React from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface ContactInfoItem {
  text: string;
  href?: string;
}

interface ContactInfoBoxProps {
  label: string;
  items: ContactInfoItem[];
  btnText?: string;
  btnHref?: string;
  btnTarget?: "_blank" | "_self";
}

/* ─────────────────────────────────────────────
   SINGLE CARD
───────────────────────────────────────────── */
const ContactInfoBox: React.FC<ContactInfoBoxProps> = ({
  label,
  items,
  btnText = "Read More",
  btnHref = "#",
  btnTarget = "_self",
}) => {
  return (
    <div className="ova-contact-info-box">
      {/* ── Card body (grows to fill height) ── */}
      <div className="contact">
        <div className="label">{label}</div>
        <ul className="info">
          {items.map((item, i) =>
            item.href ? (
              <li className="item" key={i}>
                <a href={item.href}>{item.text}</a>
              </li>
            ) : (
              <li className="item" key={i}>
                {item.text}
              </li>
            ),
          )}
        </ul>
      </div>

      {/*
        ── Diagonal bottom bar ──
        Mirrors the PageHero breadcrumb row exactly:
          • Left 55%  = white block  + diagonal wedge
          • Right 45% = gradient strip + button label
      */}
      <div className="contact-btn">
        <div className="button-mask" />
        <a className="btn-contact" href={btnHref} target={btnTarget}>
          <span className="text">{btnText}</span>
        </a>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION  —  3 cards in a row
───────────────────────────────────────────── */
const ContactInfoSection: React.FC = () => {
  const cards: ContactInfoBoxProps[] = [
    {
      label: "About",
      items: [
        {
          text: "  Powering Modern Dropshipping with unique, high-potential Products and Scalable Fulfillment Infrastructure.",
        },
      ],
      btnText: "About Us",
      btnHref: "/about/",
      btnTarget: "_blank",
    },
    {
      label: "Contact",
      items: [
        { text: "Mon-Sat 10:00AM - 6:00PM" },
        { text: "Sunday Closed" },
        {
          text: "info@unicsi.com",
          href: "mailto:info@unicsi.com",
        },
        { text: "+91-9771622333", href: "tel:+919771622333" },
        // { text: "+91-9217639029", href: "tel:+919217639029" },
      ],
      btnText: "Contact Us",
      btnHref: "/contact/",
    },
    {
      label: "Address",
      items: [
        {
          text: "R5/130, WING B, NAWADA HOUSING COMPLEX, UTTAM NAGAR, WEST DELHI, DELHI, 110059 India",
        },
      ],
      btnText: "Get Directions",
      btnHref: "#map-section",
      btnTarget: "_self",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        /* ══════════════════════════════════════
           VARIABLES
        ══════════════════════════════════════ */
        :root {
          --gradient:      linear-gradient(to right, #0097b2, #7ed957);
          --primary:       #0097b2;
          --heading:       #1a2340;
          --text:          #5a6478;
          --light:         #dfe3ea;
          --white:         #ffffff;
          --container-max: 1920px;
          --container-pad: 40px;
        }

        /* ══════════════════════════════════════
           SECTION / CONTAINER
        ══════════════════════════════════════ */
        .contact-section {
          width: 100%;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 60px var(--container-pad);
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .contact-section .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        /* ══════════════════════════════════════
           CARD WRAPPER
           flex-column so .contact grows and
           .contact-btn always stays at the bottom
        ══════════════════════════════════════ */
        .ova-contact-info-box {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--light);
          background: var(--white);
          transition: border-color 0.35s ease;
          box-sizing: border-box;
        }

        /* ══════════════════════════════════════
           CARD BODY  — flex:1 = dynamic height
        ══════════════════════════════════════ */
        .ova-contact-info-box .contact {
          flex: 1;
          padding: 35px 48px 48px;
        }

        .ova-contact-info-box .contact .label {
          font-family: 'Montserrat', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--heading);
          margin: 0 0 14px;
          line-height: 1.2em;
        }

        .ova-contact-info-box .contact .info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ova-contact-info-box .contact .info .item {
          color: var(--text);
          font-size: 15px;
          line-height: 1.8;
        }

        .ova-contact-info-box .contact .info .item a {
          color: var(--text);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .ova-contact-info-box .contact .info .item a::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 1px;
          left: 0;
          bottom: 0;
          background: var(--primary);
          transition: width 500ms ease;
        }

        .ova-contact-info-box .contact .info .item a:hover { color: var(--primary); }
        .ova-contact-info-box .contact .info .item a:hover::before { width: 100%; }

        /* ══════════════════════════════════════
           DIAGONAL BOTTOM BAR
           ┌───────────────────╲──────────────┐
           │   white  (55%)     ╲  gradient   │
           │                     ╲  (45%)     │
           └──────────────────────────────────┘

           Same technique as PageHero breadcrumb row:
             .button-mask  = white left block
               ::before    = white wedge (clip-path polygon)
                             covers the corner → clean diagonal
               ::after     = thin skewed line (visible slash)
             .btn-contact  = gradient right block
               ::before    = gradient fill, revealed via scaleY
        ══════════════════════════════════════ */
        .ova-contact-info-box .contact-btn {
          display: flex;
          position: relative;
          overflow: hidden;
          border-right: 1px solid var(--light);
          border-bottom: 1px solid var(--light);
          flex-shrink: 0;
          transition: border-color 0.35s ease;
        }

        /* ── White left block ── */
        .ova-contact-info-box .contact-btn .button-mask {
          position: relative;
          flex: 0 0 55%;
          width: 55%;
          border-top: 1px solid var(--light);
          background: var(--white);
          transition: border-color 0.35s ease;
        }

        /* White triangle wedge — produces clean diagonal cut */
        .ova-contact-info-box .contact-btn .button-mask::before {
          content: "";
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 100%;
          width: 30px;
          height: 100%;
          background: var(--white);
          clip-path: polygon(0 0, -50% 150%, 100% 100%);
        }

        /* Thin skewed slash line (visible diagonal stroke) */
        .ova-contact-info-box .contact-btn .button-mask::after {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: 0;
          left: calc(100% + 14px);
          width: 1.2px;
          height: 101%;
          background: var(--light);
          transform: skew(30deg);
          transition: background 0.35s ease;
        }

        /* ── Gradient right block ── */
        .ova-contact-info-box .contact-btn .btn-contact {
          position: relative;
          flex: 0 0 45%;
          width: 45%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 12px 36px 12px 20px;
          margin-top: 15px;
          background: var(--light);
          text-decoration: none;
          overflow: hidden;
          box-sizing: border-box;
          transition: background 0.35s ease;
        }

        .ova-contact-info-box .contact-btn .btn-contact .text {
          position: relative;
          z-index: 2;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text);
          transition: color 0.45s ease;
          white-space: nowrap;
        }

        /* Gradient fill — scaleY reveal on hover */
        .ova-contact-info-box .contact-btn .btn-contact::before {
          content: "";
          position: absolute;
          inset: 0;
          width: calc(100% + 1px);
          background: var(--gradient);
          transform-origin: top;
          transform: scaleY(0);
          transition: transform 0.45s ease;
        }

        /* ══════════════════════════════════════
           HOVER STATE — full card
        ══════════════════════════════════════ */
        .ova-contact-info-box:hover {
          border-color: var(--primary);
        }

        .ova-contact-info-box:hover .contact-btn {
          border-right-color: var(--primary);
          border-bottom-color: var(--primary);
        }

        .ova-contact-info-box:hover .contact-btn .button-mask {
          border-top-color: var(--primary);
        }

        .ova-contact-info-box:hover .contact-btn .button-mask::after {
          background: var(--primary);
        }

        .ova-contact-info-box:hover .contact-btn .btn-contact::before {
          transform: scaleY(1);
        }

        .ova-contact-info-box:hover .contact-btn .btn-contact .text {
          color: var(--white);
        }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */
        @media (max-width: 1100px) {
          .contact-section .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .contact-section .cards-grid {
            grid-template-columns: 1fr;
          }
          .contact-section {
            padding: 40px 20px;
          }
          .ova-contact-info-box .contact {
            padding: 28px 28px 36px;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="cards-grid">
          {cards.map((card, i) => (
            <ContactInfoBox key={i} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactInfoSection;

/*
  ─────────────────────────────────────────────
  HOW THE DIAGONAL WORKS (identical to PageHero):

  .contact-btn = flex row pinned to bottom of card
    ├─ .button-mask (55%)
    │    ::before  white wedge  clip-path: polygon(0 0, -50% 150%, 100% 100%)
    │                → masks corner → clean diagonal edge
    │    ::after   1.2px line  transform: skew(30deg)
    │                → the visible slash stroke
    └─ .btn-contact (45%)
         background: var(--light) default
         ::before   gradient overlay  transform: scaleY(0→1) on hover

  Dynamic height:
    .ova-contact-info-box  { display: flex; flex-direction: column; }
    .contact               { flex: 1; }   ← grows with content
    .contact-btn           { flex-shrink: 0; } ← always at bottom

  USAGE:
    import ContactInfoSection from "@/components/ContactInfoBoxes";
    <ContactInfoSection />

  TWEAK:
    flex: 0 0 55% / 45%  → controls diagonal angle
    margin-top: 15px on .btn-contact → the downward offset of the gradient strip
    --gradient           → brand colours
  ─────────────────────────────────────────────
*/
