import { Component } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SITE_CONFIG } from '../../../../core/config/site.config';
@Component({ selector: 'app-contact-section', imports: [Icon, RevealOnScrollDirective], templateUrl: './contact-section.html', styleUrl: './contact-section.scss' })
export class ContactSection { protected readonly site = SITE_CONFIG; }
