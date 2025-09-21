import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  message: string = '';
  username: string = '';
  password: string = '';
  age: string = '';

  receiveToken(event: { username: string; password: string }) {
    this.username = event.username;
    this.password = event.password;
    console.log('=> this.username : ', this.username);
    console.log('=> this.password : ', this.password);
  }
}
