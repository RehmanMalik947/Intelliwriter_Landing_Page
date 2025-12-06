"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Search } from "lucide-react";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative flex w-full items-center overflow-hidden bg-[#0F062C] py-4 md:py-8 lg:py-10"
    >
      {/* Background Visuals */}
      <div
        className="absolute inset-0 z-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff33 1px, transparent 1px), linear-gradient(90deg, #ffffff33 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div 
        className="absolute top-[10%] -left-[80px] md:top-[15%] md:-left-[120px] h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full opacity-25 md:opacity-35 blur-[15px] md:blur-[20px] pointer-events-none"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, #7E22CE 0deg, #EC4899 180deg, #7E22CE 360deg)"
        }}
      />

      <div 
        className="absolute top-[45%] -right-[80px] md:top-[35%] md:-right-[120px] lg:top-[35%] lg:-right-[150px] h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-full opacity-25 md:opacity-35 blur-[15px] md:blur-[20px] pointer-events-none"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, #7E22CE 0deg, #EC4899 180deg, #7E22CE 360deg)"
        }}
      />

      <div className="absolute -left-4 top-[5%] md:-left-8 md:top-[10%] z-0 opacity-[0.01] pointer-events-none rotate-[-15deg] hidden md:block">
        <Search size={200} className="text-white md:w-[300px] lg:w-[400px]" strokeWidth={1.5} />
      </div>

      {/* Main Content */}
      <Container>
        <div className="relative z-10 w-full grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-8 h-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center text-left w-full gap-3 md:gap-4 lg:gap-5 order-2 lg:order-1 h-full py-4 lg:py-8">
            <div className="group flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#1e1a3a]/80 px-3 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-md transition-all hover:border-purple-400 w-fit">
              <Sparkles size={10} className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
                New: Auto-Optimize Content
              </span>
              <ArrowRight size={10} className="text-purple-400 transition-transform group-hover:translate-x-1" />
            </div>

            <h1 className="text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl md:leading-[1.15] lg:text-4xl xl:text-5xl mt-2">
              AI for Wordpress <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                Seo Article
              </span>{" "}
              in One Click
            </h1>

            <p className="w-full text-sm text-gray-400 leading-relaxed font-light sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:max-w-[95%] mt-3 md:mt-4">
              Intelliwriter helps you get ranked higher by making your website 
              SEO-friendly and your content worthy of featured Position. 
              Intelliwriter gives you a competitive edge. Our AI-powered platform 
              generates optimized content that ranks better and engages your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto mt-4 md:mt-5">
              <button className="group flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:scale-105 hover:shadow-purple-500/40 active:scale-95 w-full sm:w-auto"
                style={{ background: "linear-gradient(90deg, #6322C6 0%, #F472B6 100%)" }}
              >
                BUY PRO VERSION
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="rounded-lg border border-gray-600 px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex items-center justify-center w-full h-full order-1 lg:order-2">
            {/* Gradient Border Wrapper */}
            <div className="relative w-full h-[280px] sm:h-[330px] md:h-[380px] lg:h-[335px] xl:h-[400px] max-w-[600px] lg:max-w-none mx-auto rounded-xl p-[3px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] flex items-center justify-center">
              
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#0B0F19] shadow-xl">
                <Image
                  src="/AIForWordPress.svg"
                  alt="Intelliwriter Dashboard Interface"
                  width={800}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
