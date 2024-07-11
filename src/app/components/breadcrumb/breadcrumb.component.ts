import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbItem } from '../../../models/breadcrumb';

@Component({
  selector: 'silen-breadcrumb',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() breadcrumbItems: BreadcrumbItem[] = [];
}
