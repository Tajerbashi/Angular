import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEmail } from '../../../models/IEmail';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  email: IEmail = {};
  emails: IEmail[] = [];

  onEmailSubmit(email: IEmail) {
    // clone to avoid reference issues
    this.emails.push({ ...email });
    this.email = {}; // reset form after submit
  }
  onUpdate(email: IEmail) {
    this.email = { ...email }; // clone if you don’t want direct mutation
  }

  onRemove(email: IEmail) {
    console.log('Email : A', this.emails);

    // option 1: filter (immutable)
    this.emails = this.emails.filter((item) => item !== email);

    // option 2: filter by unique property
    // this.emails = this.emails.filter((item) => item.username !== email.username);

    console.log('Email : B', this.emails);
  }
}
