import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inst-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() titleProps?: string;
  @Output() child = new EventEmitter<string>();

  sendNameHandler(): void {
    const name = 'child';
    this.child.emit(name);
  }
}
