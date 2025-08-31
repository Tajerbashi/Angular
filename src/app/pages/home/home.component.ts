import { Component } from '@angular/core';
import { TkCardComponent } from '../../shared/components/tk-card/tk-card.component';

@Component({
  selector: 'app-home',
  imports: [TkCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
