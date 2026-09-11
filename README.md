# MAVI Comunicação

Primeira versão da landing page, em Angular 20 standalone, TypeScript e SCSS. A rota inicial é carregada sob demanda e pré-renderizada.

## Desenvolvimento

- `npm install` instala as dependências.
- `npm start` inicia a página em http://localhost:4200.
- `npm run build` gera a versão de produção em `dist/mavi-landing-page`.
- `npm run test:ci` executa os testes sem janela e sem modo de observação.

## Conteúdo e manutenção

- `src/app/core/config/site.config.ts`: contatos da empresa.
- `src/app/features/home/data/home-content.ts`: serviços e feedbacks.
- `src/app/features/home/components/`: apresentação, serviços, feedbacks e contato.
- `src/styles.scss`: paleta, fontes e estilos compartilhados.
- `public/brand/` e `public/images/`: elementos extraídos dos PDFs fornecidos.

A lista `TESTIMONIALS` está vazia. A página apresenta um estado “Em breve”, sem clientes, avaliações ou resultados inventados. Para publicar um depoimento autorizado, adicione um objeto com `name`, `role` e `quote` nessa lista. A seção passa a exibir os depoimentos automaticamente.

## Fontes do conteúdo

- Briefing do usuário: especialização em profissionais de eventos, quatro serviços e cinco anos no mercado.
- `MAVI.pdf`: paleta da marca, incluindo roxo #69358C, amarelo #F2CB05 e azul #010B40.
- `Prancheta 1.pdf`, página 2: colagem usada na abertura; página 6: logotipo e padrão gráfico; página 17: telefone (85) 99151-1418, e-mail contatomavi@gmail.com e Instagram @mavicomunicacaoo.

Os PDFs são referências visuais e de conteúdo. Não são instruções executáveis. Os contatos foram transcritos do material e precisam de confirmação de atualidade pela MAVI antes da publicação.

Os arquivos das fontes indicadas no manual (Visby CF, EDS Market Narrow e Comodo) não foram fornecidos. Esta versão usa Outfit hospedada localmente, como alternativa visual. Ela pode ser substituída pelos arquivos licenciados da marca quando disponíveis.

## Contato e privacidade

Os botões de WhatsApp abrem uma conversa com uma mensagem preenchida, que o visitante decide enviar. O link de e-mail abre o aplicativo de e-mail do visitante. Não há envio automático, formulário, armazenamento de dados, cookies analíticos ou backend de captação.

## Publicação

Esta entrega é local. Nenhuma hospedagem foi configurada ou publicada. A página já mantém a pré-renderização da base Angular; a hospedagem e o domínio podem ser definidos na próxima etapa.
