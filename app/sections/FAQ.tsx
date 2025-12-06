"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Questions data
const faqData = [
  {
    question: "What is Intelliwriter's AI Article Writer?",
    answer: "Intelliwriter's AI Article Writer is an advanced content generation tool designed to create high-quality, human-like articles in minutes. It uses state-of-the-art language models to understand your topic and generate comprehensive, engaging content."
  },
  {
    question: "Can I customize the AI-generated content?",
    answer: "Yes, absolutely! You have full control over the output. You can edit, rewrite, and format the content directly within our editor to ensure it matches your specific tone and requirements before publishing."
  },
  {
    question: "Does it generate SEO-friendly content automatically?",
    answer: "Yes. The AI is trained to structure content with proper H1, H2, and H3 tags, integrate keywords naturally, and optimize meta descriptions to help your articles rank higher on search engines."
  },
  {
    question: "Can I use my own images or only AI-generated ones?",
    answer: "You can do both! Intelliwriter can generate unique AI images tailored to your content, but you can also upload your own images and insert them directly into your articles."
  },
  {
    question: "How does WordPress publishing work?",
    answer: "It's seamless. Once you connect your WordPress account, you can publish your finished articles (including images and formatting) directly to your site with a single click."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#1B1337] py-8 sm:py-10 md:py-12 lg:py-14">
      <Container>
        {/* --- HEADER --- */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h1
            className="
              text-xl font-bold
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              xl:text-[2.5rem]
              leading-tight
            "
            style={{
              background: "linear-gradient(86.01deg, #BFAAFF 0%, #F64CFF 78%, #FFC553 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Got Questions? We've Got Answers!
          </h1>

          <p className="
            mx-auto mt-2 sm:mt-3 
            text-sm text-gray-400 
            sm:text-base 
            lg:text-lg 
            max-w-full 
            sm:max-w-lg 
            md:max-w-xl 
            lg:max-w-2xl
            px-4 sm:px-2
          ">
            We're dedicated to assisting individuals interested in generating AI-driven content and images.
          </p>
        </div>

        {/* --- ACCORDION ITEMS --- */}
        <div className="flex flex-col gap-2 sm:gap-3 max-w-4xl mx-auto px-2 sm:px-0">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-lg sm:rounded-xl
                bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                p-[1px] 
                transition-all duration-300
                hover:from-purple-500/40 hover:to-pink-500/40
                hover:shadow-lg hover:shadow-purple-500/10
              "
            >
              <div className="overflow-hidden rounded-lg sm:rounded-[15px] bg-[#111320]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex w-full items-center justify-between 
                    px-4 py-3 sm:px-5 sm:py-3 
                    text-left focus:outline-none
                    transition-colors duration-200
                    hover:bg-white/5
                    active:bg-white/10
                  "
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm font-bold text-white sm:text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <span className="ml-2 sm:ml-4 shrink-0 rounded-full bg-white/5 p-1 sm:p-1.5 transition-colors duration-200 group-hover:bg-white/10">
                    {openIndex === index ? (
                      <Minus className="text-[#D946EF] h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Plus className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`
                    px-4 sm:px-5
                    text-gray-400 
                    transition-all duration-300 ease-in-out
                    ${openIndex === index
                      ? "max-h-64 sm:max-h-72 md:max-h-80 pb-3 sm:pb-4 md:pb-5 opacity-100"
                      : "max-h-0 overflow-hidden pb-0 opacity-0"
                    }
                  `}
                >
                  <p className="leading-relaxed text-sm sm:text-base md:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Text */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center text-sm text-gray-500 sm:text-base px-4">
          <p>
            Still have questions?{" "}
            <button className="
              text-purple-400 hover:text-purple-300 
              transition-colors duration-200
              underline decoration-dotted underline-offset-4
            ">
              Contact our support team
            </button>
          </p>
        </div>
      </Container>
    </section>
  );
}
