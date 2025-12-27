import { Component, inject, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BeautyLogger } from '../../services/beauty-logger';

@Component({
  selector: 'inst-comp-a',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
})
export class CompA implements OnInit {
  private valueService = inject(ValueService);
  private beautyLogger = inject(BeautyLogger);
  value$ = new Observable();
  protected addValueHandler(): void {
    this.valueService.add();
    this.beautyLogger.log('success', 'info');
    // console.log(
    //   `%c${this.value$}`,
    //   'background: red; color: blue; font-weight: bold; font-size: x-large',
    // );
  }

  ngOnInit(): void {
    // this.valueService.value$.subscribe((value) => {
    //   this.value = value;
    // });
    this.value$ = this.valueService.value$;
  }
}
