import { motion } from 'motion/react';
import { Container } from './Container';

const team = [
  {
    name: 'Jeferson Borges',
    role: 'COO & Arquiteto de Soluções',
    image: '/images/jeferson.png',
    bio: 'Especialista em estratégia operacional e arquitetura de sistemas complexos, focando em escalabilidade e eficiência.',
  },
  {
    name: 'Willian Steinbach',
    role: 'CTO & Desenvolvedor Líder',
    image: '/images/willian.png',
    bio: 'Visionário tecnológico com vasta experiência em soluções digitais e liderança de equipes de alto desempenho.',
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
            Nossa Equipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Fundadora</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
            Liderança dedicada a transformar visões audaciosas em realidade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative z-10 items-stretch">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-[2.5rem] liquid-glass border border-white/10 p-10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col items-center text-center group-hover:bg-white/[0.07]">
                {/* Photo Container */}
                <div className="relative mb-8 shrink-0">
                  <div className="h-56 w-56 overflow-hidden rounded-3xl border-2 border-white/10 transition-all duration-700 group-hover:border-white/60 relative z-10 shadow-2xl">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative glow behind photo */}
                  <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/30 to-cyan-500/30 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className="max-w-xs">
                  <h3 className="text-3xl font-bold text-white tracking-tight">{member.name}</h3>
                  <p className="text-purple-400 font-mono text-sm uppercase tracking-wider mt-2 mb-4">{member.role}</p>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
