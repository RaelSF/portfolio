# Structure

```text
meu-portfolio/
├── app/                  # Rotas principais Next.js (App Router)
│   ├── globals.css       # Configurações raízes @theme de Tailwind v4
│   ├── layout.tsx        # Container HTML, configuração SEO (Metadata) Fontes e Toast Provider
│   └── page.tsx          # Single-Page render (Hero, Sobre, Skills, Experience, Projects)
├── components/           # Componentes Modulares de Interface UI
│   ├── ContactForm.tsx   # Formulaćo isolado de envios de web3forms
│   ├── Navbar.tsx        # Navegação com interações de scroll ativação e glassmorphism
│   ├── ScrollReveal.tsx  # Wrapper modular pra animações ao surgir na viewport
│   ├── SectionHeading.tsx# Re-usable cabeçalhos de secção
│   └── Typewriter.tsx    # Efeito máquina de escrever focado em Hero
├── data/                 # Fonte de dados de conteúdo
│   └── index.ts          # Centralização em dict das infos: PROFILE, STATS, EXPERIENCES, PROJECTS
├── public/               # Static assets
│   ├── MinhaFoto.png     # Imagem original de perfil
│   ├── curriculo.pdf     # Arquivo currículo referenciado para download na page
├── .planning/            # Get Shit Done Framework State Directory
├── .env.local            # Contém chaves e environments privados (não rastreados)
└── next.config.ts        # Arquivo definidor de output export
```
