import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-index',
  imports: [],
  templateUrl: './signal-index.html',
  styleUrl: './signal-index.css',
})
export class SignalIndex {
  protected readonly title = signal('app-tk-angular');
  titleValue = this.title();

  visible: boolean = true;
  toggle = () => {
    this.visible = !this.visible;
  };
}
