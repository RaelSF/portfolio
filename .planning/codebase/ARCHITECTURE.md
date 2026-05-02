# Architecture

O projeto se adequa a um padrão "Static Single Page Portfolio" moderno alicerçado sobre Next.js (App Directory).

1. **Client vs Server Components**:
   - Devido ao alto grau de uso da biblioteca **Framer Motion**, a vasta maioria dos componentes (Navbar, ContactForm, ScrollReveal) carrega a diretiva `'use client'` em seus topos devido à detecção de `whileInView`, `hover`, ou hooks do React `useState() / useEffect()`.
   - O projeto é, do ponto de vista de hospedagem final, construído staticamente (SSG) por meio da flag `output: 'export'`. Dessa maneira, não existem Next.js API endpoints internos operando.

2. **Decoupled Data**:
   - As informações estruturais do Portfólio (Skills, Projetos, Biografia) estão isoladas na camada conceitual `data/index.ts`, desacoplando completamente hardcode textual gigantesco do arquivo componente.

3. **Design System**:
   - Totalmente guiado pelas custom @theme directives de Tailwindcss versão 4 alinhados em `app/globals.css`. Todo glassmorphism, Aurora backgrounds e gradients textuais dependem de classes CSS puras criadas ali, que então se fundem no HTML em vez de stylesheets isoladas.
