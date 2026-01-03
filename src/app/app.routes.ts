import { Routes } from '@angular/router';
import { Fruit } from './components/fruit/fruit';
import { Login } from './components/login/login';
import { CompA } from './components/comp-a/comp-a';
import { CompB } from './components/comp-b/comp-b';
import { Todolists } from './components/todolists/todolists';
import { EmailForm } from './components/email-form/email-form';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Users } from './components/users/users';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: Fruit,
    title: 'Fruit',
  },
  {
    path: 'users',
    component: Users,
    title: 'Users',
  },
  {
    path: 'profile/:userId',
    component: Profile,
    title: 'Profile',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'compA',
    component: CompA,
    title: 'CompA',
  },
  {
    path: 'compB',
    component: CompB,
    title: 'CompB',
  },
  {
    path: 'todolist',
    component: Todolists,
    title: 'Todolist',
  },
  {
    path: 'emailForm',
    component: EmailForm,
    title: 'EmailForm',
  },
  {
    path: 'pageNotFound',
    component: PageNotFound,
    title: 'Page not found',
  },
  { path: '**', redirectTo: 'pageNotFound' },
];
