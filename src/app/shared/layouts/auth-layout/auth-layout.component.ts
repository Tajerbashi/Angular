import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-layout">
      <div class="auth-container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .auth-layout {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        padding: 20px;
      }

      .auth-container {
        width: 100%;
        max-width: 400px;
      }
    `,
  ],
})
export class AuthLayoutComponent {}
