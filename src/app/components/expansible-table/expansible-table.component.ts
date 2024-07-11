import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'silen-expansible-table',
  standalone: true,
  imports: [TableModule, CommonModule, TranslateModule],
  templateUrl: './expansible-table.component.html',
  styleUrl: './expansible-table.component.scss',
})
export class ExpansibleTableComponent {}
