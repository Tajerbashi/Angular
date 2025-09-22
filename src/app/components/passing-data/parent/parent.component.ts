import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEmail } from '../../../models/IEmail';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  email: IEmail = {};
  emails: IEmail[] = [];

  getEmail(event: { model: IEmail }) {
    this.addEmail(event.model);
  }

  addEmail(parameter: IEmail) {
    this.emails.push(parameter);
  }
}
