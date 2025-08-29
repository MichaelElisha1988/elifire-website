import { Component } from '@angular/core';

@Component({
  selector: 'app-support-artist',
  imports: [],
  standalone: true,
  templateUrl: './support-artist.component.html',
  styleUrl: './support-artist.component.scss',
})
export class SupportArtistComponent {
  readonly isMobile = window.innerWidth < 640;
}
