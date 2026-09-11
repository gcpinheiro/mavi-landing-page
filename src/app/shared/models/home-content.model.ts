export type ServiceIcon = 'social' | 'identity' | 'video' | 'event';
export interface Service { number: string; title: string; description: string; tag: string; icon: ServiceIcon; }
export interface Testimonial { name: string; role: string; quote: string; initials: string; demo: boolean; }
