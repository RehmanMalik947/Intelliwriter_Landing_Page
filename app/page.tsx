// src/app/page.tsx
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Integrations from "./sections/Integrations";
import ToolsGrid from "./sections/ToolsGrid";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
// import CTA from "./sections/CTA"; // Optional: If you have a separate bottom CTA component

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section: "AI for Wordpress..." */}
       <HeroSection />
      {/* 2. How It Works: Workflow graphic steps */}
      <HowItWorks /> 

      {/* 3. Features: The zig-zag content rows */}
      <Features /> 

      {/* 4. Benefits: Traffic, SEO, Engagement cards */}
       <Benefits />

      {/* 5. Integrations: Logos (Google, Woo, etc.) */}
      <Integrations /> 

      {/* 6. Tools Grid: "All Tools for Smarter Blogging" */}
      <ToolsGrid /> 

      {/* 7. Pricing: "Choose Your Plan" */}
       <Pricing />

      {/* 8. FAQ: Accordion questions */}
       <FAQ /> 
      
      

    </main>
  );
}