import { motion } from 'motion/react';
import { Container } from './Container';

export function Navbar() {
  const links = [
    { name: 'Soluções', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Processo', href: '#process' },
    { name: 'Equipe', href: '#team' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[95%] max-w-5xl rounded-full liquid-glass"
    >
      <Container className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          NEXUS
        </a>
        <div className="hidden md:flex gap-4 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-xs font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-[#0071e3] px-5 py-2 text-xs font-medium text-white transition-all hover:bg-[#0077ed] hover:shadow-[0_0_15px_rgba(0,113,227,0.4)] active:scale-[0.98] shadow-lg shadow-blue-500/20"
        >
          Fale Conosco
        </a>
      </Container>
    </motion.nav>
  );
}
