import { Injectable } from '@angular/core';

type UserT = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};
type UserResp = {
  items: UserT[];
  totalCount: number;
  error: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class User {}
