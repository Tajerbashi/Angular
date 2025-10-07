import { Component } from '@angular/core';
import { PageContainerComponent } from '../../../../components/page-container/page-container.component';
import { PageContentComponent } from '../../../../components/page-content/page-content.component';
import { GridComponent } from '../../../../components/grid/grid.component';
import { CardContainerComponent } from '../../../../components/cardContainer/card-container/card-container.component';
import { CardHeaderComponent } from '../../../../components/cardContainer/card-header/card-header.component';
import { CardContentComponent } from '../../../../components/cardContainer/card-content/card-content.component';
import { CardFooterComponent } from '../../../../components/cardContainer/card-footer/card-footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageContainerComponent,
    PageContentComponent,
    GridComponent,
    CardContainerComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
