import { Component, inject } from '@angular/core';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'inst-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
})
export class CompA {
  private valueService = inject(ValueService);
  test = 0;
}
