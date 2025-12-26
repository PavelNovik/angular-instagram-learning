import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'inst-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
})
export class CompA implements OnInit {
  private valueService = inject(ValueService);
  value = 0;

  ngOnInit(): void {
    this.value = this.valueService.value;
  }
}
