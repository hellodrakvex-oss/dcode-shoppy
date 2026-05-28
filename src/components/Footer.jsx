import { Users, Camera, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-24 pb-8 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center">
              <span className="font-clash font-bold text-2xl tracking-wider text-white">
                DCODE<span className="text-brand-gold">.</span>
              </span>
            </a>
            <p className="text-white/40 font-satoshi text-sm leading-relaxed">
              Premium customized gifts that turn memories into beautiful, timeless moments.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all">
                <Camera size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all">
                <Users size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-clash font-semibold text-sm text-white uppercase tracking-[0.15em]">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-satoshi text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shop Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-clash font-semibold text-sm text-white uppercase tracking-[0.15em]">Contact Us</h4>
            <ul className="flex flex-col gap-4 font-satoshi text-white/40 text-sm">
              <li className="flex items-start gap-3">
  <MapPin size={16} className="text-white/30 shrink-0 mt-0.5" />
  <span>
    DCODE SHOPPY <br />
    Gobichettipalayam, Tamil Nadu <br />
    India
  </span>
</li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/30 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/30 shrink-0" />
                <span>hello@dcodeshoppy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-clash font-semibold text-sm text-white uppercase tracking-[0.15em]">Newsletter</h4>
            <p className="text-white/40 font-satoshi text-sm">
              Subscribe for exclusive deals and updates.
            </p>
            <form className="flex relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 bg-white text-black px-5 rounded-full font-semibold text-xs hover:bg-brand-gold transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-satoshi text-xs">
            © {new Date().getFullYear()} DCODE SHOPPY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-xs font-satoshi">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
