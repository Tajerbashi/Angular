import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { SHARED_IMPORTS } from '../../../shared-imports';

@Component({
  selector: 'app-datetime-picker',
  standalone: true,
  imports: [ReactiveFormsModule, NgPersianDatepickerModule, SHARED_IMPORTS],
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],
})
export class DatetimePickerComponent implements OnInit {
  // Main form group (date + time)
  timeForm!: FormGroup;

  // Dropdown options
  hours: string[] = [];
  minutes: string[] = [];

  // Display value
  displayValue1 = '';

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.run();
  }

  run() {
    // Initialize full form
    this.timeForm = this.fb.group({
      date: [''],
      hour: ['00'],
      minute: ['00'],
    });

    // Populate hours (00-23)
    this.hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));

    // Populate minutes (00-59)
    this.minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    // Update display when any value changes
    this.timeForm.valueChanges.subscribe(() => this.updateDisplay1());
  }

  updateDisplay1() {
    const { date, hour, minute } = this.timeForm.value;
    this.displayValue1 = date ? `${date} ${hour}:${minute}` : '';
  }

  showDates() {
    console.log('Date 1:', this.displayValue1);
  }
}
