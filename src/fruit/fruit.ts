import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

type Fruits = {
  id: string;
  name: string;
  price: number;
}[];

@Component({
  selector: 'inst-fruit',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './fruit.html',
  styleUrl: './fruit.scss',
})
export class Fruit {
  fruits: Fruits = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'watermelon', price: 30 },
    { id: '4', name: 'banana', price: 5 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'kiwi', price: 18 },
    { id: '7', name: 'mango', price: 14 },
    { id: '8', name: 'grapefruit', price: 3 },
    { id: '9', name: 'peach', price: 7 },
  ];
  currency = 125.12;
  date = new Date();
}
