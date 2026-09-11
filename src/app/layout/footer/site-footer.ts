import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../core/config/site.config';
import { Icon } from '../../shared/ui/icon';
@Component({
  selector: 'app-site-footer', imports: [Icon],
  template: `<footer><div class="container footer-top"><a href="#inicio" aria-label="Voltar ao início"><img src="brand/mavi-logo.png" alt="MAVI Comunicação" width="145" height="76" /></a><p>Comunicação com personalidade.<br>Posicionamento com propósito.</p><a class="instagram" [href]="site.instagramUrl" target="_blank" rel="noopener noreferrer">{{ site.instagram }} <app-icon /></a></div><div class="container footer-bottom"><span>© {{ year }} MAVI Comunicação.</span><span>Feito para quem faz acontecer.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>`,
  styles: `footer{background:var(--purple);color:#fff;padding:3.4rem 0 1.5rem}.footer-top{display:flex;justify-content:space-between;align-items:center;gap:2rem;padding-bottom:2.5rem}.footer-top img{width:128px;height:auto}.footer-top p{font-size:1rem;line-height:1.6;margin:0}.instagram{display:flex;gap:.8rem;align-items:center;text-decoration:none;font-size:.9375rem}.instagram app-icon{width:1rem;height:1rem}.footer-bottom{display:flex;justify-content:space-between;gap:1rem;border-top:1px solid #ffffff35;padding-top:1.4rem;font-size:.8125rem;color:#ffffffc9}.footer-bottom a{text-decoration:none}@media(max-width:700px){.footer-top{flex-wrap:wrap;justify-content:flex-start;gap:1.5rem 2rem}.footer-top p{font-size:.9375rem}.instagram{width:100%}.footer-bottom{flex-wrap:wrap}.footer-bottom>span:nth-child(2){display:none}}`,
})
export class SiteFooter { protected readonly site = SITE_CONFIG; protected readonly year = new Date().getFullYear(); }
