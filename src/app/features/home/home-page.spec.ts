import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';

describe('MAVI landing page', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HomePage], providers: [provideZonelessChangeDetection()] }));

  it('identifies every demonstration testimonial as fictional', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const section: HTMLElement = fixture.nativeElement.querySelector('#feedbacks');
    const quotes = section.querySelectorAll('.testimonial');
    expect(quotes.length).toBe(3);
    quotes.forEach(quote => expect(quote.textContent).toContain('DEPOIMENTO FICTÍCIO'));
    expect(fixture.nativeElement.querySelector('.design-preview')).not.toBeNull();
  });

  it('resolves every section link and supplies a WhatsApp destination with a draft', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
      expect(page.querySelector(link.getAttribute('href')!)).withContext(link.textContent ?? '').not.toBeNull();
    });
    const contact = page.querySelector<HTMLAnchorElement>('#contato a[href^="https://wa.me/"]')!;
    const destination = new URL(contact.href);
    expect(destination.pathname).toBe('/5585991511418');
    expect(destination.searchParams.get('text')).toContain('posicionamento');
    expect(page.querySelector<HTMLAnchorElement>('.whatsapp-float')?.href).toBe(contact.href);
  });

  it('provides an accessible video player without unsolicited autoplay', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const video: HTMLVideoElement = fixture.nativeElement.querySelector('#portfolio video');
    expect(video.controls).toBeTrue();
    expect(video.autoplay).toBeFalse();
    expect(video.getAttribute('preload')).toBe('none');
    expect(video.getAttribute('aria-label')).toContain('ilustrativo');
    video.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.video-error')).not.toBeNull();
  });
});
