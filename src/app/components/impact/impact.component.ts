import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ImpactCard, ImpactFeature } from '../../models/rna-data.model';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './impact.component.html',
})
export class ImpactComponent {
  cards: ImpactCard[] = [
    { num: '100', unit: '+', label: 'Parcelles RNA actives suivies en temps réel', barColor: 'from-green-primary to-green-light' },
    { num: '12',            label: 'Espèces agroforestières sahéliennes référencées', barColor: 'from-gold to-[#e8c840]' },
    { num: '3',             label: 'Régions couvertes au Burkina Faso', barColor: 'from-terra to-[#e89050]' },
    { num: '4',             label: 'Langues locales intégrées dans l\'application', barColor: 'from-green-light to-[#90d4b0]' },
  ];

  features: ImpactFeature[] = [
    {
      icon: '🌡️',
      title: 'Séquestration carbone documentée',
      description: 'RNA Guide génère les données MRV (Mesure, Reporting, Vérification) nécessaires aux projets de compensation carbone certifiés Gold Standard et Verra.',
    },
    {
      icon: '📈',
      title: 'Reporting bailleurs en quelques clics',
      description: 'Les rapports trimestriels FAO, FIDA, GIZ ou Banque Mondiale sont générés automatiquement depuis les données terrain, avec export aux formats standards.',
    },
    {
      icon: '👨‍🌾',
      title: 'Revenus agricoles traçables',
      description: 'Chaque récolte de produits forestiers non ligneux est enregistrée. Les organisations prouvent l\'impact économique de la RNA sur les ménages ruraux.',
    },
    {
      icon: '🔬',
      title: 'Données de recherche scientifique',
      description: 'Les exports GeoJSON et les séries temporelles permettent aux chercheurs et universités de travailler sur la dynamique de régénération au Sahel.',
    },
  ];
}
