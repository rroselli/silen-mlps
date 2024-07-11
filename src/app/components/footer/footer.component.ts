import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'silen-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() title: string;
  @Input() address: string;
  @Input() logoSrc: string;
  @Input() mediaPolicyUrl: string;
  @Input() legalNotesUrl: string;
  @Input() privacyPolicyUrl: string;
  @Input() mapsiteUrl: string;
}
