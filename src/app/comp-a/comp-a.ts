import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'inst-comp-a',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
})
export class CompA implements OnInit {
  private valueService = inject(ValueService);
  value$ = new Observable();
  protected addValueHandler(): void {
    this.valueService.add();
    console.log(this.valueService.value$);
  }

  ngOnInit(): void {
    // this.valueService.value$.subscribe((value) => {
    //   this.value = value;
    // });
    this.value$ = this.valueService.value$;
  }
}
