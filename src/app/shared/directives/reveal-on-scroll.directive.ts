import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
@Directive({ selector: '[appReveal]' })
export class RevealOnScrollDirective {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motion.matches || !('IntersectionObserver' in window) || !element.animate) return;
      let animation: Animation | undefined;
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          animation = element.animate([{ transform: 'translateY(18px)' }, { transform: 'translateY(0)' }], { duration: 600, easing: 'ease-out' });
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      const stopMotion = () => { if (motion.matches) { animation?.cancel(); observer.disconnect(); } };
      motion.addEventListener('change', stopMotion);
      observer.observe(element);
      destroy.onDestroy(() => { observer.disconnect(); animation?.cancel(); motion.removeEventListener('change', stopMotion); });
    });
  }
}
