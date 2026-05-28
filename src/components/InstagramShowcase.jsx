import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';

export default function InstagramShowcase() {
  const reels = [
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582046124446-c2ab036bb061?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-brand-black">
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-clash font-bold uppercase tracking-wide flex items-center gap-6">
              <Camera className="text-white w-10 h-10" />
              Join Our <br className="md:hidden" /> <span className="text-white/50 italic">Community</span>
            </h2>
            <p className="text-white/50 font-satoshi mt-6 text-xl font-light">
              Follow @dcodeshoppy for daily inspiration.
            </p>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-bold tracking-widest uppercase text-xs"
          >
            Follow Us
          </motion.a>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden py-4">
        {/* Mask gradients for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

        {/* Auto Scrolling Container */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 px-6 shrink-0"
        >
          {[...reels, ...reels].map((reel, idx) => (
            <div key={idx} className="relative w-[280px] h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer border border-white/5 hover:-translate-y-2 transition-transform duration-300">
              
              <img src={reel} alt="Instagram Reel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>

              <div className="absolute top-4 right-4 text-white/70">
                <Camera size={20} />
              </div>
              
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
