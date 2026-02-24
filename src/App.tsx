import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
