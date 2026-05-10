import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Fleet from '../components/Fleet';
import PopularRoutes from '../components/PopularRoutes';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main className="page-root">
      <Navbar />
      <Hero />
      <Benefits />
      <Fleet />
      <Services />
      <PopularRoutes />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
