"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

export default function HowItWorks() {
    return (
        <section className="relative w-full bg-[#1B1337] py-6 md:py-8 lg:py-10 font-sans">
            <Container>
                {/* --- SECTION HEADER --- */}
                <div className="mb-6 md:mb-8 lg:mb-10 text-center">
                    <h2 className="
                        text-2xl font-bold text-white 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-5xl
                        xl:text-[3.5rem] xl:leading-[1.1]
                        font-sans
                    ">
                        How Does it <span className="text-[#D946EF]">Works</span>
                    </h2>
                    <p className="
                        mx-auto mt-2 md:mt-3 
                        text-sm text-gray-400 
                        sm:text-base 
                        lg:text-lg 
                        max-w-full 
                        sm:max-w-lg 
                        md:max-w-xl 
                        lg:max-w-2xl
                        px-4 sm:px-0
                        font-sans
                    ">
                        Writing content that ranks is hard. Content AI takes all the hassle out of
                        writing. It ensures that the content you write is not only great for your visitors
                        but also for search engines.
                    </p>
                </div>

                {/* --- MAIN CONTAINER WITH GRADIENT BORDER --- */}
                <div
                    className="
                        relative mx-auto 
                        rounded-2xl sm:rounded-[24px] lg:rounded-[32px]
                        p-[1px] sm:p-[1.23px]
                        w-full 
                        max-w-full 
                        lg:max-w-[1192px]
                        font-sans
                    "
                    style={{
                        background: "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
                        boxShadow: "0px 14.19px 40.55px 0px #BFAAFF40"
                    }}
                >
                    <div className="
                        relative h-full w-full overflow-hidden 
                        rounded-[calc(2rem-1px)] sm:rounded-[calc(24px-1px)] lg:rounded-[30px]
                        bg-[#1B1337] 
                        p-4 sm:p-6 lg:p-8 xl:p-10
                        font-sans
                    ">
                        <div className="
                            grid gap-2 sm:gap-3 lg:gap-4 
                            lg:grid-cols-12 
                            h-full
                            font-sans
                        ">
                            {/* --- LEFT COLUMN --- */}
                            <div className="
                                flex flex-col gap-2 sm:gap-3 lg:gap-4 
                                lg:col-span-4 
                                h-full
                                font-sans
                            ">
                                {/* Card 1 */}
                                <div className="
                                    w-full 
                                    h-auto min-h-[110px]
                                    sm:h-[120px] 
                                    rounded-lg sm:rounded-[8px] 
                                    bg-[#3B82F6] 
                                    px-4 sm:px-5 lg:px-[25px] 
                                    py-2 sm:py-3 
                                    text-white shadow-lg 
                                    transition-transform hover:scale-[1.02] 
                                    flex flex-col justify-center
                                    space-y-1 sm:space-y-2
                                    font-sans
                                ">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-sans">
                                        Simplified User Experience
                                    </h3>
                                    <p className="text-xs sm:text-xs leading-relaxed opacity-90 line-clamp-3 font-sans">
                                        Access free blog images, generate custom visuals, and publish or schedule directly to WordPress in one click.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="
                                    w-full 
                                    h-auto min-h-[110px]
                                    sm:h-[120px] 
                                    rounded-lg sm:rounded-[8px] 
                                    bg-[#10B981] 
                                    px-4 sm:px-5 lg:px-[25px] 
                                    py-2 sm:py-3 
                                    ml-0 lg:ml-4
                                    text-white shadow-lg 
                                    transition-transform hover:scale-[1.02] 
                                    flex flex-col justify-center
                                    space-y-1 sm:space-y-2
                                    font-sans
                                ">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-sans">
                                        SEO-Optimized Content
                                    </h3>
                                    <p className="text-xs sm:text-xs leading-relaxed opacity-90 line-clamp-3 font-sans">
                                        Generate high-quality blog posts that are built to rank—fast, relevant, and keyword-rich.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="
                                    w-full 
                                    h-auto min-h-[110px]
                                    sm:h-[120px] 
                                    rounded-lg sm:rounded-[8px] 
                                    bg-[#EC4899] 
                                    px-4 sm:px-5 lg:px-[25px] 
                                    py-2 sm:py-3 
                                    text-white shadow-lg 
                                    transition-transform hover:scale-[1.02] 
                                    flex flex-col justify-center
                                    space-y-1 sm:space-y-2
                                    font-sans
                                ">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-sans">
                                        Real-Time Content Analysis & SEO Scoring
                                    </h3>
                                    <p className="text-xs sm:text-xs leading-relaxed opacity-90 line-clamp-3 font-sans">
                                        Optimize as you write with instant feedback on content, keyword usage, and overall SEO score.
                                    </p>
                                </div>

                                {/* CTA Button Centered */}
                                <div className="mt-3 md:mt-4 flex justify-center">
                                    <button
                                        className="
                                            flex items-center justify-center gap-2 
                                            rounded-lg 
                                            bg-[#6B41FF] 
                                            py-3 sm:py-4 
                                            px-6 sm:px-8 
                                            text-sm sm:text-base 
                                            font-bold text-white 
                                            shadow-lg 
                                            transition-all hover:opacity-90 
                                            hover:scale-[1.02]
                                            active:scale-95
                                            w-auto
                                        "
                                    >
                                        EXPLORE AI SEO NOW
                                        <ArrowRight size={16} className="flex-shrink-0" />
                                    </button>
                                </div>

                            </div>

                            {/* --- RIGHT COLUMN --- */}
                            <div className="
                                relative flex flex-col items-center justify-center 
                                lg:col-span-8 
                                h-full
                                mt-2 lg:mt-0
                                font-sans
                            ">
                                {/* Image Container */}
                                <div className="
                                    relative w-full h-full 
                                    min-h-[300px] 
                                    sm:min-h-[350px]
                                    md:min-h-[400px]
                                    lg:min-h-[420px]
                                    bg-[#1B1337] 
                                    p-1 
                                    shadow-2xl backdrop-blur-sm
                                    font-sans
                                ">
                                    <div className="relative overflow-hidden rounded-lg p-1 h-full w-full font-sans">
                                        <Image
                                            src="/howItWorks.png"
                                            alt="How it works UI"
                                            width={850}
                                            height={600}
                                            className="object-contain w-full h-full font-sans"
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
