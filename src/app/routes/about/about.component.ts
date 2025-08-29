import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  imports: [],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ display: 'none', opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ display: 'none', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AboutComponent {
  selectedLanguage: 'rus' | 'heb' | 'eng' = 'heb';
}
