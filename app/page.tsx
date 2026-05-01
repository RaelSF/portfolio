'use client';

import { motion } from "framer-motion";
import { ExternalLink, Globe, ArrowDown, Download, ChevronRight } from "lucide-react";
import { PERSONAL_DATA, SOCIAL_LINKS, SKILL_CATEGORIES, PROJECTS, STATS, EXPERIENCE } from "../data";
import Typewriter from "../components/Typewriter";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="bg-gradient-aurora" />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="max-w-6xl mx-auto px-6 py-32 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-glass-border bg-glass text-xs font-medium"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-light">{PERSONAL_DATA.availability}</span>
              </motion.div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-accent font-mono text-sm tracking-wide"
                >
                  Olá, eu sou
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]"
                >
                  {PERSONAL_DATA.name}
                  <span className="text-accent">.</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-muted min-h-[1.875rem]"
                >
                  <Typewriter
                    texts={[
                      "Desenvolvedor Full-Stack",
                      "Especialista em React & Node.js",
                      "Criando soluções de alta performance",
                    ]}
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-muted leading-relaxed max-w-lg text-sm md:text-base"
              >
                {PERSONAL_DATA.sobre}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all shadow-lg shadow-accent/25 text-sm"
                >
                  Ver Projetos
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/curriculo.pdf"
                  download="Curriculo_Rafael_Figueiredo.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-glass border border-glass-border text-foreground font-semibold rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all text-sm"
                >
                  <Download size={16} />
                  Currículo
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 pt-4"
              >
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-xl bg-glass border border-glass-border text-muted hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl scale-90" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-glass-border glow-pulse">
                  <img
                    src="/MinhaFoto.png"
                    alt="Rafael S. Figueiredo"
                    className="w-80 h-80 object-cover opacity-90 saturate-50 contrast-125 hover:opacity-100 hover:saturate-100 hover:contrast-100 transition-all duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-card border border-glass-border rounded-2xl px-5 py-3 backdrop-blur-xl shadow-xl"
                >
                  <p className="text-xs text-muted font-medium">Experiência</p>
                  <p className="text-xl font-bold text-accent">5+ anos</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={16} className="text-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            accent="Sobre mim"
            title="Quem sou eu"
            subtitle="Conheça um pouco mais sobre minha trajetória e o que me motiva como desenvolvedor."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <ScrollReveal>
              <div className="space-y-6">
                <p className="text-muted leading-relaxed">
                  Sou um <span className="text-foreground font-medium">Desenvolvedor Full-Stack</span> apaixonado
                  por transformar ideias em produtos digitais de alta qualidade. Com foco em {' '}
                  <span className="text-accent">React</span>, <span className="text-accent">Node.js</span> e{' '}
                  <span className="text-accent">Python</span>, construo aplicações que combinam
                  performance, usabilidade e design moderno.
                </p>
                <p className="text-muted leading-relaxed">
                  Sou formado em Ciência da Computação na UFMS e ja trabalhei como TI e professor de programação e robotica, experiencia solida na parte de suporte e manutenção da parte tecnica e didatica de ensino para crianças e adolescentes.
                </p>
                <p className="text-muted leading-relaxed">
                  Acredito que bom código é aquele que resolve problemas reais de forma elegante
                  e sustentável. Estou sempre em busca de novos desafios e aprendizados.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-glass border border-glass-border rounded-2xl p-6 text-center hover:border-accent/20 transition-all duration-300"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            accent="Habilidades"
            title="Tech Stack"
            subtitle="Tecnologias e ferramentas que utilizo no dia a dia para criar soluções completas."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <ScrollReveal key={category.title} delay={catIdx * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-glass border border-glass-border rounded-2xl p-7 h-full hover:border-accent/20 transition-all duration-300 card-glow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-white/[0.03] border border-white/[0.06] rounded-lg text-muted-light hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            accent="Portfólio"
            title="Projetos em Destaque"
            subtitle="Uma seleção dos meus trabalhos mais recentes e relevantes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <motion.a
                  href={project.link}
                  target={project.link.startsWith('#') ? '_self' : '_blank'}
                  rel={project.link.startsWith('#') ? '' : 'noopener noreferrer'}
                  whileHover={{ y: -6 }}
                  className={`group relative bg-glass border border-glass-border rounded-2xl p-8 flex flex-col justify-between hover:border-accent/25 transition-all duration-500 cursor-pointer overflow-hidden card-glow block ${project.featured ? 'md:row-span-2 min-h-[320px]' : 'min-h-[220px]'
                    }`}
                >
                  {/* Gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent">
                        <project.icon size={project.featured ? 28 : 22} />
                      </div>
                      <ExternalLink
                        size={18}
                        className="text-muted/50 group-hover:text-accent transition-colors duration-300"
                      />
                    </div>
                    <h3 className={`font-bold mt-5 tracking-tight ${project.featured ? 'text-2xl' : 'text-xl'
                      }`}>
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider font-medium bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06] text-muted group-hover:border-accent/15 group-hover:text-muted-light transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            accent="Trajetória"
            title="Experiência"
            subtitle="Minha jornada profissional e acadêmica até o momento."
          />

          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

            <div className="space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <ScrollReveal key={exp.id} delay={idx * 0.15}>
                  <div className="flex gap-8 group">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-accent glow-pulse" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-2 flex-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold font-mono">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold mt-2 tracking-tight">{exp.role}</h3>
                      <p className="text-sm text-muted-light font-medium mt-0.5">{exp.company}</p>
                      <p className="text-sm text-muted mt-3 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            accent="Contato"
            title="Fale Comigo"
            subtitle="Tem um projeto em mente? Vamos conversar sobre como posso ajudar."
          />
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm font-medium">
                <span className="text-foreground">rafael</span>
                <span className="text-accent">figueiredo</span>
              </p>
              <p className="text-xs text-muted">
                © {new Date().getFullYear()} {PERSONAL_DATA.name}. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg text-muted hover:text-accent transition-colors"
                >
                  <link.icon size={16} />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted">
              <Globe size={14} className="text-accent" />
              <span>Baseado em {PERSONAL_DATA.location}</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}