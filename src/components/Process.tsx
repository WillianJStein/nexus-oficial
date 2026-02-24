import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from './Container';
import { useRef } from 'react';

const steps = [
  {
    title: 'Imersão e Planejamento',
    description: 'Mergulhamos no seu negócio para entender seus objetivos, público-alvo e desafios. Aqui, desenhamos a estratégia digital perfeita.',
  },
  {
    title: 'Prototipação e Design',
    description: 'Aqui a ideia toma forma. Desenhamos a jornada do usuário (UX) e criamos um protótipo visual de alta fidelidade para você aprovar cada tela.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Transformamos o design aprovado em realidade. Usando as tecnologias mais modernas, construímos um sistema limpo, rápido e escalável.',
  },
  {
    title: 'Otimização e Testes',
    description: 'Polimento final. Realizamos testes rigorosos em todos os dispositivos, otimizamos a velocidade e garantimos um SEO técnico impecável.',
  },
  {
    title: 'Lançamento',
    description: 'Hora de decolar! Publicamos seu projeto em servidores de alta performance e monitoramos os primeiros momentos para um lançamento perfeito.',
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={containerRef} className="py-32 bg-black relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
            Como Transformamos Ideias
          </h2>
          <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
            Nosso processo é transparente e focado em resultados.
          </p>
        </motion.div>

        <div className="relative space-y-24">
          {/* Vertical Line Background */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-neutral-900 md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 origin-top md:left-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col gap-8 md:flex-row md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-black border border-white/20 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>

              {/* Content */}
              <div className="pl-16 md:w-1/2 md:pl-0 md:pr-16 md:text-right">
                <div className={`${index % 2 === 0 ? 'md:text-left md:pl-16 md:pr-0' : ''}`}>
                  <span className="text-7xl font-bold text-white/10 select-none block mb-4 tracking-tighter group-hover:text-white/20 transition-colors">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500/40 to-cyan-500/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
