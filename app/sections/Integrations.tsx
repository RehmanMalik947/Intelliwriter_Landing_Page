"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Updated with your actual image names
const integrationsData = [
  { name: "Google Analytics", src: "/google_analytics-official.svg.png" },
  { name: "WooCommerce", src: "/logo-woocommerce.svg.png" },
  { name: "Polylang", src: "/Polylang logo.png" },
  { name: "WPML", src: "/logo-wpml.svg.png" },
  { name: "Higher Management", src: "/higher management.png" },
  { name: "Permalink Manager", src: "/logo-permalink-manager-pro.svg.png" },
  { name: "The Events Calendar", src: "/event calendar.png" },
  { name: "Admin Columns", src: "/admincolumn.png" },
  { name: "Clip path group", src: "/Clip path group.png" },
  { name: "ACF", src: "/Advanced Custom Fields logo.png" },
  { name: "Permalink Manager Pro", src: "/logo-permalink-manager-pro.svg.png" },
  { name: "WPML Pro", src: "/logo-wpml.svg.png" },
];

export default function Integrations() {
  return (
    <section
      className="relative w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16"
      style={{
        background: "radial-gradient(50% 50% at 50% 0%, #81079D 0%, #0F062C 100%)",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5 sm:opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff22 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff22 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <Container>
        {/* --- HEADER --- */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
          <span className="mb-2 sm:mb-3 block text-xs sm:text-sm font-bold uppercase tracking-wider text-white opacity-70">
            Integrations
          </span>
          <h2 className="mb-2 sm:mb-3 md:mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-0">
            Works smoothly with popular <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent font-bold">
              WordPress plugins and external apps.
            </span>
          </h2>
          <p className="mx-auto mt-1 sm:mt-2 text-sm text-gray-300 opacity-90 sm:text-base lg:text-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl px-4 sm:px-2">
            SEOPress integrates seamlessly with popular page builders,
            e-commerce, translation, performance and analytics tools.
          </p>
        </div>

        {/* --- LOGO GRID --- */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-3 lg:grid-cols-6 lg:gap-4 xl:gap-5 max-w-full mx-auto">
          {integrationsData.map((logo, index) => (
            <div
              key={index}
              className="group relative flex h-14 sm:h-16 md:h-20 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 lg:p-5 shadow-md sm:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 hover:bg-white overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-6 w-full sm:h-8 md:h-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-center">
          <button
            className="group flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95 w-full sm:w-auto"
            style={{
              background: "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
            }}
          >
            See all the integrations
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </Container>
    </section>
  );
}
