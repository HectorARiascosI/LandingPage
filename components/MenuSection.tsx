const menuItems = [
  {
    name: "CHICKEN PARM",
    description: "Tender chicken, rich tomato sauce, layers buy pizza-corner finds.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    name: "CHICKEN ALFREDO",
    description: "Creamy alfredo base, grilled chicken, premium toppings blend.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  },
  {
    name: "SPAGHETTI & MEATBALLS",
    description: "Classic Italian combo, rich sauce, savory meatballs.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  },
  {
    name: "BAKED MAC & CHEESE",
    description: "Fused tri-color pasta, creamy cheese sauce, baked to perfection.",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold uppercase text-[#1a1a1a] mb-5 tracking-wide">Our Menu</h2>

      {/* Horizontal scrollable row of cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <div key={item.name} className="group cursor-pointer">
            {/* Rectangular image - 4:3 ratio */}
            <div className="rounded-3xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-start justify-between gap-2 mt-2">
              <div>
                <h3 className="text-xs font-bold uppercase text-[#1a1a1a] leading-tight">{item.name}</h3>
                <p className="text-[11px] text-gray-500 mt-0.5 font-sans leading-relaxed">{item.description}</p>
              </div>
              <button className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F47B20] flex items-center justify-center hover:bg-orange-600 transition-colors mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#" className="border-2 border-[#F47B20] text-[#F47B20] text-xs font-bold tracking-widest px-8 py-3 rounded-full hover:bg-[#F47B20] hover:text-white transition-colors font-sans">
          VIEW OUR COMPLETE MENU
        </a>
      </div>
    </section>
  );
}
