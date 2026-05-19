import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scroll-reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  @Input() revealDelay: number = 0;

  private el = inject(ElementRef<HTMLElement>);
  private scrollReveal = inject(ScrollRevealService);

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.classList.add('reveal');
    if (this.revealDelay > 0) {
      el.classList.add(`reveal-delay-${this.revealDelay}`);
    }
    this.scrollReveal.observe(el);
  }
}
