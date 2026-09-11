import { Service, Testimonial } from '../../../shared/models/home-content.model';
export const SERVICES: readonly Service[] = [
  { number: '01', title: 'Gestão de redes sociais', description: 'Presença com intenção. Uma comunicação alinhada ao seu posicionamento para aproximar sua marca das pessoas certas.', tag: 'ESTRATÉGIA QUE CONECTA', icon: 'social' },
  { number: '02', title: 'Identidade visual', description: 'Sua essência em cada detalhe. Uma identidade que traduz quem você é e torna sua marca reconhecível.', tag: 'PERSONALIDADE QUE MARCA', icon: 'identity' },
  { number: '03', title: 'Produção de conteúdo', description: 'Seu trabalho merece ser visto. Conteúdo audiovisual que valoriza sua entrega e dá vida à história da sua marca.', tag: 'CONTEÚDO QUE ENVOLVE', icon: 'video' },
  { number: '04', title: 'Cobertura de eventos', description: 'Do bastidor ao grande momento. Registros que capturam a energia do evento e mostram o valor de quem faz acontecer.', tag: 'MOMENTOS QUE PERMANECEM', icon: 'event' },
];
// Incluir apenas depoimentos reais enviados e autorizados pela MAVI.
export const TESTIMONIALS: readonly Testimonial[] = [];
