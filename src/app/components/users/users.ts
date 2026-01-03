import { Component, inject, OnInit } from '@angular/core';
import { User, UserT } from '../../services/user';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

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

  // getUsers(): void {
  //  this.users$= this.userService.getUsers().items;
  // }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
