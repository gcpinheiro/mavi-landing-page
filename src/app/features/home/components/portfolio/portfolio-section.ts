import { Component, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/demo-content';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
@Component({ selector: 'app-portfolio-section', imports: [RevealOnScrollDirective], templateUrl: './portfolio-section.html', styleUrl: './portfolio-section.scss' })
export class PortfolioSection {
  protected readonly portfolio = PORTFOLIO;
  protected readonly videoFailed = signal(false);
}
