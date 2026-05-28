import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Luxury LED Frame",
      price: "$149.99",
      rating: 4.9,
      reviews: 128,
      img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Premium Gold Bouquet",
      price: "$89.99",
      rating: 4.8,
      reviews: 96,
      img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Custom Acrylic Award",
      price: "$199.99",
      rating: 5.0,
      reviews: 45,
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Memory Keepsake Box",
      price: "$129.99",
      rating: 4.7,
      reviews: 210,
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section  id="best-sellers" className="py-32 relative z-10 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-[3.5rem] font-clash font-bold uppercase tracking-tight leading-none">
              Signature <br className="md:hidden" /> Pieces
            </h2>
            <p className="text-white/50 font-satoshi mt-6 text-xl font-light">
              Our most sought-after creations.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 hover:text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold border-b border-white/20 pb-2 w-fit transition-all hover:border-brand-gold"
          >
            View Full Collection
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] aspect-[4/5] mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center z-20">
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-brand-gold transition-colors w-full justify-center">
                    <ShoppingCart size={16} />
                    Acquire Now
                  </button>
                </div>
              </div>

              <div className="px-2">
                <div className="flex flex-col mb-2">
                  <h3 className="text-xl font-clash font-medium text-white transition-colors truncate">
                    {product.name}
                  </h3>
                  <span className="text-white/60 font-satoshi text-md mt-1">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-white/20"} />
                    ))}
                  </div>
                  <span className="text-xs text-white/40">({product.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
