const footerLinks = ["MENU", "CATERING", "CATERING", "COMMISSIONS", "PRIVACY", "TERMS"];

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4] border-t border-gray-200 mt-6">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: logo + tagline */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex flex-col items-center justify-center border-2 border-[#1a1a1a] flex-shrink-0">
              <span className="text-white text-[7px] tracking-widest font-sans uppercase">Crust</span>
              <span className="text-[#F47B20] text-[10px] font-bold font-sans uppercase leading-none">PIZZA</span>
              <span className="text-white text-[7px] tracking-widest font-sans uppercase">CO.</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1a1a1a] font-sans">Want to place an</p>
              <p className="text-xs font-semibold text-[#1a1a1a] font-sans">order now?</p>
              <a href="#" className="text-[#F47B20] text-xs font-bold underline underline-offset-2 hover:text-orange-600 font-sans">
                Order Online →
              </a>
            </div>
          </div>

          {/* Right: nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-xs font-semibold tracking-widest text-[#1a1a1a] hover:text-[#F47B20] transition-colors font-sans"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400 font-sans">
            © {new Date().getFullYear()} Crust Pizza Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
