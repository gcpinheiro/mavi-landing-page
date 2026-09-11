import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { Icon } from '../../shared/ui/icon';
@Component({ selector: 'app-site-header', imports: [Icon], templateUrl: './site-header.html', styleUrl: './site-header.scss' })
export class SiteHeader {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly menuOpen = signal(false);
  private readonly toggle = viewChild<ElementRef<HTMLButtonElement>>('menuToggle');
  protected closeMenu(): void { this.menuOpen.set(false); }
  @HostListener('document:keydown.escape') protected onEscape(): void {
    if (this.menuOpen()) { this.closeMenu(); this.toggle()?.nativeElement.focus(); }
  }
  @HostListener('document:click', ['$event']) protected onOutsideClick(event: MouseEvent): void {
    if (!(event.target instanceof Node) || this.host.contains(event.target)) return;
    this.closeMenu();
  }
}
