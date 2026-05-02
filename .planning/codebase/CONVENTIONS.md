# Conventions

1. **Client Components Declaration**:
   - Qualquer arquivo sob `components/` necessita utilizar `'use client';` como primeira sublinha caso importe Hooks do react primitivo ou módulos framer-motion (motion.div).

2. **Tailwind e Tailwind 4**:
   - Tailwind 4 utiliza injeção implícita nativa. Sem tailwind.config.ts desnecessário, as variáveis principais da theme foram injetadas a partir da tag `@theme` direto no escopo do globals.css para manipulação imediata com intellisense.

3. **Nomenclatura**:
   - React Components: `PascalCase` e extensões baseam-se estritamente em `.tsx`.
   - Utility Folders e Functions menores (como pastas): Em formato `kebab-case` se houver, ou minúsculas p/ data.

4. **Tratamento de Exceções em Forms**:
   - Uso restrito a verificação direta do Response HTTP Status Code (`res.ok` || `status === 200`) e pre-saves da SyntheticEvent referência caso haja assincronia no React 18/19.
