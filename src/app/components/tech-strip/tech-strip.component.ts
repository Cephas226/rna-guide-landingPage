import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-tech-strip',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <div appReveal class="bg-white border-y border-sand-dark px-8 md:px-16 py-5 flex gap-8 items-center flex-wrap">
      <span class="text-xs text-muted uppercase tracking-[0.12em] whitespace-nowrap">Stack technique</span>
      <div class="flex gap-3 flex-wrap">
        @for (tech of techs; track tech) {
          <span class="font-mono text-xs text-muted px-2.5 py-1 border border-sand-dark rounded-sm whitespace-nowrap">
            {{ tech }}
          </span>
        }
      </div>
    </div>
  `,
})
export class TechStripComponent {
  techs = ['Flutter', 'NestJS', 'Angular 21', 'PostgreSQL', 'Supabase', 'SQLite offline', 'GeoJSON', 'GitHub Actions CI/CD'];
}
