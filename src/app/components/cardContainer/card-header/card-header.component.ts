import { Component } from '@angular/core';

@Component({
  selector: 'app-card-header',
  imports: [],
  template: `
    <div class="app-card-header">
      <h3><ng-content></ng-content></h3>
    </div>
  `,
  styleUrl: './card-header.component.css',
})
export class CardHeaderComponent {}
