"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // This will be your consistent max-width for ALL sections
  const maxWidth = "max-w-[1490px]";

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all"
      style={{
        height: "97px",
        background: "linear-gradient(90deg, #401771 0%, #321B59 100%)",
        boxShadow: "0px 8px 16px 0px #00000040",
      }}
    >
      {/* MAIN CONTAINER - This ensures consistent padding */}
      <div className={`h-full mx-auto ${maxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex h-full w-full items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0 items-center">
            <img 
              src="/intelli_logo.png" 
              alt="Intelliwriter Logo" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* NAV LINKS - Improved spacing */}
          <ul className="flex items-center gap-6 xl:gap-8 text-[14px] lg:text-[15px] font-medium text-white whitespace-nowrap">
            <li className="group relative cursor-pointer">
              <Link href="#" className="flex items-center gap-1 hover:text-[#D946EF] transition-colors">
                AI Tools <ChevronDown size={16} />
              </Link>
            </li>
            <li><Link href="#" className="hover:text-[#D946EF] transition-colors">AI Humanizer</Link></li>
            <li><Link href="#" className="hover:text-[#D946EF] transition-colors">APIs</Link></li>
            <li>
              <Link href="#" className="hover:text-[#D946EF] transition-colors border-b-2 border-white pb-1">
                Pricing
              </Link>
            </li>
            <li><Link href="#" className="hover:text-[#D946EF] transition-colors">Blogs</Link></li>
            <li className="hidden xl:block">
              <Link href="#" className="hover:text-[#D946EF] transition-colors">Become an Affiliate</Link>
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Link href="#">
              <button
                className="
                  bg-gradient-to-br from-[#471C7C] to-[#7628D6]
                  shadow-[0px_14px_40px_0px_#EF2B7040]
                  text-white
                  px-6 lg:px-8
                  py-2.5 lg:py-3
                  rounded-full
                  text-sm lg:text-base
                  font-semibold
                  transition-transform
                  hover:scale-105
                  hover:shadow-lg
                  whitespace-nowrap
                "
              >
                Register
              </button>
            </Link>
            <Link href="#">
              <button className="
                rounded-full 
                border border-white 
                bg-transparent 
                px-6 lg:px-8
                py-2.5 lg:py-3
                text-sm lg:text-base
                font-semibold 
                text-white 
                hover:bg-white/10 
                whitespace-nowrap
              ">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="flex lg:hidden h-full w-full items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/intelli_logo.png" 
              alt="Intelliwriter Logo" 
              className="h-10 w-auto" 
            />
          </Link>

          <button 
            className="text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className="absolute left-0 top-[97px] w-full px-6 py-8 shadow-2xl lg:hidden border-t border-white/10"
            style={{ background: "#321B59" }}
          >
            <ul className="flex flex-col gap-6 text-white text-lg font-medium">
              <li className="flex justify-between items-center cursor-pointer">
                AI Tools <ChevronDown size={16} />
              </li>
              <li onClick={closeMenu}><Link href="#" className="block py-2">AI Humanizer</Link></li>
              <li onClick={closeMenu}><Link href="#" className="block py-2">APIs</Link></li>
              <li onClick={closeMenu}><Link href="#" className="block py-2">Pricing</Link></li>
              <li onClick={closeMenu}><Link href="#" className="block py-2">Blogs</Link></li>
              <li onClick={closeMenu}><Link href="#" className="block py-2">Become an Affiliate</Link></li>

              <div className="flex flex-col gap-4 pt-4">
                <button 
                  onClick={closeMenu}
                  className="w-full rounded-full py-3 font-bold text-white bg-gradient-to-br from-[#471C7C] to-[#7628D6]"
                >
                  Register
                </button>
                <button 
                  onClick={closeMenu}
                  className="w-full rounded-full border border-white py-3 font-bold text-white"
                >
                  Login
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}