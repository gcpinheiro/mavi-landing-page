import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { TESTIMONIALS } from '../../data/home-content';
@Component({ selector: 'app-feedbacks-section', imports: [RevealOnScrollDirective], templateUrl: './feedbacks-section.html', styleUrl: './feedbacks-section.scss' })
export class FeedbacksSection { protected readonly testimonials = TESTIMONIALS; }
