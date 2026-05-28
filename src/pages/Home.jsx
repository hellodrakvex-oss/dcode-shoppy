import Hero from '../components/Hero';
import Categories from '../components/Categories';
import BestSellers from '../components/BestSellers';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import InstagramShowcase from '../components/InstagramShowcase';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <Stats />
      <Testimonials />
      <InstagramShowcase />
      <WhatsAppCTA />
    </>
  );
}
