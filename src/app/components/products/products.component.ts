import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Product } from '../../models/rna-data.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Product[] = [
    {
      tag: 'Mobile Android',
      tagVariant: 'mobile',
      icon: '📱',
      title: 'Application terrain',
      description: 'Pour les agents terrain et producteurs agricoles. Fonctionne entièrement sans internet dans les zones sahéliennes les plus reculées.',
      features: [
        'Enregistrement parcelles GPS',
        'Inventaire espèces RNA',
        'Photos avant / après',
        'Revenus et récoltes PFNL',
        'Guides en 4 langues locales',
        'Mise à jour automatique APK',
      ],
    },
    {
      tag: 'API Backend',
      tagVariant: 'backend',
      icon: '⚙️',
      title: 'Backend sécurisé',
      description: 'API REST NestJS avec authentification par rôles, synchronisation bidirectionnelle et résolution intelligente des conflits de données.',
      features: [
        '4 rôles utilisateurs',
        'Sync bidirectionnelle',
        'Résolution de conflits',
        'Stockage photos Supabase',
        'PostgreSQL cloud (Neon)',
        'Export CSV / GeoJSON',
      ],
    },
    {
      tag: 'Dashboard Web',
      tagVariant: 'dashboard',
      icon: '🖥️',
      title: 'Interface superviseur',
      description: 'Dashboard Angular 21 pour les superviseurs régionaux et administrateurs. Vue en temps réel sur l\'ensemble du terrain.',
      features: [
        'KPIs en temps réel',
        'Carte interactive parcelles',
        'Analytiques par région',
        'Gestion des agents',
        'Export rapports bailleurs',
        'Alertes et notifications',
      ],
    },
  ];

  tagClasses: Record<string, string> = {
    mobile:    'bg-green-light/20 text-green-light',
    backend:   'bg-gold/20 text-gold',
    dashboard: 'bg-terra/20 text-terra',
  };
}
