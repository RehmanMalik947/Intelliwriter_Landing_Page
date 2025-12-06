// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Uncomment this once you create the Footer file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intelliwriter | AI for Wordpress",
  description: "Generate high-ranking content, analyze SEO performance, and publish directly to your WordPress site effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        Global Styles:
        - bg-[#0B0F19]: The deep dark blue background from your design.
        - text-white: Sets default text color to white.
      */}
      <body className={`${inter.className} bg-[#0B0F19] text-white antialiased`}>

        {/* Navbar sits at the top of the layout */}
        <Navbar />

        {/* This renders the content of page.tsx */}
        {children}

        {/* Footer sits at the bottom of the layout */}
        <Footer />
      </body>
    </html>
  );
}