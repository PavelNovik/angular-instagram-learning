import { Component, inject, OnInit } from '@angular/core';
import { User, UserT } from '../../services/user';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'inst-users',
  imports: [AsyncPipe, RouterLink, NgOptimizedImage],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users$!: Observable<UserT[]>;
  error = '';
  private userService = inject(User);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // getUsers(): void {
  //  this.users$= this.userService.getUsers().items;
  // }

  ngOnInit(): void {
    // const page = Number(this.route.snapshot.queryParamMap.get('page'));
    // const currentPage = page ? page : 1;
    // this.getUsers(currentPage);
    this.route.queryParams.subscribe((params) => {
      this.getUsers(params['page']);
    });
  }
  getUsers(page: number): void {
    this.users$ = this.userService.getUsers(page);
  }
  protected nextUsersHandler(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('page'));
    const nextPage = page ? page + 1 : 2;
    // this.router.navigateByUrl(`users?page=${nextPage}`).then(() => {
    //   this.getUsers(nextPage);
    // });
    this.router.navigate(['users'], { queryParams: { page: nextPage } });
    //   .then(() => {
    //   this.getUsers(nextPage);
    // });
  }

  // protected previousUsersHandler(): void {
  //   if (this.page !== 0) {
  //     const previousPage = this.page - 1;
  //     this.router.navigateByUrl(`users?page=${previousPage}`).then(() => {
  //       this.getUsers(previousPage);
  //     });
  //   }
  // }
}
