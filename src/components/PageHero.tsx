"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  imageUrl?: string;
  align?: "left" | "center" | "right";
}

// Chevron Right SVG Icon component
const ChevronRight: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ display: "inline-block", verticalAlign: "middle", opacity: 0.75 }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const PageHero: React.FC<PageHeroProps> = ({
  title,
  breadcrumbs,
  imageUrl = "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80",
  align = "left",
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      bgRef.current.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        :root {
          --hero-gradient: linear-gradient(to right, #0097b2, #7ed957);
          --container-width: 1920px;
        }

        .wrap_header_banner-2 {
          width: 100%;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .wrap_header_banner-2 .parallax-bg {
          position: absolute;
          inset: -80px 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center 50%;
          will-change: background-position-y;
          transition: background-position-y 0.05s linear;
        }

        .wrap_header_banner-2 .cover_color {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 25, 50, 0.50);
          z-index: 1;
        }

        .wrap_header_banner-2 .header_banner_el {
          position: relative;
          z-index: 2;
          max-width: var(--container-width);
          margin: 0 auto;
        }

        .wrap_header_banner-2 .title-box {
          padding: 120px 40px 120px;
        }

        .wrap_header_banner-2 .title-box .header_title {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 36px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1em;
          color: #ffffff;
          text-align: left;
          letter-spacing: 1px;
        }

        .wrap_header_banner-2 .breadcrumb-fullwidth {
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          width: 100vw;
        }

        .wrap_header_banner-2 .header_breadcrumbs {
          display: flex;
          width: 100%;
        }

        .wrap_header_banner-2 .header_breadcrumbs .bg-breadcumb {
          flex: 0 0 70%;
          width: 70%;
          background-color: #ffffff;
          height: auto;
          position: relative;
        }

        .wrap_header_banner-2 .header_breadcrumbs .bg-breadcumb::after {
          content: "";
          width: 54px;
          height: 100%;
          display: block;
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 100%;
          background: #ffffff;
          clip-path: polygon(0 0, -50% 150%, 100% 100%);
        }

        .wrap_header_banner-2 .header_breadcrumbs #breadcrumbs {
          flex: 0 0 30%;
          width: 30%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background: var(--hero-gradient);
          margin-top: 30px;
          padding-left: 100px;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .wrap_header_banner-2 ul.breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .wrap_header_banner-2.left   ul.breadcrumb { justify-content: flex-start; }
        .wrap_header_banner-2.right  ul.breadcrumb { justify-content: flex-end; }
        .wrap_header_banner-2.center ul.breadcrumb { justify-content: center; }

        .wrap_header_banner-2 ul.breadcrumb li {
          font-size: 12px;
          line-height: 1.6;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ffffff;
        }

        .wrap_header_banner-2 ul.breadcrumb li a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: color 0.2s;
        }

        .wrap_header_banner-2 ul.breadcrumb li a:hover {
          color: #ffffff;
        }

        /* Chevron separator styling */
        .wrap_header_banner-2 ul.breadcrumb li.li_separator {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1;
        }

        @media (max-width: 1400px) {
          .wrap_header_banner-2 .header_breadcrumbs .bg-breadcumb {
            flex: 0 0 50%;
            width: 50%;
          }
          .wrap_header_banner-2 .header_breadcrumbs #breadcrumbs {
            flex: 0 0 50%;
            width: 50%;
          }
        }

        @media (max-width: 1024px) {
          .wrap_header_banner-2 .title-box {
            padding: 70px 20px 40px;
          }
          .wrap_header_banner-2 .title-box .header_title {
            font-size: 28px;
          }
          .wrap_header_banner-2 .header_breadcrumbs .bg-breadcumb {
            flex: 0 0 0%;
            width: 0%;
            overflow: hidden;
          }
          .wrap_header_banner-2 .header_breadcrumbs .bg-breadcumb::after {
            content: none;
          }
          .wrap_header_banner-2 .header_breadcrumbs #breadcrumbs {
            flex: 0 0 100%;
            width: 100%;
            margin-top: 0;
            padding-left: 20px;
          }
        }
      `}</style>

      <div className={`wrap_header_banner-2 ${align}`}>
        {/* ── Parallax background layer ── */}
        <div
          ref={bgRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Dark overlay */}
        <div className="cover_color" />

        {/* Constrained content wrapper */}
        <div className="header_banner_el">
          {/* Title */}
          <div className="title-box">
            <h1 className="header_title">{title}</h1>
          </div>

          {/* Full-width breadcrumb row */}
          <div className="breadcrumb-fullwidth">
            <div className="header_breadcrumbs">
              <div className="bg-breadcumb" />
              <div id="breadcrumbs">
                <ul className="breadcrumb">
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <React.Fragment key={crumb.href}>
                        {index > 0 && (
                          <li className="li_separator" aria-hidden="true">
                            <ChevronRight />
                          </li>
                        )}
                        <li>
                          {isLast ? (
                            <span aria-current="page">{crumb.label}</span>
                          ) : (
                            <Link href={crumb.href} title={crumb.label}>
                              {crumb.label}
                            </Link>
                          )}
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHero;

/*
  ─────────────────────────────────────────────
  USAGE:

  import PageHero from "@/components/PageHero";

  <PageHero
    title="Contact"
    breadcrumbs={[
      { label: "Home",    href: "/" },
      { label: "Contact", href: "/contact" },
    ]}
    imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80"
    align="left"
  />
  ─────────────────────────────────────────────
*/
