import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatetimePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
