const whyChooseImages = [
  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80",
  "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=300&q=80",
  "https://images.unsplash.com/photo-1548369937-47519962c11a?w=300&q=80",
];

export default function WaysToEnjoy() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold uppercase text-[#1a1a1a] mb-6 tracking-wide">Ways to Enjoy</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Large pizza image left */}
        <div className="relative w-full md:w-72 h-72 flex-shrink-0 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80"
            alt="Crust Pizza"
            className="w-full h-full object-cover"
          />
          {/* Logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#1a1a1a]/80 flex flex-col items-center justify-center border-2 border-[#F47B20]">
              <span className="text-white text-[8px] tracking-widest font-sans uppercase">Crust</span>
              <span className="text-[#F47B20] text-sm font-bold font-sans uppercase leading-none">PIZZA</span>
              <span className="text-white text-[8px] tracking-widest font-sans uppercase">CO.</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Top row: 2 dark cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Award-winning card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F47B20] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold uppercase leading-tight">Award-Winning Pizza & Service</h3>
              <p className="text-gray-400 text-xs font-sans leading-relaxed">
                Recognized for outstanding quality, taste, and customer experience across all our locations.
              </p>
              <a href="#" className="inline-block bg-[#F47B20] text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit font-sans">
                LEARN MORE
              </a>
            </div>

            {/* Kids eat free card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F47B20] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold uppercase leading-tight">Kids Eat Free Tuesdays!</h3>
              <p className="text-gray-400 text-xs font-sans leading-relaxed">
                Every Tuesday, kids eat free with the purchase of an adult entrée. Family fun every week.
              </p>
              <a href="#" className="inline-block border border-[#F47B20] text-[#F47B20] text-xs font-bold tracking-widest px-4 py-2 rounded-full hover:bg-[#F47B20] hover:text-white transition-colors w-fit font-sans">
                VIEW OUR COMPLETE MENU
              </a>
            </div>
          </div>

          {/* Why Choose Us photo grid */}
          <div className="bg-white rounded-2xl p-4">
            <h3 className="text-sm font-bold uppercase text-[#1a1a1a] mb-3 tracking-wide">Why Choose Us</h3>
            <div className="grid grid-cols-2 gap-2">
              {whyChooseImages.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-video">
                  <img src={src} alt={`Why choose us ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
