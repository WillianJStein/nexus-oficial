import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from './Container';
import { Globe, Search, Code, Share2, Zap } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Desenvolvemos sites institucionais e one-page modernos, rápidos e projetados para transformar visitantes em clientes.',
    gradient: 'from-purple-500/20 to-cyan-500/20',
  },
  {
    icon: Search,
    title: 'SEO Avançado',
    description: 'Colocamos seu site no topo do Google, atraindo tráfego qualificado e aumentando sua visibilidade online.',
    gradient: 'from-cyan-500/20 to-purple-500/20',
  },
  {
    icon: Code,
    title: 'Criação de Sistemas',
    description: 'Construímos sistemas web sob medida para otimizar a gestão e a operação do seu negócio.',
    gradient: 'from-purple-500/20 to-cyan-500/20',
  },
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description: 'Criamos conteúdo estratégico e gerenciamos suas redes para construir uma comunidade engajada e fortalecer sua marca.',
    gradient: 'from-cyan-500/20 to-purple-500/20',
  },
  {
    icon: Zap,
    title: 'Automação de Tarefas',
    description: 'Eliminamos processos manuais e repetitivos, economizando tempo e dinheiro para sua equipe através de automações.',
    gradient: 'from-cyan-500/20 to-purple-500/20',
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="services" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Soluções</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços para impulsionar o crescimento do seu negócio no ambiente digital.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl liquid-glass p-10 liquid-glass-hover hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl`} />
              
              <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="relative z-10 mb-3 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="relative z-10 text-neutral-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"
        />
      </Container>
    </section>
  );
}
