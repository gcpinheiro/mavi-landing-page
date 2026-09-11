import { Component } from '@angular/core';
import { ENGAGEMENTS } from '../../data/demo-content';
import { SITE_CONFIG } from '../../../../core/config/site.config';
import { Icon } from '../../../../shared/ui/icon';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
@Component({ selector: 'app-engagements-section', imports: [Icon, RevealOnScrollDirective], templateUrl: './engagements-section.html', styleUrl: './engagements-section.scss' })
export class EngagementsSection { protected readonly plans = ENGAGEMENTS; protected readonly site = SITE_CONFIG; }
