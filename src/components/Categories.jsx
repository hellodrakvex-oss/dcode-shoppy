import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    { title: "Photo Frames", size: "col-span-1 md:col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop" },
    { title: "LED Frames", size: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop" },
    { title: "Gift Bouquets", size: "col-span-1 md:col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop" },
    { title: "Couple Gifts", size: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop" },
    { title: "Fridge Magnets", size: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1582046124446-c2ab036bb061?q=80&w=800&auto=format&fit=crop" },
    { title: "Birthday Gifts", size: "col-span-1 md:col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" },
    { title: "Awards & Momentos", size: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section  id="collection" className="py-32 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-[5rem] font-clash font-bold uppercase tracking-tight leading-none mb-6">
            Curated <br className="md:hidden"/> <span className="text-brand-gold">Collections</span>
          </h2>
          <p className="text-white/50 font-satoshi max-w-2xl mx-auto text-xl font-light">
            Explore our meticulously crafted categories. Every piece is designed to elevate your gifting experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`${cat.size} group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl cursor-pointer`}
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-2xl font-clash font-medium text-white transition-colors duration-300 tracking-wide">
                  {cat.title}
                </h3>
                <div className="h-[2px] w-0 bg-brand-gold mt-2 transition-all duration-500 group-hover:w-8"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
