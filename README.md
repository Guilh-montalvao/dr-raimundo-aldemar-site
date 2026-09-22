# Dr. Raimundo Aldemar

Site responsivo em React, TypeScript e Tailwind CSS, usando a estrutura App Router do Next.js. A execução e a publicação no Sites usam o adaptador Vinext incluído no projeto. Animações com GSAP e ScrollTrigger; componentes acessíveis Radix para o menu e as áreas de atendimento.

## Desenvolvimento

- Instale as dependências com `pnpm install`.
- Execute `pnpm dev`.
- Compile com `pnpm build`.
- Confira os tipos com `pnpm exec tsc --noEmit`.

O conteúdo está em `app/page.tsx`; os estilos estão em `app/globals.css`; metadados e fontes em `app/layout.tsx`.

## Conteúdo e imagens

As seis fotografias e a logomarca foram fornecidas pelo usuário. As fotos em `public/media` estão otimizadas em WebP. O arquivo `referencia-visual.webp` é o guia visual enviado pelo usuário: orienta cores e tipografia e não aparece como conteúdo clínico na página. Os números, depoimentos e dados da marca fictícia contidos nesse guia não foram reutilizados.

CRM-DF 20094 e RQE 13936 conforme os dados fornecidos pelo usuário. Graduação, residência, titulação, endereços e telefones conferidos nas páginas oficiais das clínicas em 22/09/2026:
- https://www.cdootorrino.com.br/dr-raimundo-aldemar-cdo-otorrino.html
- https://www.otogama.com.br/equipe-medica-clinica-otogama-otorrino.html
- https://otorhynusclinica.com.br/dr-raimundo/

Os links de WhatsApp iniciam uma conversa com a unidade escolhida; não confirmam consultas automaticamente. Não há formulário de coleta de informações, sistema de prontuário ou backend de agendamento.

## Acessibilidade e movimento

Navegação por teclado, link para pular ao conteúdo, nomes acessíveis, menu móvel com gerenciamento de foco e suporte a `prefers-reduced-motion`. Fotografias são usadas como fundos de seções, com descrições acessíveis. Fontes Manrope e Inter servidas localmente.
