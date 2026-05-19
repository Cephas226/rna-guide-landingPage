import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService implements OnDestroy {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  observe(el: Element): void {
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
