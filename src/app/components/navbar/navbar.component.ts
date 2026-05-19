import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
