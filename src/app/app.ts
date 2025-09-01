import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalIndex } from './components/signal/signal-index/signal-index';
import { SelectorIndex } from './components/selector/selector-index/selector-index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalIndex, SelectorIndex],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = 0;

  increment() {
    this.count++;
  }
}
