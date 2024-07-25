import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventType, Router, RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { MenuItem, Notification, UserMenu } from '../../../models/menu';

@Component({
  selector: 'silen-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, BadgeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuItems: MenuItem[];
  @Input() userMenu: UserMenu;
  @Input() showNotification: boolean = false;
  @Input() notifications: Notification[];

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: (e) => {
        if (e.type === EventType.NavigationEnd) {
          this.resetMenuItemActive(this.menuItems);
          this.getActiveMenuItem(this.router.url, this.menuItems);
        }
      },
    });
  }

  //metodo per resettare inizialemnte la property active per tutti gli elementi del menu
  resetMenuItemActive(items: MenuItem[]) {
    items.forEach((i) => {
      i.active = false;
      if (i.children && i.children.length > 0) {
        this.resetMenuItemActive(i.children);
      }
    });
  }

  //metodo per fissare come active l'elemento del menu su cui si è navigato
  getActiveMenuItem(activeUrl: string, itemsToNavigate: MenuItem[]) {
    const url = activeUrl.substring(1, activeUrl.length);
    var found: boolean = false;
    itemsToNavigate.forEach((item) => {
      if (item.routerLink === url) {
        item.active = true;
        found = true;
      }
    });
    if (found) {
      return;
    } else {
      itemsToNavigate.forEach((item) => {
        if (item.children.length > 0) {
          return this.getActiveMenuItem(activeUrl, item.children);
        }
      });
    }
  }
}
