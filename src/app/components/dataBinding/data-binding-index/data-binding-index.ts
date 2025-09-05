import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared-imports';
@Component({
  selector: 'app-data-binding-index',
  imports: [...SHARED_IMPORTS],
  templateUrl: './data-binding-index.html',
  styleUrl: './data-binding-index.css',
  standalone: true,
})
export class DataBindingIndex {
  toggle: boolean = false;
  toggleComponent = () => {
    this.toggle = !this.toggle;
  };
  Interpolation: string = '({{expression}}) - One-way: Component to View';
  textInterpolation: string = 'I am Interpolation Data Binding';

  PropertyBinding: string = '([property]="expression") - One-way: Component to View';
  propertyBinding: string = 'Angular 20 Version';

  EventBinding: string = '((event)="handler()") - One-way: View to Component';
  eventBindingString: string = '';
  eventBindingBoolean: boolean = false;
  onButtonClick() {
    // alert(`Hello, ${this.eventBindingString}!`);
    this.eventBindingBoolean = !this.eventBindingBoolean;
  }
  onInputChange = ($event: Event) => {};

  TwowayBinding: string = '([(ngModel)]="property") - Two-way: Component ↔ View';
  inputValue: string = '';
}
