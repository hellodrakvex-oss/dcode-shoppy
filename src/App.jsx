import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import InstagramShowcase from './components/InstagramShowcase';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen text-white overflow-hidden relative selection:bg-brand-gold selection:text-brand-black">
      <CustomCursor />
      
      {/* Vignette Edge Darkening */}
      <div className="fixed inset-0 z-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030303_100%)] opacity-80"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <BestSellers />
          <Stats />
          <Testimonials />
          <InstagramShowcase />
          <WhatsAppCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
