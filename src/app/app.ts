import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { Auth } from './services/auth';

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [FormsModule, SlicePipe, RouterOutlet, Child, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [],
})
export class App implements OnInit {
  authService = inject(Auth);
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!';
  value = '';
  arr: string[] = ['One', 'Two', 'Three'];
  name?: string;
  appTitle = 'Instagram';
  readonly isLoading = signal(true);

  text = 'start value';

  getName(name: string): void {
    this.name = name;
  }

  constructor() {
    setTimeout(() => this.isLoading.set(false), 3000);
  }
  ngOnInit(): void {
    this.authService.me();
  }
}
