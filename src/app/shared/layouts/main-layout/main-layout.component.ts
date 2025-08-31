import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-layout">
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .main-layout {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
    `,
  ],
})
export class MainLayoutComponent {}
