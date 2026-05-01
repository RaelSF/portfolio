import { Github, Linkedin, Mail, Layers, Cpu, Code2, Globe } from "lucide-react";

export const PERSONAL_DATA = {
  name: "Rafael S. Figueiredo",
  firstName: "Rafael",
  role: "Desenvolvedor Full-Stack",
  sobre: "Desenvolvedor Full-Stack apaixonado por criar soluções digitais eficientes e elegantes. Com experiência em React, Node.js e Python, transformo ideias em produtos de alta performance com interfaces minimalistas e intuitivas.",
  description: "Criando soluções digitais minimalistas e de alta performance. Especialista em ecossistemas React.",
  location: "Brasil",
  availability: "Disponível para novos projetos",
  email: "rafael.s.figueiredo@ufms.br",
  whatsapp: "5569992838798",
};

export const STATS = [
  { value: "5+", label: "Anos de Experiência" },
  { value: "10+", label: "Projetos Concluídos" },
  { value: "5+", label: "Clientes Atendidos" },
  { value: "8+", label: "Tecnologias" },
];

export const SOCIAL_LINKS = [
  { id: 1, label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-figueiredo-06309b21a/", icon: Linkedin },
  { id: 2, label: "GitHub", href: "https://github.com/RaelSF", icon: Github },
  { id: 3, label: "E-mail", href: "mailto:rafael.s.figueiredo@ufms.br", icon: Mail },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Flask", "Express", "SQL", "SQLite", "NoSQL"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Linux"],
  },
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Node.js", "Python", "Flask", "SQL", "Git",
];

export const PROJECTS = [
  {
    id: 1,
    title: "Gerenciador ONG",
    description: "Aplicação desktop completa para gestão de ONGs, com gerenciamento de colaboradores, clientes, adoções, sistema de login e cadastro de animais. Interface intuitiva com TKinter.",
    tech: ["Python", "SQLite", "TKinter"],
    link: "https://github.com/RaelSF/ONG_PETs",
    icon: Layers,
    featured: true,
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Manager Life",
    description: "LifeManager é uma aplicação Fullstack desenvolvida para centralizar a gestão da vida pessoal com automação e inteligência.",
    tech: ["React.js", "SQLite", "Python", "Framer Motion"],
    link: "https://github.com/RaelSF/LifeManager",
    icon: Cpu,
    featured: true,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 3,
    title: "Portfólio Pessoal",
    description: "Este portfólio construído com Next.js, Tailwind CSS 4 e Framer Motion. Design responsivo e moderno com animações suaves.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    icon: Globe,
    featured: true,
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 4,
    title: "Seu Zé",
    description: "Seu Zé é um chat bot focado para ajudar os alunos em duvidas simples sobre programação e robotica",
    tech: ["Python", "TKInter", "SQL"],
    link: "https://github.com/RaelSF/SeuZe",
    icon: Code2,
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Professor de Programação e Robotica",
    company: "CNA",
    period: "2025 — 2026",
    description: "Ensino de programação e robótica para crianças, jovens e adultos, desde lógica e programação em blocos até desenvolvimento back-end e front-end",
  },
  {
    id: 2,
    role: "TI",
    company: "Uninassau - Grupo ser",
    period: "2024 — 2025",
    description: "Realizava suporte técnico a colaboradores, manutenção de equipamentos e sistemas, além da gestão de infraestrutura e apoio aos processos tecnológicos da instituição.",
  },
  {
    id: 3,
    role: "Graduação",
    company: "Ciência da Computação - UFMS",
    period: "2019 — 2024",
    description: "Bacharelado em Ciência da Computação, com formação sólida em programação, estruturas de dados, banco de dados e desenvolvimento de sistemas.",
  },
];