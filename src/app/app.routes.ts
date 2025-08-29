import { Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { ContactMeComponent } from './routes/contact-me/contact-me.component';
import { HomeComponent } from './routes/home/home.component';
import { SongsComponent } from './routes/songs/songs.component';
import { SupportArtistComponent } from './routes/support-artist/support-artist.component';
import { TranslationsComponent } from './routes/translations/translations.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'translations',
    component: TranslationsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'support-artist',
    component: SupportArtistComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
