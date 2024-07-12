import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'silen-menu-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent {
  @Input() header: string;
  @Input() descrizione: string;
  @Input() iconSrc: string;
}
