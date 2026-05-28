import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [animateBadge, setAnimateBadge] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateBadge(true);
      const timer = setTimeout(() => setAnimateBadge(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'Custom Gifts', href: '#whatsapp-cta' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        scrolled ? 'py-4' : 'py-6 md:py-8'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-6 py-4 transition-all duration-300',
            scrolled ? 'glass-gold border border-white/5' : 'bg-transparent'
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
  <Link to="/" className="flex items-center gap-2 z-50">
  <img
    src="/logo.jpeg"
    alt="DCODE SHOPPY"
    className="h-12 w-auto object-contain
    drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]
    hover:scale-105
    transition-all
    duration-500"
  /></Link>
</a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 z-50">
            <Link to="/cart" className="relative p-2 text-white hover:text-brand-gold transition-colors">
              <ShoppingBag size={20} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: animateBadge ? 1.2 : 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] bg-brand-gold text-black text-[10px] font-bold rounded-full px-1"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-brand-gold/20 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-clash font-medium text-white hover:text-brand-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
