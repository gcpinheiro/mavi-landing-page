import { Component } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SERVICES } from '../../data/home-content';
@Component({ selector: 'app-services-section', imports: [Icon, RevealOnScrollDirective], templateUrl: './services-section.html', styleUrl: './services-section.scss' })
export class ServicesSection { protected readonly services = SERVICES; }
