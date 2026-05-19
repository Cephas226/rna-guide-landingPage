import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  links = [
    { label: 'Problématique', anchor: 'problem' },
    { label: 'Fonctionnalités', anchor: 'features' },
    { label: 'Produits', anchor: 'products' },
    { label: 'Impact', anchor: 'impact' },
    { label: 'Contact', anchor: 'cta' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
