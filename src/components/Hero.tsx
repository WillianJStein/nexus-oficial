import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from './Container';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax for background blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Vibrant background elements matching the reference image */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-[-10%] left-[-20%] w-[70%] h-[100%] rounded-full bg-cyan-500/25 blur-[120px] animate-pulse animate-float" 
      />
      <motion.div 
        style={{ y: blob2Y, animationDelay: '2s' } as any}
        className="absolute top-[-10%] right-[-20%] w-[70%] h-[100%] rounded-full bg-purple-600/25 blur-[120px] animate-pulse animate-float" 
      />
      
      {/* Mesh gradient overlay for more color depth */}
      <div className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none bg-[radial-gradient(at_0%_0%,rgba(34,211,238,0.4)_0,transparent_50%),radial-gradient(at_100%_100%,rgba(168,85,247,0.4)_0,transparent_50%)]" />
      
      <Container className="relative z-10 text-center px-4">
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase">
              Inspirando o Amanhã
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="mx-auto max-w-fit text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-9xl leading-[1.1] md:leading-[1.05]"
          >
            <span className="animate-text-gradient animate-hero-title px-4 block sm:inline">
              Conectando o Futuro.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="mx-auto mt-8 md:mt-10 max-w-3xl text-sm text-neutral-300 sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-light"
          >
            A Nexus é uma agência boutique de tecnologia que transforma ideias complexas em experiências digitais excepcionais, focada em performance e design de alto impacto. No Site-Nexus, cada linha de código é pensada para performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center"
          >
            <a
              href="https://wa.me/5585981311975?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Nexus."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#0077ed] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25 hover:shadow-[0_0_25px_rgba(0,113,227,0.5)]"
            >
              <span className="relative z-10">Fale com um Especialista</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Ver Projetos
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
