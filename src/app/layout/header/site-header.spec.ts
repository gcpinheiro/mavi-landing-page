import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SiteHeader } from './site-header';

describe('SiteHeader navigation', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [SiteHeader], providers: [provideZonelessChangeDetection()] }));

  it('opens the mobile navigation and closes it on Escape', () => {
    const fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('nav').classList.contains('is-open')).toBeTrue();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu when a section is selected', () => {
    const fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('nav a').click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
