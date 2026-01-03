import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserT } from '../../services/user';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'inst-users',
  imports: [AsyncPipe, NgOptimizedImage, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users$!: Observable<UserT[]>;
  error = '';
  private userService = inject(User);

  getUsers(): void {
    this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
    this.users$ = this.userService.users$;
  }
}
