import { Component, input } from '@angular/core';
@Component({
  selector: 'app-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    @switch (name()) {
      @case ('social') { <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/> }
      @case ('identity') { <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/> }
      @case ('video') { <rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3V9Z"/> }
      @case ('event') { <path d="m8 5 1-2h6l1 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2h4Z"/><circle cx="12" cy="12" r="4"/> }
      @case ('message') { <path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z"/><path d="M8 8c1 4 3 6 7 7l1-2-3-1-1 1-1-1 1-1-1-3H8Z"/> }
      @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/> }
      @default { <path d="M5 19 19 5M5 5h14v14"/> }
    }
  </svg>`,
  styles: `:host{display:inline-flex;width:1.5rem;height:1.5rem;flex-shrink:0}svg{width:100%;height:100%}`,
})
export class Icon { readonly name = input('arrow'); }
