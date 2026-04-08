export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[480px]">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80"
          alt="Delicious pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-md">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight uppercase mb-3">
            For Delicious,<br />Made-From<br />Scratch Pizzas
          </h1>
          <p className="text-gray-300 text-sm mb-6 font-sans">
            Made with the finest ingredients that doesn&apos;t sacrifice taste or quality.
          </p>
          <a
            href="#"
            className="inline-block bg-[#F47B20] text-white text-sm font-bold tracking-widest px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-fit font-sans"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
