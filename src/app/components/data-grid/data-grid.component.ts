import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn, TableRow } from './IDataGridModel';

@Component({
  selector: 'app-data-grid',
  imports: [],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css',
})
export class DataGridComponent {
  @Input() title = 'Modern Glass Table';
  @Input() subtitle = 'Glass blur style · responsive · reusable';
  @Input() columns: TableColumn[] = [];
  @Input() data: TableRow[] = [];

  @Output() edit = new EventEmitter<TableRow>();
  @Output() delete = new EventEmitter<TableRow>();
  @Output() addNew = new EventEmitter<void>();
  @Output() exportCsv = new EventEmitter<void>();

  onExport() {
    this.exportCsv.emit();
  }

  onAddNew() {
    this.addNew.emit();
  }

  onEdit(row: TableRow) {
    this.edit.emit(row);
  }

  onDelete(row: TableRow) {
    this.delete.emit(row);
  }
}
