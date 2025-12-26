import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BeautyLogger } from '../services/beauty-logger';

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
})
export class CompB implements OnInit {
  private valueService = inject(ValueService);
  private beautyLogger = inject(BeautyLogger);
  value$ = new Observable();
  protected decValueHandler(): void {
    this.valueService.dec();
    // console.log(this.value$);
    this.beautyLogger.log('decrement', 'success');
  }

  ngOnInit(): void {
    // this.valueService.value$.subscribe((value) => {
    //   this.value = value;
    // });
    this.value$ = this.valueService.value$;
  }
}
