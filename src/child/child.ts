import { Component, Input } from '@angular/core';

@Component({
  selector: 'inst-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() titleProps?: string;
}
