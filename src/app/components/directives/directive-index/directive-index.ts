import { Component } from '@angular/core';
import { UnlessDirective } from '../../../directives/unless.directive';
import { IUserDTO } from '../../../../models/IUserDTO';
import { HighlightDirective } from '../../../directives/highlight.directive';
import { PointerDirective } from '../../../directives/pointer.directive';

@Component({
  selector: 'app-directive-index',
  imports: [HighlightDirective, UnlessDirective, PointerDirective],
  templateUrl: './directive-index.html',
  styleUrl: './directive-index.css',
  standalone: true,
})
export class DirectiveIndex {
  datalist: IUserDTO[] = [
    { username: 'User 1', password: 'User****1', isActive: true, color: '#A212ac' },
    { username: 'User 2', password: 'User****2', isActive: true, color: '#B212ac' },
    { username: 'User 3', password: 'User****3', isActive: false, color: '#C212ac' },
    { username: 'User 4', password: 'User****4', isActive: true, color: '#D212ac' },
    { username: 'User 5', password: 'User****5', isActive: false, color: '#E212ac' },
    { username: 'User 6', password: 'User****6', isActive: true, color: '#F212ac' },
    { username: 'User 7', password: 'User****7', isActive: false, color: '#E112ac' },
    { username: 'User 8', password: 'User****8', isActive: true, color: '#E212ac' },
    { username: 'User 9', password: 'User****9', isActive: false, color: '#E312ac' },
  ];
  isHidden: boolean = false;
  toggle = () => {
    this.isHidden = !this.isHidden;
  };
}
