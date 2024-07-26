import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  EventType,
  Router,
  RouterOutlet,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { UserData } from '../interfaces/Authentication';
import { BreadcrumbItem } from '../models/breadcrumb';
import { MenuItem, Notification, UserMenu } from '../models/menu';
import { setUserData } from '../store/user/user.actions';
import { getUserData } from '../store/user/user.selectors';
import { userMockDg } from '../utils/utils';
import { AuthenticationService } from './../services/authentication.service';
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
export class AppComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      active: false,
      disabled: false,
      children: [],
      routerLink: 'home',
      dropdown: false,
      megaMenu: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      label: 'Assistenza',
      active: false,
      disabled: false,
      children: [],
      routerLink: 'assistenza',
      dropdown: false,
      megaMenu: false,
      description: null,
    },
  ];

  userMenu: UserMenu = {
    label: '',
    children: [
      {
        label: 'Esci',
        active: false,
        disabled: false,
        dropdown: false,
        megaMenu: false,
        routerLink: null,
        children: [],
        description: '',
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
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private store: Store
  ) {
    this.subs.push(
      this.store.pipe(select(getUserData)).subscribe((userData) => {
        if (userData) {
          this.userMenu.label = userData.nome + ' ' + userData.cognome;
        }
      })
    );
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
    this.setConfigOptions();
    //per ambienti ministeriali chiamo la get dati utente (che utilizza il cookie)
    if (!environment.local) {
      this.authenticationService.getDatiUtenteFromCookie().subscribe({
        next: (res) => {
          //     this.store.dispatch(setUserData({ userData: res. }));
          // sessionStorage.setItem('jwtToken', userData.jwtToken);
          // this.router.navigateByUrl('/home');
        },
      });
    } else {
      //per ambienti non ministeriali devo mockare i dati utente
      const userData: UserData = userMockDg;
      this.store.dispatch(setUserData({ userData: userData }));
      sessionStorage.setItem('jwtToken', userData.jwtToken);
      this.router.navigateByUrl('/home');
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  setConfigOptions() {
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
  }
}
