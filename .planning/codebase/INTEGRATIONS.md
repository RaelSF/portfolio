# Integrations

## Web3Forms
- **Propósito**: Mapeamento e gestão do fluxo de contato do site sem backend próprio.
- **Implementação**: Localizado em `components/ContactForm.tsx`.
- **Comunicação**: Fetch assíncrono padrão configurado para endpoint `https://api.web3forms.com/submit` utilizando dados da interface JSON originária de um `FormData`.
- **Segurança**: Chave pública controlada na AWS Amplify/Next via `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`. Sem exposição do Secret em código-fonte na branch.

Não há outras dependências de bancos de dados como PostgreSQL/SQLite nesta vertente estática, dependendo unicamente do repositório estático final para Deployments via GitHub e AWS Amplify.
