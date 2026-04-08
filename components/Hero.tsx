export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="relative rounded-3xl overflow-hidden h-[380px] md:h-[440px]">
        {/* Background image — top-down pizza shot */}
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=80"
          alt="Delicious pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content — left side with torn/dark background block behind text */}
        <div className="relative z-10 flex flex-col justify-end h-full px-8 pb-10 max-w-sm">
          {/* Dark irregular background behind text */}
          <div className="bg-[#1a1a1a]/90 px-5 pt-5 pb-4 rounded-sm -mx-2 mb-4" style={{clipPath: "polygon(0 0, 98% 0, 100% 8%, 100% 100%, 2% 100%, 0 92%)"}}>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight uppercase">
              For Delicious,<br />Made-From<br />Scratch Pizzas
            </h1>
          </div>
          <p className="text-gray-200 text-xs mb-5 font-sans">
            Made with the finest ingredients that doesn&apos;t sacrifice taste or quality.
          </p>
          <a
            href="#"
            className="inline-block bg-[#F47B20] text-white text-sm font-bold tracking-wide px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit font-sans"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
