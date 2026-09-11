import { Service, Testimonial } from '../../../shared/models/home-content.model';
export const SERVICES: readonly Service[] = [
  { number: '01', title: 'Gestão de redes sociais', description: 'Presença com intenção. Uma comunicação alinhada ao seu posicionamento para aproximar sua marca das pessoas certas.', tag: 'ESTRATÉGIA QUE CONECTA', icon: 'social' },
  { number: '02', title: 'Identidade visual', description: 'Sua essência em cada detalhe. Uma identidade que traduz quem você é e torna sua marca reconhecível.', tag: 'PERSONALIDADE QUE MARCA', icon: 'identity' },
  { number: '03', title: 'Produção de conteúdo', description: 'Seu trabalho merece ser visto. Conteúdo audiovisual que valoriza sua entrega e dá vida à história da sua marca.', tag: 'CONTEÚDO QUE ENVOLVE', icon: 'video' },
  { number: '04', title: 'Cobertura de eventos', description: 'Do bastidor ao grande momento. Registros que capturam a energia do evento e mostram o valor de quem faz acontecer.', tag: 'MOMENTOS QUE PERMANECEM', icon: 'event' },
];
// Depoimentos fictícios autorizados pelo usuário exclusivamente para visualizar o design.
export const TESTIMONIALS: readonly Testimonial[] = [
  { name: 'Marina Alves', initials: 'MA', role: 'Cerimonialista', quote: 'Eu queria que minhas redes transmitissem o mesmo cuidado que coloco em cada evento. A MAVI entendeu minha essência e deu uma nova direção à minha comunicação.', demo: true },
  { name: 'Rafael Costa', initials: 'RC', role: 'Produtor de eventos', quote: 'Do alinhamento aos bastidores, tudo foi pensado com atenção. O conteúdo conseguiu traduzir a energia do evento e valorizar quem fez parte dele.', demo: true },
  { name: 'Beatriz Lima', initials: 'BL', role: 'Gestora de espaço de eventos', quote: 'Nossa marca ganhou uma presença muito mais consistente. Hoje, cada publicação conversa com a experiência que queremos oferecer aos nossos clientes.', demo: true },
];
