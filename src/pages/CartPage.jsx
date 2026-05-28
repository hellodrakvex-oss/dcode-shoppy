import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 min-h-[100svh] bg-[#030303] relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <h1 className="text-4xl md:text-6xl font-clash font-bold uppercase tracking-tight text-white mb-16">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-[#0a0a0a] rounded-[3rem] border border-white/5"
          >
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={40} className="text-white/20" />
            </div>
            <h2 className="text-2xl font-clash font-medium text-white mb-4">Your cart is beautifully empty.</h2>
            <p className="text-white/50 mb-8 font-satoshi text-center max-w-md">Looks like you haven't added any luxury pieces to your cart yet.</p>
            <Link to="/collections" className="px-8 py-4 bg-brand-gold text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-6 bg-[#0a0a0a] p-4 rounded-[2rem] border border-white/5"
                  >
                    <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between py-2 w-full">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-clash font-medium text-white mb-1">{item.name}</h3>
                          <p className="text-brand-gold font-satoshi">${item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-white/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full w-fit px-3 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-brand-gold text-white/60">
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-brand-gold text-white/60">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-clash font-bold text-white mb-8">Summary</h3>
                
                <div className="space-y-4 font-satoshi text-white/70 mb-8 border-b border-white/10 pb-8">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-brand-gold">Complimentary</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-medium text-white">Total</span>
                  <span className="text-3xl font-clash font-bold text-brand-gold">${cartTotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-brand-gold text-black font-semibold rounded-full text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
                >
                  Checkout <ArrowRight size={20} />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
