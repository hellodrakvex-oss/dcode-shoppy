import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 max-w-5xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span className="text-sm font-satoshi font-medium text-white/80 tracking-[0.2em] uppercase">The Art Of Gifting</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-[8rem] font-clash font-bold leading-[0.85] tracking-tighter uppercase relative z-20 text-white"
          >
            Create <br className="md:hidden" /> Memories<span className="text-brand-gold">.</span>
            <br />
            <span className="text-white/40">
              Not Just Gifts.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/60 max-w-2xl font-satoshi leading-relaxed font-light mt-4"
          >
            Immerse yourself in a world of premium handcrafted luxury. 
            We turn your most cherished moments into timeless masterpieces.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-8">
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-brand-gold text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02]">
              <MessageCircle size={20} />
              <span className="text-lg">Order on WhatsApp</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-black/40 border border-white/10 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10 group">
              <span className="text-lg">Explore Collection</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Clean Static Products Background Layer with Elegant Reveal */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[10%] left-[-10%] md:left-[5%] w-[300px] md:w-[400px] z-0 opacity-40 md:opacity-80"
          >
            <img src="/hero_bouquet.png" alt="Luxury Bouquet" className="w-full h-auto rounded-[2rem] object-cover border border-white/5 shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[5%] right-[-10%] md:right-[5%] w-[250px] md:w-[350px] z-30 opacity-50 md:opacity-90"
          >
            <img src="/hero_frame.png" alt="LED Frame" className="w-full h-auto rounded-[2rem] object-cover border border-white/10 shadow-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
