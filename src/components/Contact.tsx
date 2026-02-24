import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from './Container';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="contact" ref={containerRef} className="relative overflow-hidden bg-black py-32 min-h-[80vh] flex items-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" 
      />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]" />
      
      <Container className="relative z-10 text-center">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-9xl leading-none">
            Vamos Iniciar<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Seu Projeto?</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 md:mt-12 text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl"
          >
            Transforme suas ideias em realidade digital hoje mesmo.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="mt-16"
          >
            <a
              href="https://wa.me/5585981311975?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Nexus."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#0071e3] px-12 py-6 text-xl font-medium text-white transition-all hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(0,113,227,0.5)] hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-500/30"
            >
              <span className="relative z-10">Vamos Conversar?</span>
              <ArrowRight className="relative z-10 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
