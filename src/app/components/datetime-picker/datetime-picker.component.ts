import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  // Date value
  dateValue1 = new FormControl('');

  // Time form (hours & minutes)
  timeForm!: FormGroup;

  // Dropdown options
  hours: string[] = [];
  minutes: string[] = [];

  // Display values
  displayValue1 = '';
  displayValue2 = '';
  displayValue3 = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize time form
    this.timeForm = this.fb.group({
      hour: ['00'],
      minute: ['00'],
    });

    // Populate hours (00-23)
    this.hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));

    // Populate minutes (00-59)
    this.minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    // Update display when date or time changes
    this.dateValue1.valueChanges.subscribe(() => this.updateDisplay1());
    this.timeForm.valueChanges.subscribe(() => this.updateDisplay1());
  }

  updateDisplay1() {
    const date = this.dateValue1.value;
    const { hour, minute } = this.timeForm.value;
    if (date) {
      this.displayValue1 = `${date} ${hour}:${minute}`;
    } else {
      this.displayValue1 = '';
    }
  }

  showDates() {
    console.log('Date 1:', this.displayValue1);
    console.log('Date 2:', this.displayValue2);
    console.log('Date 3:', this.displayValue3);
  }
}
