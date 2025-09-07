import { Component } from '@angular/core';
import { Input } from '../input/input';
import { Output } from '../output/output';

@Component({
  selector: 'app-combine-index',
  imports: [Input, Output],
  templateUrl: './combine-index.html',
  styleUrl: './combine-index.css',
})
export class CombineIndex {}
