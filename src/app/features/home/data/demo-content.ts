// Conteúdo demonstrativo autorizado para a etapa de design. Substituir pelo material da MAVI.
// Nomes e fotos da equipe vêm do PDF; funções específicas e biografias abaixo são sugestões.
export const TEAM = [
  { name: 'Matheus Freitas', role: 'Estratégia & posicionamento', image: 'images/matheus-freitas.webp', description: 'Um olhar atento para encontrar o que torna cada marca única e transformar essa essência em uma comunicação com direção.' },
  { name: 'Virgílio Souza', role: 'Criação & audiovisual', image: 'images/virgilio-souza.webp', description: 'Da primeira ideia ao último take, criatividade para contar histórias, captar a energia dos eventos e fazer marcas serem lembradas.' },
] as const;

export const SERVICE_DELIVERABLES: Readonly<Record<string, readonly string[]>> = {
  '01': ['Planejamento e calendário editorial', 'Criação de posts, legendas e publicação', 'Acompanhamento de desempenho'],
  '02': ['Conceito criativo e construção da marca', 'Logotipo, cores e tipografia', 'Manual de marca e aplicações digitais'],
  '03': ['Planejamento criativo e roteiros', 'Captação de fotos e vídeos', 'Edição de reels e peças audiovisuais'],
  '04': ['Alinhamento e roteiro de cobertura', 'Captação de bastidores e momentos-chave', 'Stories, registros e vídeo de melhores momentos'],
};

export const PROCESS = [
  { number: '01', title: 'Uma boa conversa', description: 'Você conta sobre sua marca, seu momento e o que deseja conquistar.' },
  { number: '02', title: 'Um plano com a sua cara', description: 'Desenhamos a estratégia e uma proposta com escopo, formatos e prazos.' },
  { number: '03', title: 'Criatividade em ação', description: 'Planejamos, criamos e produzimos com você por perto em cada aprovação.' },
  { number: '04', title: 'Sua marca em movimento', description: 'Colocamos o plano no mundo e acompanhamos os próximos passos juntos.' },
] as const;

export const AUDIENCES = ['Cerimonialistas', 'Buffets & gastronomia', 'Espaços de eventos', 'Decoradores', 'Fotógrafos & filmmakers', 'Produtores de eventos'];

export const ENGAGEMENTS = [
  { number: '01', title: 'Um novo começo', type: 'PROJETO PONTUAL', description: 'Para tirar uma ideia do papel ou dar uma nova identidade à sua marca.', items: ['Identidade visual e aplicações', 'Campanhas e conteúdos pontuais', 'Escopo e prazo definidos'], label: 'Vamos tirar sua ideia do papel', featured: false },
  { number: '02', title: 'Presença que cresce', type: 'PARCERIA MENSAL', description: 'Para manter sua comunicação ativa, consistente e conectada ao seu posicionamento.', items: ['Planejamento e gestão de redes', 'Produção recorrente de conteúdo', 'Acompanhamento e alinhamentos'], label: 'Quero uma parceria com a MAVI', featured: true },
  { number: '03', title: 'Seu grande momento', type: 'POR EVENTO', description: 'Para registrar a experiência e fazer a história continuar depois do último aplauso.', items: ['Planejamento da cobertura', 'Captação presencial e bastidores', 'Conteúdo editado para suas redes'], label: 'Vamos conversar sobre meu evento', featured: false },
] as const;

export const PORTFOLIO = {
  video: 'videos/event-demo.mp4',
  poster: 'images/event-demo-poster.jpg',
  title: 'A energia passa. O conteúdo fica.',
  images: [
    { image: 'images/portfolio-identidade.webp', title: 'Uma identidade cheia de personalidade.', tag: 'IDENTIDADE VISUAL', alt: 'Mockup de caderno com o padrão gráfico colorido da MAVI' },
    { image: 'images/portfolio-eventos.webp', title: 'Presença em cada ponto de contato.', tag: 'UNIVERSO DA MARCA', alt: 'Mockup de credenciais e cordões com a identidade visual da MAVI' },
  ],
} as const;
