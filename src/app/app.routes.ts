import { Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
