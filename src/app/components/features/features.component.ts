import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Feature } from '../../models/rna-data.model';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      emoji: '📡',
      title: 'Offline-first total',
      description: 'L\'application fonctionne entièrement sans réseau. Les données sont stockées localement sur l\'appareil et synchronisées avec résolution de conflits dès le retour du signal.',
      badge: 'Technologie SQLite',
      badgeVariant: 'green',
      cardVariant: 'default',
    },
    {
      emoji: '🗺️',
      title: 'Cartographie GPS parcelles',
      description: 'Délimitez les parcelles directement sur le terrain avec le GPS de l\'appareil. Visualisez l\'ensemble du territoire sur la carte interactive du dashboard.',
      badge: 'Leaflet + GeoJSON',
      badgeVariant: 'green',
      cardVariant: 'default',
    },
    {
      emoji: '📸',
      title: 'Suivi photo avant/après',
      description: 'Photographiez l\'évolution des parcelles d\'une saison à l\'autre. Comparaison visuelle pluriannuelle pour documenter la régénération.',
      badge: 'Supabase Storage',
      badgeVariant: 'gold',
      cardVariant: 'gold',
    },
    {
      emoji: '🌳',
      title: 'Inventaire espèces RNA',
      description: '12 espèces sahéliennes référencées : Faidherbia albida, Karité, Néré, Guiera et plus. Comptage des tiges, stade de développement et densité par hectare.',
      badge: '12 espèces indexées',
      badgeVariant: 'green',
      cardVariant: 'default',
    },
    {
      emoji: '💰',
      title: 'Calcul revenus PFNL',
      description: 'Enregistrement des récoltes et calcul automatique des revenus issus des produits forestiers non ligneux — karité, néré, gomme arabique et plus encore.',
      badge: 'Impact économique',
      badgeVariant: 'terra',
      cardVariant: 'terra',
    },
    {
      emoji: '⭐',
      title: 'Score qualité données',
      description: '5 métriques évaluent la qualité de chaque relevé terrain : complétude, cohérence GPS, photos, inventaire et horodatage. Garantit la crédibilité des rapports bailleurs.',
      badge: 'MRV carbone',
      badgeVariant: 'gold',
      cardVariant: 'gold',
    },
  ];

  badgeClasses: Record<string, string> = {
    green: 'text-green-primary bg-green-pale',
    gold:  'text-[#a07a10] bg-[#fdf3d0]',
    terra: 'text-[#a0480f] bg-[#fdeee2]',
  };
}
