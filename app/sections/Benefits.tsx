"use client";

import React from "react";
import Image from "next/image";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Updated benefits data with images instead of icons
const benefitsData = [
  {
    title: "Increased Traffic",
    description:
      "Intelli's automation boosts your site's visibility and attracts more visitors.",
    icon: "/Increased traffic.png",
  },
  {
    title: "Better SEO",
    description:
      "Daily content enhances keyword rankings and improves search performance.",
    icon: "/Better SEO.png",
  },
  {
    title: "Higher Engagement",
    description:
      "Consistent posts keep users coming back for more.",
    icon: "/higher management.png",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full bg-[#1B1337] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <Container>
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center">
          <h2 className="
            text-2xl font-bold text-white 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl
            xl:text-[3.5rem] xl:leading-[1.1]
            px-2
          ">
            Key Benefits of Our{" "}
            <span className="
              bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] 
              bg-clip-text text-transparent font-bold
            ">
              AI SEO Tools
            </span>
          </h2>
          <p className="
            mx-auto mt-3 sm:mt-4 
            text-sm text-gray-400 
            sm:text-base 
            lg:text-lg 
            max-w-full 
            sm:max-w-lg 
            md:max-w-xl 
            lg:max-w-2xl
            px-4 sm:px-2
          ">
            Generate high-ranking content, analyze SEO performance, and publish directly to your WordPress site effortlessly.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="
          grid grid-cols-1 gap-6 
          sm:grid-cols-2 sm:gap-6 
          lg:grid-cols-3 lg:gap-8
          max-w-full
          sm:max-w-2xl 
          lg:max-w-none
          mx-auto
        ">
          {benefitsData.map((card, index) => (
            <div
              key={index}
              className="
                group relative h-full 
                rounded-xl sm:rounded-2xl 
                transition-all duration-300 
                hover:-translate-y-2 
                hover:shadow-2xl hover:shadow-purple-500/20
              "
            >
              {/* Gradient Border */}
              <div
                className="relative h-full w-full"
                style={{
                  padding: "1px",
                  borderRadius: "inherit",
                  background: "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
                }}
              >
                {/* Hover Glow */}
                <div className="
                  absolute -inset-1 
                  rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-1px)]
                  bg-purple-600/20 
                  blur-xl sm:blur-2xl lg:blur-3xl 
                  opacity-0 
                  transition-opacity duration-500 
                  group-hover:opacity-100
                  hidden sm:block
                " />

                {/* Card Content */}
                <div
                  className="
                    relative flex h-full flex-col 
                    items-start justify-center 
                    rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-1px)] 
                    p-5 sm:p-6 md:p-8
                    transition-all duration-300
                    group-hover:bg-gradient-to-br 
                    group-hover:from-[#3d1c7c] 
                    group-hover:via-[#5a2575] 
                    group-hover:to-[#6a4252]
                  "
                  style={{
                    background: "linear-gradient(88.82deg, #381B76 -2.9%, #582270 48.02%, #5A3C4B 101.73%)",
                  }}
                >
                  {/* Image Icon */}
                  <div className="
                    mb-4 sm:mb-5 md:mb-6 
                    flex h-10 w-10 sm:h-12 sm:w-12 
                    items-center justify-center 
                    rounded-lg backdrop-blur-sm
                    bg-white/5
                    p-2
                  ">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="object-contain h-full w-full"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="
                    mb-2 sm:mb-3 
                    text-lg font-bold text-white 
                    sm:text-xl 
                    md:text-2xl
                  ">
                    {card.title}
                  </h3>
                  <p className="
                    text-xs leading-relaxed text-white/90 
                    sm:text-sm 
                    md:text-base
                    lg:leading-relaxed
                  ">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}