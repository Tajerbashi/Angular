import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-time-picker-persian',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-time-picker-persian.component.html',
  styleUrl: './date-time-picker-persian.component.css',
})
export class DateTimePickerPersianComponent {
  selectedDate: string = '';
  selectedTime: string = '';
  dateTime: string = '';

  @Output() dateTimeChange = new EventEmitter<Date>();

  getDateTime() {
    if (!this.selectedDate || !this.selectedTime) {
      this.dateTimeChange.emit(undefined as any);
      return;
    }
    const dt = new Date(`${this.selectedDate}T${this.selectedTime}`);
    this.dateTime = `${new Date(`${this.selectedDate}T${this.selectedTime}`)}`;
    this.dateTimeChange.emit(dt);
  }
}
