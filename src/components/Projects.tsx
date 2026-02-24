import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Container } from './Container';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Tricase Group',
    category: 'Portal Corporativo & Gestão Imobiliária',
    image: '/images/tricase.jpg',
    color: '#0a0a0a',
    glow: 'rgba(34, 211, 238, 0.5)', // Cyan
    border: 'from-cyan-400 via-blue-500 to-cyan-600',
  },
  {
    title: 'Pc Consult',
    category: 'Contabilidade Pura',
    image: '/images/pcconsult.jpeg',
    color: '#0a0a0a',
    glow: 'rgba(168, 85, 247, 0.5)', // Purple
    border: 'from-purple-500 via-fuchsia-500 to-purple-600',
  },
  {
    title: 'Thalles Rayanderson',
    category: 'Arquiteto',
    image: '/images/thalles.jpeg',
    color: '#0a0a0a',
    glow: 'rgba(34, 211, 238, 0.5)', // Cyan
    border: 'from-cyan-400 via-blue-500 to-cyan-600',
  },
  {
    title: 'Android',
    category: 'Responsividade e conhecimento',
    image: '/images/android.jpeg',
    color: '#0a0a0a',
    glow: 'rgba(168, 85, 247, 0.5)', // Purple
    border: 'from-purple-500 via-fuchsia-500 to-purple-600',
  },
  {
    title: 'Um mimo',
    category: 'Sistema de venda de presentes',
    image: '/images/ummimo.jpeg',
    color: '#0a0a0a',
    glow: 'rgba(34, 211, 238, 0.5)', // Cyan
    border: 'from-cyan-400 via-blue-500 to-cyan-600',
  },
  {
    title: 'RoferHub',
    category: 'Sistema de Contabilidade',
    image: '/images/roferhub.jpeg',
    color: '#0a0a0a',
    glow: 'rgba(168, 85, 247, 0.5)', // Purple
    border: 'from-purple-500 via-fuchsia-500 to-purple-600',
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ['1%', '-95%']);

  return (
    <section id="projects" className="bg-black">
      {/* Desktop Version (Horizontal Scroll) - lg+ */}
      <div ref={targetRef} className="hidden lg:block relative h-[500vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div 
            style={{ x, willChange: 'transform' }} 
            className="flex gap-20 px-32"
          >
            {/* Intro Card */}
            <div className="flex h-[70vh] w-[45vw] flex-col justify-center shrink-0">
              <h2 className="text-7xl font-bold tracking-tighter text-white lg:text-8xl">
                Projetos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Selecionados
                </span>
              </h2>
              <p className="mt-8 text-xl text-neutral-400 max-w-md">
                Uma coleção de trabalhos que definem nossa excelência. Arraste ou role para explorar.
              </p>
            </div>

            {/* Project Cards */}
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(activeProject === i ? null : i)}
                className={`group relative h-[70vh] w-[60vw] shrink-0 overflow-hidden rounded-3xl liquid-glass p-12 liquid-glass-hover cursor-pointer transition-all duration-500 ${activeProject === i ? 'ring-2 ring-white/20' : ''}`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${project.border} [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="flex h-full flex-col justify-between relative z-10">
                  <header className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl font-bold text-white tracking-tight drop-shadow-lg">{project.title}</h3>
                      <p className="mt-2 text-lg text-white/80 font-mono font-medium">{project.category}</p>
                    </div>
                    <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm shrink-0">
                      <span className="text-white/80 font-mono text-sm">{`0${i + 1}`}</span>
                    </div>
                  </header>
                  
                  <div className="relative flex-1 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl group/img">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      animate={{ 
                        y: activeProject === i ? 'calc(-100% + 350px)' : '0%',
                        scale: activeProject === i ? 1.1 : 1
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ 
                        y: { duration: 8, ease: "easeInOut" },
                        scale: { duration: 0.6, ease: "easeOut" }
                      }}
                      className="absolute top-0 left-0 w-full h-auto min-h-full object-top will-change-transform"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 pointer-events-none" />
                  </div>
                </div>
                
                {/* Ambient background glow */}
                <div 
                  className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60 mix-blend-screen"
                  style={{ background: project.glow }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet Version (Vertical List) - sm/md */}
      <div className="lg:hidden py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">
              Projetos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Selecionados
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-md">
              Uma coleção de trabalhos que definem nossa excelência.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                onClick={() => setActiveProject(activeProject === i ? null : i)}
                className={`group relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 liquid-glass-hover cursor-pointer transition-all duration-500 ${activeProject === i ? 'ring-2 ring-white/20' : ''}`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${project.border} [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] opacity-50 pointer-events-none`} />

                <div className="relative z-10">
                  <header className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400 font-mono">{project.category}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                      <span className="text-white/60 font-mono text-xs">{`0${i + 1}`}</span>
                    </div>
                  </header>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      animate={{ 
                        y: activeProject === i ? 'calc(-100% + 220px)' : '0%'
                      }}
                      transition={{ 
                        y: { duration: 8, ease: "easeInOut" }
                      }}
                      className="absolute top-0 left-0 w-full h-auto min-h-full object-top"
                      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 pointer-events-none" />
                  </div>
                </div>

                {/* Ambient background glow */}
                <div 
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none"
                  style={{ background: project.glow }}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
