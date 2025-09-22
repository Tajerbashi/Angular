import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmail } from '../../../models/IEmail';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() model: IEmail = {};
  @Output() submitEmail = new EventEmitter<IEmail>();

  sendEmail() {
    this.submitEmail.emit({ ...this.model }); // emit clone for safety
  }
}
