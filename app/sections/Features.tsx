"use client";

import React from "react";
import Image from "next/image";

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

function GradientTitle({ title, highlight }: { title: string; highlight?: string[] }) {
  if (!highlight || highlight.length === 0) return <>{title}</>;

  let parts: JSX.Element[] = [];
  let remaining = title;

  highlight.forEach((word) => {
    const index = remaining.indexOf(word);
    if (index === -1) return;

    // Text before highlighted word
    if (index > 0) {
      parts.push(<span key={parts.length}>{remaining.slice(0, index)}</span>);
    }

    // Highlighted word
    parts.push(
      <span
        key={parts.length}
        className="bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent font-bold"
      >
        {word}
      </span>
    );

    // Remaining text
    remaining = remaining.slice(index + word.length);
  });

  if (remaining) parts.push(<span key={parts.length}>{remaining}</span>);

  return <>{parts}</>;
}



const featuresData = [
  {
    id: 1,
    title: "Smooth Content Creation with Real-Timen Collaboration",
    description: `Looking for an easy way to write amazing articles with your team? Check out Simplified AI Article Writer! It's easy to use, so you can start right away. Plus, you can work with your team in real time, which makes everything smoother. This tool is perfect for anyone — whether you're on your own, in a small team, or part of a big business. It helps you write engaging articles that grab people's attention and get results. Let’s make something awesome together!`,
    image: "/AIForWordPress.png",
     highlight: ["Content Creation"],
    alignment: "left",
  },
  {
    id: 2,
    title: "Write Content with Precision and Personality",
    description: `Dive into the future of content creation with AI Article Writer!
Tailor your voice and style smoothly to match your brand’s
personality. Keep your SEO on point by integrating relevant
keywords smoothly into your articles. Speak to a global
audience with support for multiple languages and refine
existing content with our smart paraphrasing feature. It's
time to enhance your writing experience and connect more
effectively with your readers!`,
    image: "/ai-article-writer-5.png",
    highlight: ["Precision", "Personality"],
    alignment: "right",
  },
  {
    id: 3,
    title: "Smooth Content Creation with Real-Timen Collaboration",
    description: `Looking for an easy way to write amazing articles with your team? Check out Simplified AI Article Writer! It's easy to use, so you can start right away. Plus, you can work with your team in real time, which makes everything smoother. This tool is perfect for anyone — whether you're on your own, in a small team, or part of a big business. It helps you write engaging articles that grab people's attention and get results.`,
    image: "/AIForWordPress.png",
    highlight: ["Content Creation"],
      alignment: "left",
  },
  {
    id: 4,
    title: "Write Content with Precision and Personality",
    description: `Dive into the future of content creation with AI Article Writer! Tailor your voice and style smoothly to match your brand’s personality. Keep your SEO on point by integrating relevant keywords smoothly into your articles. Speak to a global audience and refine existing content with our smart paraphrasing feature. Explore the depths of Natural Language Processing. Discover how AI interprets and generates human language.`,
    image: "/ai-article-writer-4.png",
     highlight: ["Precision", "Personality"],
    alignment: "right",
  },
  {
    id: 5,
    title: "Smooth Content Creation with Real-Timen Collaboration",
    description: `Looking for an easy way to write amazing articles with your team? Check out Simplified AI Article Writer! It's easy to use, so you can start right away. Plus, you can work with your team in real time, which makes everything smoother. This tool is perfect for anyone — whether you're on your own, in a small team, or part of a big business. It helps you write engaging articles that grab people's attention and get results.`,
    image: "/AIForWordPress.png",
      highlight: ["Content Creation"],
    alignment: "left",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-[#1B1337] py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 overflow-hidden font-inter">
      <Container>
        {/* --- SECTION HEADER --- */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
          <h2 className="
            text-2xl font-bold text-white 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl
            xl:text-[3.5rem] xl:leading-[1.1]
            px-2
          ">
            Content AI is packed with{" "}
            <span className="
              bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] 
              bg-clip-text text-transparent font-bold
            ">
              Powerful Features
            </span>
          </h2>
          <p className="
            mx-auto mt-2 sm:mt-3 
            text-sm text-gray-400 
            sm:text-sm 
            lg:text-base 
            max-w-full 
            sm:max-w-lg 
            md:max-w-xl 
            lg:max-w-2xl
            px-4 sm:px-2
          ">
            Generate high-ranking content, analyze SEO performance, and publish directly to your
            WordPress site effortlessly.
          </p>
        </div>

        {/* --- FEATURES LOOP --- */}
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`
                flex flex-col lg:flex-row items-stretch gap-4
                ${feature.alignment === "right" ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* --- IMAGE SIDE --- */}
              <div className="relative w-[50%] h-[330px] ">
                {/* <div className="
                  absolute -inset-2 sm:-inset-3 md:-inset-4 
                  rounded-xl 
                  bg-[#1B1337] 
                  blur-xl sm:blur-2xl md:blur-3xl 
                  opacity-0 transition-opacity duration-500 
                  group-hover:opacity-100 
                  hidden sm:block
                " /> */}
                <div className="relative overflow-hidden  rounded-lg sm:rounded-xl bg-[#1B1337] shadow-lg sm:shadow-xl md:shadow-2xl transition-transform duration-500 hover:scale-[1.01] w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    priority={feature.id === 1}
                  />
                </div>
              </div>

              {/* --- TEXT SIDE --- */}
              <div className="flex-1 flex flex-col text-left aspect-square px-2 sm:px-0 w-[400px] h-[400px] mx-25">
               <h3 className="mb-2 sm:mb-3 md:mb-4 text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl lg:text-3xl">
  <GradientTitle title={feature.title} highlight={feature.highlight} />
</h3>

                <p className="text-xs sm:text-sm md:text-sm  lg:text-base leading-loose text-gray-400 overflow-hidden ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
