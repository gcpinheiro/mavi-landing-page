import { Component, input } from '@angular/core';
@Component({
  selector: 'app-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    @switch (name()) {
      @case ('whatsapp') { <svg viewBox="0 0 32 32" fill="currentColor" stroke="none"><path d="M16 .9A14.8 14.8 0 0 0 3.2 23.1L1.1 31l8.1-2.1A14.8 14.8 0 1 0 16 .9Zm0 27A12.2 12.2 0 0 1 9.7 26l-.4-.2-4.8 1.3 1.3-4.7-.3-.5A12.2 12.2 0 1 1 16 27.9Zm6.7-9.1c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.2-1.1 1.4-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-.9-1.9-2.1-2.1-2.5-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.6 4 6.4 5.6.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"/></svg> }
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
