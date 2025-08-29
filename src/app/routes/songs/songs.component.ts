import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubePipe } from '../../shared/pipes/youtube.pipe';

@Component({
  selector: 'app-songs',
  imports: [YoutubePipe],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss',
})
export class SongsComponent {
  private readonly router = inject(Router);
  navTo(route: string) {
    this.router.navigate([route]);
  }

  ActiveIframe: number = 0;
  isMobile: boolean = false;
  readonly listOfIframeId: string[][] = [
    [
      'https://www.youtube.com/embed/Temse6ZxtRg',
      'final-translations/סיפורה של האם.pdf',
    ],
    [
      'https://www.youtube.com/embed/zq7OFWB9Na8',
      'final-translations/מאפננת, מכושפת.pdf',
    ],
    [
      'https://www.youtube.com/embed/iOFEfpcvahM',
      'final-translations/יש עיניים לפרחים.pdf',
    ],
    ['https://www.youtube.com/embed/rfxMXhknN8U'],
    [
      'https://www.youtube.com/embed/BBOc5yn07gk',
      'final-translations/שיר הקוסם.pdf',
    ],
    [
      'https://www.youtube.com/embed/wSNkMoenCAU',
      'final-translations/זוג יונים.pdf',
    ],
    [
      'https://www.youtube.com/embed/MUUmj7hc5Sc',
      'final-translations/אינני שם.pdf',
    ],
    [
      'https://www.youtube.com/embed/Mur0znEB7RQ',
      'final-translations/אהבת אמת היא כחלום.pdf',
    ],
    ['https://www.youtube.com/embed/ueVfEK9AjW4'],
    ['https://www.youtube.com/embed/zGijUgvL-xM'],
    [
      'https://www.youtube.com/embed/wlPb5GbBT4o',
      'final-translations/כל עוד את איתי.pdf',
    ],
    [
      'https://www.youtube.com/embed/nJYz3vegWkc',
      'final-translations/אופרטה מספר 2.pdf',
    ],
    [
      'https://www.youtube.com/embed/p1HPis8eTB4',
      'final-translations/עוד סופה.pdf',
    ],
    [
      'https://www.youtube.com/embed/aZ65DBnD-Ec',
      'final-translations/מעט חבל.pdf',
    ],
    [
      'https://www.youtube.com/embed/Vqsq0HA3Y_w',
      'final-translations/הד אהבה.pdf',
    ],
    [
      'https://www.youtube.com/embed/2WujK2LcV4I',
      'final-translations/מאוהב בך עד דמעות.pdf',
    ],
  ];
  listOfActiveIframe: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor() {
    this.listOfActiveIframe[this.ActiveIframe] = true;
    this.isMobile = window.innerWidth < 640;
  }

  next() {
    this.listOfActiveIframe.fill(false);
    this.ActiveIframe++;
    this.ActiveIframe > this.listOfActiveIframe.length - 1
      ? (this.ActiveIframe = 0)
      : '';

    this.listOfActiveIframe[this.ActiveIframe] = true;
  }
  prev() {
    this.listOfActiveIframe.fill(false);
    this.ActiveIframe--;
    this.ActiveIframe < 0
      ? (this.ActiveIframe = this.listOfActiveIframe.length - 1)
      : '';

    this.listOfActiveIframe[this.ActiveIframe] = true;
  }
}
