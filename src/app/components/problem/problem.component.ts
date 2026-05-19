import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './problem.component.html',
})
export class ProblemComponent {
  problems = [
    {
      icon: '📋',
      title: 'Suivi 100% papier',
      desc: 'Les fiches terrain s\'abîment, se perdent ou sont illisibles. Aucune consolidation possible à l\'échelle d\'un projet.',
    },
    {
      icon: '📡',
      title: 'Zones sans connectivité',
      desc: 'Les parcelles RNA sont en zones reculées, sans réseau. Les outils numériques classiques ne fonctionnent pas hors-ligne.',
    },
    {
      icon: '📊',
      title: 'Rapports bailleurs laborieux',
      desc: 'Compiler les données pour les organisations internationales demande des semaines de travail manuel par trimestre.',
    },
  ];

  solutions = [
    'Application mobile offline-first : collecte de données sans réseau, synchronisation dès le retour du signal.',
    'GPS intégré pour délimiter les parcelles et géolocaliser chaque arbre inventorié.',
    'Dashboard web en temps réel pour les superviseurs : KPIs, cartographie, alertes.',
    'Export automatique CSV et GeoJSON aux formats attendus par les bailleurs de fonds internationaux.',
    'Score qualité des données terrain sur 5 métriques pour garantir la fiabilité du reporting.',
    'Mise à jour automatique de l\'application sans passer par le Play Store.',
  ];

  tags = ['FAO-compatible', 'CILSS-ready', 'Carbon MRV', 'GeoJSON'];
}
