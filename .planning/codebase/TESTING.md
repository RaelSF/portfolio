# Testing

Este front-end possui pouca lógica impulsionada que demande de estritos Unit Tests baseados em cobertura (Coverage) isolados como Jest, visto o desacoplamento principal do site basear-se em marcação, estilização (Visuals) e mapeamento dos arrays fixos da pasta Data.

**Testes Atuais:**
- *Build Verification*: Realizado e bem sucedido por meio de `npm run build` testando o type-checking Next JS compiler (SWC minification check).
- *Linting*: ESLint providenciado por default em Next.js para caçar unused components (não existe atualmente falha reportada no workflow).
- *Automated Visual Walkthrough*: Sem Playwright rodável (falha no ecossistema host testado local) mas validado logicamente em DOM.

**Cobertura de Qualidade Manual:**
1. Navegação Click+Scroll (Validada a suave âncora `scrollIntoView` pra impedir quebras de URLs estáticas num host simples).
2. Download e Resgates de Links (Links setados de `PROJECTS` redirecionam corretamente validado).
3. Teste do Fluxo API Frontend (Verificação em `ContactForm.tsx` via Toaster Sonner de que não há falso positivos de erros HTTP).
