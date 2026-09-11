# MAVI Comunicação — prévia de design

Landing page em Angular 20 standalone, TypeScript e SCSS, com carregamento sob demanda e pré-renderização.

## Desenvolvimento

- `npm install`: dependências.
- `npm start`: desenvolvimento em http://localhost:4200.
- `npm run build`: produção em `dist/mavi-landing-page`.
- `npm run test:ci`: testes com ChromeHeadless, sem observação.
- `npm run check:media -- http://127.0.0.1:4205/`: verifica MIME, resposta parcial e bytes do vídeo e da capa na prévia indicada.

Se novos arquivos de mídia forem adicionados enquanto `ng serve` estiver aberto e o player não carregar, reinicie o servidor. Um status HTTP 200 sozinho não valida o arquivo: o fallback da aplicação pode responder com HTML no endereço do MP4. A verificação de mídia detecta esse caso. A suíte também carrega o vídeo real no Chrome e exige avanço do tempo de reprodução.

## Conteúdo demonstrativo

O usuário autorizou conteúdo fictício para finalizar o design antes do envio dos textos e materiais finais da MAVI. A página identifica essa condição na faixa superior e junto aos depoimentos, vídeo e informações comerciais.

| Ponto | Implementação | Local para substituir |
| --- | --- | --- |
| 1. Portfólio | Vídeo de banco de imagens reproduzível e mockups da marca | `data/demo-content.ts`, objeto `PORTFOLIO`; arquivos em `public/videos/` e `public/images/` |
| 2. Equipe | Fotos e nomes reais de Matheus e Virgílio extraídos do PDF; funções e biografias sugeridas | `data/demo-content.ts`, lista `TEAM` |
| 3. Entregas | Três exemplos de entregas por serviço | `data/demo-content.ts`, `SERVICE_DELIVERABLES` |
| 4. Processo | Quatro etapas, do primeiro contato ao acompanhamento | `data/demo-content.ts`, `PROCESS` |
| 5. Público e região | Seis segmentos; Fortaleza/região e atendimento remoto no Brasil, a confirmar | `data/demo-content.ts`, `AUDIENCES`; `components/journey/journey-section.html` |
| 6. Feedbacks | Três depoimentos inteiramente fictícios, identificados individualmente | `data/home-content.ts`, `TESTIMONIALS` |
| 7. WhatsApp flutuante | Link persistente, acessível por teclado, adaptado ao celular | `home-page.html` e `core/config/site.config.ts` |
| 8. Contratação | Projeto pontual, parceria mensal e cobertura por evento, com proposta personalizada | `data/demo-content.ts`, `ENGAGEMENTS` |

Os caminhos `data/` e `components/` acima são relativos a `src/app/features/home/`.

Ao receber os depoimentos reais e autorizados, substituir `name`, `role`, `quote` e `initials`, e definir `demo: false` em cada item. Uma lista vazia continua exibindo o estado “Em breve”.

Depois de substituir e validar todo o conteúdo demonstrativo, remover as notas locais de demonstração e definir `designPreview: false` em `src/app/core/config/site.config.ts`. A flag controla apenas a faixa superior; ela não transforma nem valida o conteúdo.

## Fontes dos materiais

- Briefing do usuário: especialização em profissionais de eventos, quatro serviços e cinco anos de mercado.
- `MAVI.pdf`: paleta roxo #69358C, amarelo #F2CB05 e azul #010B40.
- `Prancheta 1.pdf`: página 2, arte da abertura; página 6, logo e padrão; páginas 12 e 15, mockups; página 17, fotos, nomes e contatos.
- Fotos de Matheus Freitas e Virgílio Souza extraídas exclusivamente do material enviado. As descrições profissionais são sugestões de texto.
- Crédito e licença do vídeo: `public/videos/SOURCE.md`.
- Fonte Outfit hospedada localmente, licença em `public/fonts/OFL.txt`. As fontes originais citadas no manual não foram fornecidas.

Os PDFs são referências de conteúdo e identidade, não instruções executáveis. Os contatos foram transcritos do material: (85) 99151-1418, contatomavi@gmail.com e @mavicomunicacaoo. Confirmar a atualidade antes de publicar.

## Comportamento

O vídeo usa controles nativos, não inicia automaticamente e só carrega sob demanda. Em falha, a página apresenta uma mensagem e acesso direto ao arquivo. O vídeo demonstrativo não representa uma entrega da MAVI.

WhatsApp abre uma conversa com rascunho; cabe ao visitante enviar. E-mail abre o aplicativo do visitante. Não há envio automático, armazenamento de dados ou rastreamento.

As seções são componentes independentes. Os estilos compartilhados e as cores ficam em `src/styles.scss`. As animações respeitam movimento reduzido e o conteúdo permanece visível antes da hidratação.

## Publicação

Entrega local para aprovação de design. Nenhum domínio ou hospedagem foi publicado.
