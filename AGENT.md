```markdown
# Orientações do projeto

## Objetivo

Criar uma nova landing page utilizando o projeto da Dra. Ilka Menezes
como base técnica e estrutural.

Utilizar os dois projetos abaixo como referências de design:

1. C:\Users\gabri\Desktop\ilka-advocacia
2. C:\Users\gabri\Desktop\Hubscript\GabrielCastro.Portfolio

O conteúdo, a identidade visual e as funcionalidades devem seguir o
briefing da nova landing page.

## Referências técnicas e de design

Antes de implementar, analisar os dois projetos para identificar padrões
aplicáveis ao novo trabalho.

### Dra. Ilka Menezes

Referência principal para:

- Organização do projeto Angular e divisão de componentes.
- Composição do banner e apresentação profissional.
- Hierarquia tipográfica e espaçamento entre seções.
- Cards de serviços, trajetória e público-alvo.
- Formulário, chamadas para contato e botão flutuante.
- Responsividade e animações de entrada durante a rolagem.

### Gabriel Castro Portfolio

Referência complementar para:

- Composição visual e organização das informações.
- Navegação e apresentação de conteúdo profissional.
- Tratamento de títulos, destaques e chamadas para ação.
- Componentes, interações e soluções responsivas.

### Aplicação das referências

- Combinar os padrões mais adequados ao público e ao objetivo da nova página.
- Criar uma identidade visual coerente com o briefing.
- Adaptar cores, tipografia, imagens, logo e favicon à nova marca.
- Aproveitar a arquitetura e os componentes pertinentes.
- Incluir seções e funcionalidades conforme a necessidade do novo projeto.
- Substituir textos, contatos, links e metadados dos projetos originais.
- Trabalhar exclusivamente na pasta do novo projeto, preservando as referências.
- Não copiar `.git`, `node_modules`, `dist`, arquivos temporários ou credenciais.
- Configurar a hospedagem com identificadores próprios, sem reutilizar
  configurações de publicação dos projetos de referência.

## Tecnologia e arquitetura

Seguir a base técnica do projeto da Dra. Ilka Menezes:

- Angular 20 com componentes standalone.
- TypeScript e SCSS.
- Angular Router com carregamento sob demanda.
- Pré-renderização da landing page.
- Reactive Forms para formulários.
- Signals quando houver estado de interface.

Manter uma organização semelhante:

src/app/
  core/
    config/
    services/
  features/
    home/
      components/
      data/
  layout/
    header/
    footer/
  shared/
    directives/
    models/
    ui/

public/
  brand/
  images/

Centralizar informações da marca e contatos em `core/config`.
Organizar conteúdos repetidos em arquivos de dados tipados.
Reutilizar componentes compartilhados para manter consistência.
Separar apresentação, dados e integrações conforme a responsabilidade
de cada arquivo.

## Identidade visual e conteúdo

- Definir cores e tipografia a partir da marca e do briefing.
- Centralizar os principais valores visuais em variáveis CSS.
- Manter consistência em botões, bordas, ícones, sombras e espaçamentos.
- Criar ou adaptar logo e favicon conforme solicitado.
- Revisar todas as referências à identidade dos projetos anteriores.
- Atualizar título da página, descrição, idioma e metadados sociais.
- Utilizar apenas informações fornecidas ou confirmadas pelo usuário.
- Não inventar números, qualificações, depoimentos, clientes ou resultados.
- Revisar ortografia, clareza e consistência dos textos.
- Priorizar conteúdo relevante para o público e chamadas para ação claras.

## Experiência e acessibilidade

- Garantir boa apresentação em celulares, tablets e computadores.
- Evitar rolagem horizontal, textos cortados e sobreposição de elementos.
- Usar HTML semântico, hierarquia correta de títulos e rótulos nos campos.
- Fornecer descrições adequadas para imagens relevantes.
- Manter contraste suficiente e foco visível nos elementos interativos.
- Garantir navegação por teclado, incluindo abertura e fechamento do menu.
- Manter botões e links confortáveis para interação por toque.
- Aplicar animações discretas de entrada ao rolar a página.
- Respeitar a preferência `prefers-reduced-motion`.
- Manter o conteúdo pré-renderizado visível antes da execução do JavaScript.
- Encerrar observadores e listeners quando os componentes forem destruídos.

## Formulários e integrações

- Implementar validação e mensagens de erro claras.
- Identificar campos obrigatórios e opcionais.
- Preservar os dados preenchidos quando houver falha.
- Apresentar estados de carregamento quando existir uma operação assíncrona.
- Informar sucesso somente após confirmação real da operação.
- Manter credenciais e chaves privadas exclusivamente no servidor.
- Validar também no servidor quando houver integração com uma API.
- Implementar proteção contra abuso quando houver envio público de mensagens.
- Adicionar provedores e serviços externos conforme a necessidade definida.

O formulário da referência utiliza `mailto`: ele abre um rascunho no
aplicativo de e-mail do visitante. Isso não representa envio automático.
Se esse comportamento for reutilizado, explicá-lo claramente na interface.

## Desenvolvimento e manutenção

- Ler as instruções existentes do novo projeto antes de alterar arquivos.
- Preservar alterações existentes do usuário.
- Manter dependências e lockfile consistentes.
- Aproveitar bibliotecas já instaladas quando atenderem à necessidade.
- Evitar dependências adicionais para funcionalidades simples.
- Escrever código legível, com nomes claros e responsabilidades bem definidas.
- Remover conteúdo de exemplo que não pertença à nova landing page.
- Manter arquivos temporários e resultados de compilação fora do código-fonte.
- Documentar configurações e integrações necessárias no README.

## Validação e entrega

- Executar `npm run build` após concluir as alterações.
- Executar `npm test` quando houver mudanças de comportamento.
- Criar testes para fluxos relevantes, evitando testes redundantes para
  simples ajustes de texto ou estilo.
- Conferir links, contatos, caminhos de imagens, logo e favicon.
- Verificar se os metadados correspondem à nova marca.
- Corrigir erros de compilação e falhas pertinentes antes da entrega.
- Informar o que foi implementado, como foi validado e o que depende de
  configuração externa.
- Não afirmar que uma funcionalidade foi testada sem realizar a verificação.
- Publicar somente quando a publicação fizer parte do pedido do usuário.
```
