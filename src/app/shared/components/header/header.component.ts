import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface SiteRoutes {
  title: string;
  route: string;
  isActive: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly router = inject(Router);
  selectedIndex = 0;

  constructor() {
    this.activateHeader();
  }

  listOfRoutes: SiteRoutes[] = [
    {
      title: 'בית',
      route: 'home',
      isActive: false,
    },
    {
      title: 'שירים',
      route: 'songs',
      isActive: false,
    },
    {
      title: 'תרגומים',
      route: 'translations',
      isActive: false,
    },
    {
      title: 'אודות',
      route: 'about',
      isActive: false,
    },
    {
      title: 'תמוך באמן',
      route: 'support-artist',
      isActive: false,
    },
    {
      title: 'צור קשר',
      route: 'contact-me',
      isActive: false,
    },
  ];

  onNav(item: SiteRoutes) {
    this.listOfRoutes.map((route) => {
      route.isActive = false;
    });
    this.activateHeader(item.route);
    this.router.navigate([item.route]);
  }

  activateHeader(route?: string) {
    let activeHeader = route ? route : location.pathname.replace('/', '');
    this.listOfRoutes.map((route) => {
      route.route == activeHeader ? (route.isActive = true) : '';
    });
  }
}
