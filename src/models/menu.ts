export interface MenuItem {
  label: string;
  routerLink: string;
  children: MenuItem[];
  disabled: boolean;
  active: boolean;
  dropdown: boolean;
  megaMenu: boolean;
  description: string;
}

export interface UserMenu {
  label: string;
  children: MenuItem[];
}

export interface Notification {
  label: string;
}
