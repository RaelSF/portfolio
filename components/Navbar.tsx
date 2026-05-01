'use client';

import { motion } from "framer-motion";
import { Home, FolderOpen, Mail, User, Briefcase, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { icon: Home, label: "Início", href: "#home" },
    { icon: User, label: "Sobre", href: "#about" },
    { icon: Code2, label: "Skills", href: "#skills" },
    { icon: FolderOpen, label: "Projetos", href: "#projects" },
    { icon: Briefcase, label: "Experiência", href: "#experience" },
    { icon: Mail, label: "Contato", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map(item => item.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 bg-background/60 backdrop-blur-2xl border-b border-glass-border shadow-lg shadow-black/20'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="text-lg font-bold tracking-tight group"
                    whileHover={{ scale: 1.02 }}
                >
                    <span className="text-foreground">rafael</span>
                    <span className="text-accent">.</span>
                    <span className="text-muted group-hover:text-foreground transition-colors">dev</span>
                </motion.a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-glass rounded-2xl border border-glass-border">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`relative px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-colors ${activeSection === item.href.replace('#', '')
                                    ? 'text-accent'
                                    : 'text-muted hover:text-foreground'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeSection === item.href.replace('#', '') && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-accent/10 rounded-xl border border-accent/20"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </motion.a>
                    ))}
                </nav>

                {/* CTA */}
                <motion.a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
                >
                    Contato
                </motion.a>

                {/* Mobile Dock */}
                <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <motion.nav
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex items-center gap-1 px-3 py-2.5 bg-card/90 backdrop-blur-2xl border border-glass-border rounded-2xl shadow-2xl shadow-black/60"
                    >
                        {navItems.slice(0, 4).map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-2.5 rounded-xl transition-all ${activeSection === item.href.replace('#', '')
                                        ? 'bg-accent/15 text-accent'
                                        : 'text-muted hover:text-foreground hover:bg-white/5'
                                    }`}
                            >
                                <item.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.nav>
                </div>
            </div>
        </motion.header>
    );
}
