'use client';

import { motion } from "framer-motion";
import { Home, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Início", href: "#home" },
  { icon: FolderOpen, label: "Projetos", href: "#projects" },
  { icon: Mail, label: "Contato", href: "#contact" },
];

export function Dock() {
  
  // Função para rolagem suave manual
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Impede o "pulo" instantâneo
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Alinha ao topo
      });
      
      // Atualiza a URL sem pular a página (opcional, mas profissional)
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-2xl shadow-black/50"
      >
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)} // Aciona a rolagem suave
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl hover:bg-white/10 transition-all group relative"
          >
            <item.icon size={22} className="text-zinc-400 group-hover:text-accent transition-colors" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest border border-white/10">
              {item.label}
            </span>
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
}