import { Component } from '@angular/core';
import { TypeSelector } from '../type-selector/type-selector';
import { TagSelector } from '../tag-selector/tag-selector';
import { ClassSelector } from '../class-selector/class-selector';
import { PropertySelector } from '../property-selector/property-selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector-index',
  imports: [TypeSelector, TagSelector, ClassSelector, PropertySelector, CommonModule],
  templateUrl: './selector-index.html',
  styleUrl: './selector-index.css',
})
export class SelectorIndex {
  visible: boolean = false;
  toggle = () => {
    this.visible = !this.visible;
  };
}
