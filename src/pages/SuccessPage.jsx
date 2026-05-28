import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Generate a premium-looking fake order ID
    const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderId(`DC-${randomChars}-${Math.floor(Math.random() * 10000)}`);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center relative overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 md:p-16 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-gold/30"
        >
          <CheckCircle2 size={48} className="text-brand-gold" />
        </motion.div>
        
        <h1 className="text-3xl md:text-5xl font-clash font-bold text-white mb-4 uppercase tracking-tight">
          Order Placed
        </h1>
        
        <p className="text-white/60 font-satoshi text-lg leading-relaxed mb-8">
          Your luxury piece is being prepared with utmost care. We will notify you once it ships.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
          <p className="text-sm text-white/40 font-satoshi uppercase tracking-widest mb-2">Order Reference</p>
          <p className="text-2xl font-clash font-medium text-brand-gold tracking-wide">{orderId}</p>
        </div>

        <Link 
          to="/collections"
          className="inline-flex px-10 py-4 bg-brand-gold text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
}
