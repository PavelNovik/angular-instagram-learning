import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProfileService, ProfileT } from '../../services/profile';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'inst-profile',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  profile$!: Observable<ProfileT>;
  private route = inject(ActivatedRoute);
  private getUserProfiles = inject(ProfileService);
  private router = inject(Router);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    this.profile$ = this.getUserProfiles.getUserProfile(userId!);

    // console.log(userId);
  }

  protected readonly map = map;

  protected backToUsersHandler(): void {
    this.router.navigate(['/users']);
  }
}
