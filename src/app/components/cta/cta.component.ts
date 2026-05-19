import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  email = signal('');
  submitted = signal(false);
  error = signal(false);

  submit(): void {
    const val = this.email();
    if (val && val.includes('@') && val.includes('.')) {
      this.submitted.set(true);
      this.error.set(false);
    } else {
      this.error.set(true);
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
