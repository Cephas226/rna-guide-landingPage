import { Component } from '@angular/core';
import { Stat } from '../../models/rna-data.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  stats: Stat[] = [
    { value: '100+', label: 'Parcelles suivies' },
    { value: '12',   label: 'Espèces sahéliennes' },
    { value: '3',    label: 'Régions au Burkina' },
    { value: '4',    label: 'Langues locales' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
