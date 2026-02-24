import { motion } from 'motion/react';
import { Container } from './Container';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "A Nexus transformou completamente nossa presença digital. O novo portal é rápido, intuitivo e nossos clientes adoraram.",
    author: "Ricardo Silva",
    role: "Diretor de Marketing",
    image: "https://picsum.photos/seed/ricardo/100/100"
  },
  {
    content: "Profissionalismo impecável. A equipe entendeu nossas necessidades complexas e entregou uma solução que superou as expectativas.",
    author: "Ana Paula",
    role: "CEO",
    image: "https://picsum.photos/seed/ana/100/100"
  },
  {
    content: "O design e a performance do meu novo portfólio são incríveis. Recebo elogios constantes de novos clientes.",
    author: "Thalles Rayanderson",
    role: "Arquiteto",
    image: "https://picsum.photos/seed/thalles/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">parceiros</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl liquid-glass border border-white/5 hover:border-white/10 transition-colors group"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-white/5 group-hover:text-purple-500/20 transition-colors" />
              <p className="text-lg text-neutral-300 mb-8 relative z-10 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-semibold">{t.author}</h4>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
