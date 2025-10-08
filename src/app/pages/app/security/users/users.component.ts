import { Component, OnInit } from '@angular/core';
import { PageContainerComponent } from '../../../../components/page-container/page-container.component';
import { PageContentComponent } from '../../../../components/page-content/page-content.component';
import { GridComponent } from '../../../../components/grid/grid.component';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { TableColumn, TableRow } from '../../../../components/data-grid/IDataGridModel';
import { UserService } from '../../../../services/identity/user.service';
import { IUserDTO } from '../../../../models/Users/iuser-dto';

@Component({
  selector: 'app-users',
  imports: [PageContainerComponent, PageContentComponent, GridComponent, DataGridComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: IUserDTO[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // this.productService.get().subscribe({
    //   next: (data) => (this.products = data),
    //   error: (err) => console.error(err),
    // });
    this.userService.get().subscribe({
      next: (data) => (this.users = data.data),
      error: (err) => console.error(err),
    });
  }
  tableColumns: TableColumn[] = [
    { key: 'title1', label: 'Title1' },
    { key: 'title2', label: 'Title2' },
    { key: 'title3', label: 'Title3' },
    { key: 'title4', label: 'Title4' },
    { key: 'title5', label: 'Title5' },
    { key: 'title6', label: 'Title6' },
    { key: 'title7', label: 'Title7' },
  ];

  tableData: TableRow[] = [
    {
      title1: 'Value1',
      title2: 'Value2',
      title3: 'Value3',
      title4: 'Value4',
      title5: 'Value5',
      title6: 'Value6',
      title7: 'Value7',
    },
    {
      title1: 'Jane',
      title2: 'ValueB',
      title3: 'ValueC',
      title4: 'ValueD',
      title5: 'ValueE',
      title6: 'ValueF',
      title7: 'ValueG',
    },
  ];

  onEdit(row: TableRow) {
    console.log('Edit:', row);
  }
  onDelete(row: TableRow) {
    console.log('Delete:', row);
  }
  onAddNew() {
    console.log('Add New');
  }
  onExportCsv() {
    console.log('Export CSV');
  }
}
