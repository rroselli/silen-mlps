import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableEditCompleteEvent, TableModule } from 'primeng/table';
import { Column } from '../../../models/column';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'silen-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    TranslateModule,
    ButtonComponent,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() values: any[];
  @Input() cols: Column[];
  @Input() rows: number = 5;
  @Input() showPaginator: boolean = true;
  @Output() editAction: EventEmitter<any> = new EventEmitter();
  @Output() deleteAction: EventEmitter<any> = new EventEmitter();
  @Input() showEditButton: (rowData: any) => boolean = () => false; //se non passo niente come input non mostra il pulsante
  @Input() showDeleteButton: (rowData: any) => boolean = () => false; //se non passo niente come input non mostra il pulsante
  @Input() editButtonTooltip: string = null;
  @Input() deleteButtonTooltip: string = null;
  @Input() showActionColumn: boolean = true;

  onEdit(item: any) {
    this.editAction.emit(item);
  }

  onDelete(item: any) {
    this.deleteAction.emit(item);
  }

  onEditCellComplete(event: TableEditCompleteEvent) {
    console.log(event);
  }
}
