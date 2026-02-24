import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-sm text-neutral-400">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>
      </Container>
    </footer>
  );
}
