export default function FranchiseCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 pb-12">
      <div className="flex flex-col md:flex-row gap-5 items-stretch">

        {/* LEFT: franchise text + CTA */}
        <div className="flex-1 flex flex-col justify-center py-4">
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

        {/* CENTER: restaurant building photo */}
        <div className="flex-1 rounded-2xl overflow-hidden min-h-[200px]">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
            alt="Crust Pizza Co. restaurant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: Submit a Request with 3 orange pill buttons */}
        <div className="flex-1 flex flex-col justify-center py-4">
          <h3 className="text-xl font-bold uppercase text-[#1a1a1a] mb-5">Submit a Request</h3>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-sans">
              CATERING
            </a>
            <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-sans">
              PARTY / LARGE
            </a>
            <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-sans">
              FOLLOW US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
