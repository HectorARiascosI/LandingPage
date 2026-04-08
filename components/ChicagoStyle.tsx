const features = [
  {
    label: "DINE-IN",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M3 17h18M9 3v4m6-4v4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  {
    label: "CURBSIDE PICKUP",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2zM13 8h4l3 5v3h-7V8z" /></svg>,
  },
  {
    label: "IN-STORE PICKUP",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  },
  {
    label: "LEARN MORE",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  {
    label: "IN-STORE PICKUP",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="1" y="3" width="15" height="13" rx="1" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    label: "PLAN/THINGS",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  },
];

export default function ChicagoStyle() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-[#FAF8F4]">
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT: big headline + text + CTAs */}
        <div className="flex-1 min-w-0">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#1a1a1a] leading-tight mb-4">
            Home of the<br />Chicago-Style<br />Thin Crust Pizza
          </h2>
          <p className="text-gray-500 text-sm font-sans leading-relaxed mb-6 max-w-sm">
            Unwrap the thin tastiness that doesn&apos;t skimp on toppings. Our dough is hand-stretched and baked fresh, loaded with bold flavors and premium toppings that keep you coming back for more.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-[#F47B20] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-sans">
              LEARN MORE
            </a>
            <a href="#" className="text-xs font-semibold text-[#1a1a1a] underline underline-offset-2 hover:text-[#F47B20] font-sans tracking-wide">
              SEE LOCATIONS
            </a>
          </div>
        </div>

        {/* CENTER: 3x2 icon grid */}
        <div className="flex-shrink-0">
          <div className="grid grid-cols-3 gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-16 rounded-xl bg-[#F47B20] flex items-center justify-center text-white shadow-sm">
                  {f.icon}
                </div>
                <span className="text-[9px] font-bold text-center text-[#1a1a1a] tracking-wide leading-tight font-sans max-w-[60px]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: two overlapping polaroid photos */}
        <div className="flex-shrink-0 relative w-56 h-64 hidden md:block">
          {/* Back photo */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-white p-2 shadow-lg rotate-6 z-0">
            <img
              src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80"
              alt="Pizza chef"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Front photo */}
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-white p-2 shadow-lg -rotate-3 z-10">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
              alt="Happy staff"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
