import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Verified Buyer",
      content: "The LED frame I ordered for my anniversary was absolutely stunning. The quality and the glow effect exceeded my expectations. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Verified Buyer",
      content: "DCODE SHOPPY created a custom acrylic award for our corporate event. The craftsmanship is premium and it looks extremely luxurious.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Verified Buyer",
      content: "Got a gold bouquet for my best friend's birthday. It arrived in perfect condition and looked incredibly cinematic and beautiful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section  id="testimonials" className="py-32 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-clash font-bold uppercase tracking-tight"
          >
            Client <span className="text-white/40">Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 font-satoshi mt-4 text-lg font-light"
          >
            Don't just take our word for it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a] p-10 rounded-3xl relative group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-white/10"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-10 h-10" />
              
              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="font-satoshi text-white/70 leading-relaxed mb-10 text-[15px]">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10" />
                <div>
                  <h4 className="font-clash font-medium text-white text-sm">{review.name}</h4>
                  <p className="text-xs font-satoshi text-white/40">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
