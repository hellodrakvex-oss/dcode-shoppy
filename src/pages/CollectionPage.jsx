import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frames', 'Bouquets', 'Acrylic Awards', 'Gift Boxes'];



  const filteredCollection = activeCategory === 'All' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
  };

  const handleWhatsApp = (productName = "") => {
    const message = productName 
      ? `Hi DCODE SHOPPY, I'm interested in ordering ${productName}`
      : "Hi DCODE SHOPPY, I'd like to create a custom order.";
    const url = `https://wa.me/919746076514?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-[#030303]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-clash font-bold uppercase tracking-tight text-white mb-6">
            Full Collection
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-satoshi font-light leading-relaxed">
            Explore handcrafted premium gifts designed to turn memories into timeless masterpieces.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === category 
                ? 'bg-brand-gold text-black border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Section 2: Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredCollection.map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group flex flex-col bg-[#0a0a0a] rounded-[2rem] p-4 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)]"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-white/10 flex items-center gap-1">
                    <Star size={12} className="text-brand-gold fill-brand-gold" />
                    <span className="text-xs font-medium text-white">{item.rating}.0</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow px-2 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-clash font-medium text-white transition-colors group-hover:text-brand-gold">
                      {item.name}
                    </h3>
                    <p className="text-brand-gold font-satoshi font-semibold">{item.price}</p>
                  </div>
                  <p className="text-sm text-white/50 font-satoshi mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-3 mt-auto">
                    <Link to={`/product/${item.slug}`} className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-brand-gold transition-colors duration-300">
                      View Product
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section 3: Luxury CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-50 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-clash font-bold text-white mb-8">
              Can't find the perfect gift?
            </h2>
            <Link
              to="https://wa.me/919746076514?text=Hi%20DCODE%20SHOPPY,%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-gold text-black font-semibold rounded-full text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Create Custom Order
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Global WhatsApp CTA */}
      <button 
        onClick={() => handleWhatsApp()}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
