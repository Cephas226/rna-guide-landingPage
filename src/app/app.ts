import { Component } from '@angular/core';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { TechStripComponent }    from './components/tech-strip/tech-strip.component';
import { ProblemComponent }      from './components/problem/problem.component';
import { FeaturesComponent }     from './components/features/features.component';
import { ProductsComponent }     from './components/products/products.component';
import { ImpactComponent }       from './components/impact/impact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LanguagesComponent }    from './components/languages/languages.component';
import { CtaComponent }          from './components/cta/cta.component';
import { FooterComponent }       from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, TechStripComponent, ProblemComponent,
    FeaturesComponent, ProductsComponent, ImpactComponent, TestimonialsComponent,
    LanguagesComponent, CtaComponent, FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-tech-strip />
      <app-problem />
      <app-features />
      <app-products />
      <app-impact />
      <app-testimonials />
      <app-languages />
      <app-cta />
    </main>
    <app-footer />
  `,
})
export class App {}
