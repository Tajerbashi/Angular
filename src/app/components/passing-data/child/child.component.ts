import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmail } from '../../../models/IEmail';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() model: IEmail = {};

  // @Output() eventEmitter = new EventEmitter<string>();
  @Output() eventEmitter = new EventEmitter<{ model: IEmail }>();

  sendEmail() {
    this.eventEmitter.emit({ model: this.model });
  }
}
