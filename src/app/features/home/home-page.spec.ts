import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';

describe('MAVI landing page', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HomePage], providers: [provideZonelessChangeDetection()] }));

  it('shows the feedback empty state without fabricated quotes', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const section: HTMLElement = fixture.nativeElement.querySelector('#feedbacks');
    expect(section.textContent).toContain('EM BREVE');
    expect(section.querySelector('blockquote')).toBeNull();
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
  });
});
