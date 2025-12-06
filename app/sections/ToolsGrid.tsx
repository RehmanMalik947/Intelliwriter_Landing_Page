"use client";

import React from "react";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const toolsData = [
  { icon: "💡", title: "Blog Post Idea", desc: "Get fresh ideas for engaging blog posts that resonate with your niche and audience, ensuring captivating content." },
  { icon: "📝", title: "Blog Post Outline", desc: "Structure blog posts with a clear flow, guiding readers effortlessly for better understanding and engagement." },
  { icon: "👋", title: "Blog Post Introduction", desc: "Craft attractive intros that captivate readers' interest, compelling them to explore further into your blog." },
  { icon: "🏁", title: "Blog Post Conclusion", desc: "End your blog posts with impactful summaries, reinforcing key takeaways and leaving a lasting impression." },
  { icon: "🔥", title: "Post Title", desc: "Create eye-catching headlines for articles and blogs, grabbing readers' attention and boosting engagement." },
  { icon: "🔍", title: "Topic Research", desc: "Dive deep into comprehensive reports on specific topics, uncovering trends, history, and industry players." },
  { icon: "🔎", title: "SEO Title", desc: "Optimize headlines for enhanced visibility, organic traffic, and a stronger online presence." },
  { icon: "📄", title: "SEO Description", desc: "Craft concise and persuasive summaries that captivate readers and search engines, improving click-through rates." },
  { icon: "🖊️", title: "Paragraph", desc: "Generate well-structured and informative paragraphs, seamlessly blending into your content for better readability." },
  { icon: "🔄", title: "Paragraph Rewriter", desc: "Refine paragraphs while preserving meaning, ensuring originality, and enhancing clarity." },
  { icon: "📖", title: "Sentence Expander", desc: "Transform incomplete sentences into polished expressions, adding depth and clarity to your writing." },
  { icon: "📙", title: "Text Summarizer", desc: "Condense complex texts into concise summaries, highlighting crucial points and essential information." },
  { icon: "✨", title: "Fix Grammar", desc: "Utilize AI-powered grammar correction to polish your written content, eliminating errors and improving clarity." },
];

export default function ToolsGrid() {
  return (
    <section className="w-full bg-[#1B1337] py-8 sm:py-10 md:py-12 lg:py-14">
      <Container>
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1] px-2">
            All Tools for{" "}
            <span className="bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent font-bold">
              Smarter Blogging
            </span>
          </h2>
          <p className="mx-auto mt-2 sm:mt-3 text-sm text-gray-400 sm:text-base lg:text-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4 sm:px-2">
            Generate high-ranking content, analyze SEO performance, and publish directly to your WordPress site effortlessly.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0">
          {toolsData.map((tool, index) => (
            <div key={index} className="group w-full transition-all duration-300 hover:-translate-y-1.5">
              <div
                className="relative rounded-lg sm:rounded-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 h-full"
                style={{
                  padding: "1px",
                  background: "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
                  maxWidth: "95%", // slightly narrower
                  margin: "0 auto",
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-lg sm:rounded-xl bg-purple-600/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden sm:block"
                />

                <div
                  className="relative flex flex-col rounded-[calc(1rem-1px)] sm:rounded-[calc(1.25rem-1px)] p-3 sm:p-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#3d1c7c] group-hover:via-[#5a2575] group-hover:to-[#6a4252] h-full"
                  style={{
                    background: "linear-gradient(88.82deg, #381B76 -2.9%, #582270 48.02%, #5A3C4B 101.73%)",
                    minHeight: "140px", // increased height
                  }}
                >
                  {/* Icon */}
                  <div className="mb-1 sm:mb-2 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {tool.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-base font-semibold text-white sm:text-lg md:text-lg line-clamp-1">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-purple-100/80 sm:text-sm md:text-[13px] line-clamp-3">
                    {tool.desc}
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
