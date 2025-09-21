import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() username: string = ''; // Data comes from parent
  @Input() password: string = ''; // Data comes from parent
  // @Output() eventEmitter = new EventEmitter<string>();
  @Output() eventEmitter = new EventEmitter<{ username: string; password: string }>();

  OpenToken() {
    // this.eventEmitter.emit(this.username);
    // this.eventEmitter.emit(this.password);

    this.eventEmitter.emit({
      username: this.username,
      password: this.password,
    });
  }
}
