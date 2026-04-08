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
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-6">
          {navLeft.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-semibold tracking-widest font-sans transition-colors ${
                item.active
                  ? "bg-[#F47B20] text-white px-3 py-1 rounded-sm"
                  : "text-[#1a1a1a] hover:text-[#F47B20]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex flex-col items-center justify-center border-2 border-[#1a1a1a]">
            <span className="text-white text-[7px] tracking-widest font-sans uppercase">Crust</span>
            <span className="text-[#F47B20] text-[10px] font-bold font-sans uppercase leading-none">PIZZA</span>
            <span className="text-white text-[7px] tracking-widest font-sans uppercase">CO.</span>
          </div>
        </div>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-6">
          {navRight.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-widest font-sans text-[#1a1a1a] hover:text-[#F47B20] transition-colors"
            >
              {item.label}
            </a>
          ))}
          {/* Bell icon */}
          <button className="text-[#1a1a1a] hover:text-[#F47B20]" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          {/* Twitter/X icon */}
          <button className="text-[#1a1a1a] hover:text-[#F47B20]" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <a
            href="#"
            className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-4 py-2 rounded-sm hover:bg-orange-600 transition-colors font-sans"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F4] border-t border-gray-200 px-4 pb-4 flex flex-col gap-3">
          {[...navLeft, ...navRight].map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-semibold tracking-widest text-[#1a1a1a] hover:text-[#F47B20]">
              {item.label}
            </a>
          ))}
          <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-4 py-2 rounded-sm text-center">
            CALL NOW
          </a>
        </div>
      )}
    </nav>
  );
}
