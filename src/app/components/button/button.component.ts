import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'silen-button',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() class: string = '';
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPos: ButtonIconPosition;
  @Input() rounded: boolean = false;
  @Input() tooltip: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
