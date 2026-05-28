import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <section  id="whatsapp-cta" className="py-40 relative z-10 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-clash font-bold uppercase tracking-tight text-white mb-6">
            Let's Create <br />
            <span className="text-brand-gold">Magic Together.</span>
          </h2>
          <p className="text-white/50 font-satoshi text-lg max-w-md mx-auto font-light">
            Have a custom gift idea? Chat with us on WhatsApp and we'll bring your vision to life.
          </p>
        </motion.div>

        {/* Simplified Breathing Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72"
        >
          {/* Single soft pulsing ring */}
          <div className="absolute inset-0 rounded-full border border-[#25D366]/20 animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-[#25D366]/10" />

          {/* Soft ambient glow */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/5 blur-2xl" />

          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-36 h-36 md:w-44 md:h-44 bg-[#25D366] rounded-full flex flex-col items-center justify-center gap-2 text-white border border-white/10 shadow-[0_20px_40px_rgba(37,211,102,0.25)] hover:shadow-[0_20px_60px_rgba(37,211,102,0.4)] transition-shadow duration-300"
          >
            <MessageCircle fill="currentColor" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xs md:text-sm font-clash font-semibold tracking-wider uppercase">Chat Now</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
