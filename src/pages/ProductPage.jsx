import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ShoppingBag, Plus, Minus, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top automatically handled by ScrollToTop component

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <h1 className="text-3xl text-white">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleWhatsApp = () => {
    const message = `Hi DCODE SHOPPY, I'm interested in customizing my order for ${product.name}.`;
    const url = `https://wa.me/919740676514?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const recommended = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-[#030303]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors mb-10">
          <ArrowLeft size={20} /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a]"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-brand-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-brand-gold text-sm tracking-[0.2em] uppercase">{product.category}</span>
                <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                  <Star size={14} className="text-brand-gold fill-brand-gold" />
                  <span className="text-sm font-medium">{product.rating}.0</span>
                  <span className="text-sm text-white/40">({product.reviews})</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-clash font-bold text-white mb-6">
                {product.name}
              </h1>

              <p className="text-3xl text-brand-gold font-satoshi mb-8">
                ${product.price}
              </p>

              <p className="text-lg text-white/60 font-satoshi leading-relaxed mb-10">
                {product.description}
              </p>

              <div className="h-px w-full bg-white/10 mb-10"></div>

              <div className="flex items-center gap-6 mb-10">
                <span className="text-white/60">Quantity</span>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-brand-gold transition-colors text-white/70">
                    <Minus size={16} />
                  </button>
                  <span className="w-6 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-brand-gold transition-colors text-white/70">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 text-white border border-white/20 font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <ShoppingBag size={20} /> Add To Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-gold text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366]/10 text-[#25D366] font-semibold rounded-full border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-colors duration-300"
              >
                <MessageCircle size={20} /> Request Customization on WhatsApp
              </button>

            </motion.div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommended.length > 0 && (
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-3xl font-clash font-bold text-white mb-10">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recommended.map((item) => (
                <Link to={`/product/${item.slug}`} key={item.id} className="group flex flex-col bg-[#0a0a0a] rounded-[2rem] p-4 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-lg font-clash font-medium text-white mb-2">{item.name}</h3>
                  <p className="text-brand-gold font-satoshi font-semibold">${item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
      
      {/* Mobile Sticky Buy Now */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-black/95 backdrop-blur-xl border-t border-white/10 md:hidden z-50 flex gap-4">
        <button onClick={handleAddToCart} className="flex-1 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20">Add To Cart</button>
        <button onClick={handleBuyNow} className="flex-1 py-3 bg-brand-gold text-black font-bold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]">Buy Now</button>
      </div>
    </div>
  );
}
