import { Component } from '@angular/core';
import { AUDIENCES, PROCESS } from '../../data/demo-content';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
@Component({ selector: 'app-journey-section', imports: [RevealOnScrollDirective], templateUrl: './journey-section.html', styleUrl: './journey-section.scss' })
export class JourneySection { protected readonly audiences = AUDIENCES; protected readonly steps = PROCESS; }
