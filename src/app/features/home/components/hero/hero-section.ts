import { Component } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon';
import { SITE_CONFIG } from '../../../../core/config/site.config';
@Component({ selector: 'app-hero-section', imports: [Icon], templateUrl: './hero-section.html', styleUrl: './hero-section.scss' })
export class HeroSection { protected readonly site = SITE_CONFIG; }
