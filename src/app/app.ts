import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalIndex } from './components/signal/signal-index/signal-index';
import { SelectorIndex } from './components/selector/selector-index/selector-index';
import { DataBindingIndex } from './components/dataBinding/data-binding-index/data-binding-index';
import { DirectiveIndex } from './components/directives/directive-index/directive-index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalIndex, SelectorIndex, DataBindingIndex, DirectiveIndex],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  count = 0;

  increment() {
    this.count++;
  }
}
