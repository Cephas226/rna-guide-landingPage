import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './languages.component.html',
})
export class LanguagesComponent {
  languages = [
    { flag: '🇫🇷', name: 'Français',  sub: 'Langue officielle · Guides complets' },
    { flag: '🌿',  name: 'Mooré',     sub: 'Langue Mossi · Centre, Plateau Central' },
    { flag: '🌾',  name: 'Dioula',    sub: 'Langue Mandé · Ouest du Burkina' },
    { flag: '🐄',  name: 'Fulfuldé',  sub: 'Langue Peul · Sahel, Est' },
  ];
}
