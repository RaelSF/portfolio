# Constraints and Code Concerns

## Atualidade

1. **Volume do Framer Motion e Performance** (Risco Baixo a Médio): 
   Atualmente 100% da Landing Page (`page.tsx`) está coberta pelo Framework Framer Motion e a importação é feita puramente. Em crescimento do Portfólio, é considerável implementar as abordagens do `LazyMotion` do respectivo construtor caso o bundle de build exija cortes severos.

2. **Security Leak Risk Mitigation**:
   O Web3Forms Access Key fora originalmente fixo na string (Hardcode) de envios mas corrigido e movido ao `process.env.NEXT_PUBLIC_...`. Carece ser lembrado do upload idêntico na plataforma AWS Amplify ou onde ocorrer o deploy (Config do HOST env keys) antes do primeiro test on prod de subida sob risco de retorno 403 API.
   
3. **Contraste da Imagem vs Cores de Tema**:
   As modificação visuais em `tailwindcss` classes foram feitas misturando propriedades não-concorrentes (opacidade, contraste e saturação). Um refinamento fotossensorial final real pode ser feito pelo usuário ao checar a saturação roxa que compõe a imagem num dispositivo end-user (celular vs monitor).
