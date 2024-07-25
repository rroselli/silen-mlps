import { Routes } from '@angular/router';
import { AssistenzaComponent } from './pages/assistenza/assistenza.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'assistenza',
    component: AssistenzaComponent,
    data: {
      breadcrumbItems: [
        {
          label: 'Assistenza',
          routerLink: 'assistenza',
        },
      ],
    },
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
