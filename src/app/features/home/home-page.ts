import { Component } from '@angular/core';
import { SiteHeader } from '../../layout/header/site-header';
import { SiteFooter } from '../../layout/footer/site-footer';
import { Icon } from '../../shared/ui/icon';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { HeroSection } from './components/hero/hero-section';
import { ServicesSection } from './components/services/services-section';
import { FeedbacksSection } from './components/feedbacks/feedbacks-section';
import { ContactSection } from './components/contact/contact-section';
import { PortfolioSection } from './components/portfolio/portfolio-section';
import { TeamSection } from './components/team/team-section';
import { JourneySection } from './components/journey/journey-section';
import { EngagementsSection } from './components/engagements/engagements-section';
import { SITE_CONFIG } from '../../core/config/site.config';
@Component({ selector: 'app-home-page', imports: [SiteHeader, SiteFooter, Icon, RevealOnScrollDirective, HeroSection, ServicesSection, FeedbacksSection, ContactSection, PortfolioSection, TeamSection, JourneySection, EngagementsSection], templateUrl: './home-page.html', styleUrl: './home-page.scss' })
export class HomePage { protected readonly site = SITE_CONFIG; }
