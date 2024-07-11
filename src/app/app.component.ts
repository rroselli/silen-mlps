import { Component } from '@angular/core';
import {
  ActivatedRoute,
  EventType,
  Router,
  RouterOutlet,
} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { BreadcrumbItem } from '../models/breadcrumb';
import { MenuItem, Notification, UserMenu } from '../models/menu';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BreadcrumbComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      active: false,
      disabled: false,
      children: [],
      routerLink: 'home',
      dropdown: false,
      megaMenu: false,
    },
  ];

  userMenu: UserMenu = {
    label: 'Nome Cognome',
    children: [
      {
        label: 'Esci',
        active: false,
        disabled: false,
        dropdown: false,
        megaMenu: false,
        routerLink: null,
        children: [],
      },
    ],
  };

  breadcrumbItems: BreadcrumbItem[] = [];

  notifications: Notification[] = [
    {
      label: 'Notifica 1',
    },
  ];

  constructor(
    private primengConfig: PrimeNGConfig,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe({
      next: (e) => {
        if (e.type === EventType.NavigationEnd) {
          if (
            this.route.firstChild &&
            this.route.firstChild.snapshot.data['breadcrumbItems']
          ) {
            this.breadcrumbItems = [
              ...this.route.firstChild.snapshot.data['breadcrumbItems'],
            ];
          } else {
            this.breadcrumbItems = [];
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      dayNames: [
        'Domenica',
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato',
      ],
      firstDayOfWeek: 1,
      dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
      dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre',
      ],
      monthNamesShort: [
        'Gen',
        'Feb',
        'Mar',
        'Apr',
        'Mag',
        'Giu',
        'Lug',
        'Ago',
        'Set',
        'Ott',
        'Nov',
        'Dic',
      ],
      today: 'Oggi',
      clear: 'Cancella',
    });
    this.router.navigateByUrl('/home');
  }
}
