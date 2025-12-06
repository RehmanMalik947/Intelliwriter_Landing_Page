"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1337] pt-12 pb-6 border-t border-white/5">
      <div
        className="
          w-full mx-auto 
          px-6 lg:px-16 xl:px-28 2xl:px-40 3xl:px-56
        "
        style={{ maxWidth: "1490px" }}
      >
        {/* TOP GRID SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 mb-12">

          {/* COLUMN 1: BRANDING */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:pr-12">
            <Link href="/" className="inline-block">
              <div className="flex flex-col leading-none">
                <img
                  src="/intelli_logo.png"
                  alt="Intelliwriter Logo"
                  className="h-12 w-36 mb-1"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Intelliwriter is an AI-powered tool crafted to streamline and elevate your writing
              experience. Whether you're a content creator, marketer, student, or business owner,
              Intelliwriter is designed to transform and enhance your content creation process.
            </p>

            <div className="flex items-center gap-3 mt-1">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-[#131625] text-gray-400 transition-colors hover:bg-[#D946EF] hover:text-white"
                >
                  <Icon size={16} fill="currentColor" strokeWidth={0} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: GENERAL */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white">General</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">APIs</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: FEATURES */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-lg font-bold text-white">Features</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">AI Humanizer</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Social Content</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Blog Content</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Website Content</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Marketing Content</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Image Generator</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Voice Generator</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Text Generator</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Chatting</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: IMPORTANT LINKS */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white">Important Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Ada Compliance</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Become an affiliate</Link></li>
              <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Free AI tools</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-sm text-gray-500">
            <span className="text-[#D946EF] font-semibold">Intelliwriter.io</span> © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
