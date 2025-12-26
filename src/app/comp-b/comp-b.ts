import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
  providers: [ValueService],
})
export class CompB implements OnInit {
  private valueService = inject(ValueService);
  value = 0;
  protected decValueHandler(): void {
    this.valueService.dec();
    console.log(this.valueService.value);
  }

  ngOnInit(): void {
    this.value = this.valueService.value;
  }
}
