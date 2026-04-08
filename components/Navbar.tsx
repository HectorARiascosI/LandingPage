"use client";
import { useState } from "react";

const navLeft = [
  { label: "HOME", href: "#", active: true },
  { label: "MENU", href: "#menu" },
  { label: "LOCATIONS", href: "#" },
  { label: "ORDER ONLINE", href: "#" },
];

const navRight = [
  { label: "ABOUT", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#FAF8F4] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 relative">

        {/* Left links */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          {navLeft.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-bold tracking-widest font-sans transition-colors ${
                item.active
                  ? "bg-[#F47B20] text-white px-3 py-1.5 rounded-md"
                  : "text-[#1a1a1a] hover:text-[#F47B20]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center logo — oversized, overlaps navbar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex flex-col items-center justify-center border-[3px] border-[#1a1a1a] shadow-md">
            <span className="text-gray-400 text-[6px] tracking-[2px] font-sans uppercase">✦ CRUST ✦</span>
            <span className="text-white text-[11px] font-bold font-sans uppercase leading-none">PIZZA</span>
            <span className="text-gray-300 text-[8px] font-sans uppercase leading-none tracking-widest">CO.</span>
          </div>
        </div>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
          {navRight.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest font-sans text-[#1a1a1a] hover:text-[#F47B20] transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Bell icon — orange */}
          <button className="text-[#F47B20] hover:text-orange-600" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
          </button>

          {/* Twitter bird icon */}
          <button className="text-[#1a1a1a] hover:text-[#F47B20]" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>

          <a
            href="#"
            className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-sans"
          >
            CALL NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#1a1a1a]" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF8F4] border-t border-gray-200 px-4 pb-4 flex flex-col gap-3">
          {[...navLeft, ...navRight].map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-bold tracking-widest text-[#1a1a1a] hover:text-[#F47B20]">
              {item.label}
            </a>
          ))}
          <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-4 py-2 rounded-md text-center">
            CALL NOW
          </a>
        </div>
      )}
    </nav>
  );
}
