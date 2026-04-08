export default function FranchiseCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left: franchise text */}
        <div className="flex-1 bg-[#FAF8F4] rounded-2xl p-8 flex flex-col justify-center border border-gray-100">
          <h2 className="text-3xl font-bold uppercase text-[#1a1a1a] leading-tight mb-3">
            Want to Own Your Own<br />Crust Pizza Co.?
          </h2>
          <p className="text-gray-500 text-sm font-sans leading-relaxed mb-6 max-w-xs">
            Become part of a growing family of franchise owners. Low startup costs, full training, and ongoing support.
          </p>
          <a
            href="#"
            className="inline-block bg-[#F47B20] text-white text-xs font-bold tracking-widest px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit font-sans"
          >
            SUBMIT A REQUEST
          </a>
        </div>

        {/* Center: restaurant image */}
        <div className="flex-1 rounded-2xl overflow-hidden min-h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
            alt="Crust Pizza Co. restaurant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: submit a request form area */}
        <div className="flex-1 bg-white rounded-2xl p-8 flex flex-col justify-center border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold uppercase text-[#1a1a1a] mb-4">Submit a Request</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <button className="flex-1 bg-[#F47B20] text-white text-xs font-bold tracking-widest py-2.5 rounded-full hover:bg-orange-600 transition-colors font-sans">
                CATERING
              </button>
              <button className="flex-1 border border-[#F47B20] text-[#F47B20] text-xs font-bold tracking-widest py-2.5 rounded-full hover:bg-[#F47B20] hover:text-white transition-colors font-sans">
                PARTY / LARGE
              </button>
              <button className="flex-1 border border-[#F47B20] text-[#F47B20] text-xs font-bold tracking-widest py-2.5 rounded-full hover:bg-[#F47B20] hover:text-white transition-colors font-sans">
                FOLLOW US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
