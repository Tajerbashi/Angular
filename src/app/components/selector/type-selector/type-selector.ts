import { Component } from '@angular/core';

@Component({
  selector: 'app-box, app-container, [appCard], .app-panel', // multiple selectors
  template: `<div class="box">I am a multi-selector component!</div>`,
  standalone: true,
})
export class TypeSelector {}
