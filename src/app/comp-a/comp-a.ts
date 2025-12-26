import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'inst-comp-a',
  standalone: true,
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
})
export class CompA implements OnInit {
  private valueService = inject(ValueService);
  value = 0;
  protected addValueHandler(): void {
    this.valueService.add();
    console.log(this.valueService.value$);
  }

  ngOnInit(): void {
    this.valueService.value$.subscribe((value) => {
      this.value = value;
    });
  }
}
