export default function FranchiseCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 pb-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">

        {/* LEFT: franchise text + CTA */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#1a1a1a] leading-tight mb-3">
            Want to Own Your Own<br />Crust Pizza Co.?
          </h2>
          <p className="text-gray-500 text-sm font-sans leading-relaxed mb-5 max-w-xs">
            Become part of a growing family of franchise owners. Low startup costs, full training, and ongoing support provided.
          </p>
          <a
            href="#"
            className="inline-block bg-[#F47B20] text-white text-xs font-bold tracking-widest px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit font-sans"
          >
            SUBMIT A REQUEST
          </a>
        </div>

        {/* CENTER: restaurant exterior photo */}
        <div className="flex-1 rounded-2xl overflow-hidden h-[200px]">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80"
            alt="Crust Pizza Co. restaurant exterior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: Submit a Request — 3 square-ish rounded buttons */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold uppercase text-[#1a1a1a] mb-4 tracking-wide">Submit a Request</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-[#F47B20] text-white text-[10px] font-bold tracking-wide px-4 py-4 rounded-2xl hover:bg-orange-600 transition-colors font-sans text-center leading-tight w-20">
              CATERING
            </a>
            <a href="#" className="bg-[#F47B20] text-white text-[10px] font-bold tracking-wide px-4 py-4 rounded-2xl hover:bg-orange-600 transition-colors font-sans text-center leading-tight w-20">
              PARTY /<br />LARGE
            </a>
            <a href="#" className="bg-[#F47B20] text-white text-[10px] font-bold tracking-wide px-4 py-4 rounded-2xl hover:bg-orange-600 transition-colors font-sans text-center leading-tight w-20">
              FOLLOW US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
