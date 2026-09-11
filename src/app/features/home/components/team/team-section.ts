import { Component } from '@angular/core';
import { TEAM } from '../../data/demo-content';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
@Component({ selector: 'app-team-section', imports: [RevealOnScrollDirective], templateUrl: './team-section.html', styleUrl: './team-section.scss' })
export class TeamSection { protected readonly team = TEAM; }
