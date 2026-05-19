import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { Testimonial } from '../../models/rna-data.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: 'RNA Guide a transformé notre façon de travailler. En quelques semaines, nos agents terrain collectaient des données géoréférencées fiables, même dans les zones les plus reculées du Sahel.',
      initials: 'SM',
      name: 'Salimata Maïga',
      role: 'Coordinatrice terrain · Projet FIDA, Burkina Faso',
    },
    {
      text: 'Enfin un outil qui fonctionne sans réseau ! Nos agents passent maintenant 80% de leur temps sur le terrain, contre 20% à remplir des papiers. La qualité des données a explosé.',
      initials: 'KO',
      name: 'Kofi Ouédraogo',
      role: 'Chef de projet · ONG Sahel Vert',
    },
    {
      text: 'Les exports GeoJSON et les KPIs temps réel nous permettent de produire nos rapports trimestriels en 2 jours au lieu de 3 semaines. RNA Guide est devenu indispensable à notre monitoring.',
      initials: 'AT',
      name: 'Aminata Traoré',
      role: 'M&E Officer · Programme GIZ Sahel',
    },
  ];

  partners = [
    { icon: '🌍', name: 'FAO' },
    { icon: '🌾', name: 'CILSS' },
    { icon: '🤝', name: 'GIZ' },
    { icon: '🌱', name: 'UICN' },
    { icon: '🏦', name: 'Banque Mondiale' },
    { icon: '💶', name: 'AFD' },
    { icon: '🌐', name: 'Union Européenne' },
  ];
}
