import { Routes } from '@angular/router';
import { Fruit } from './components/fruit/fruit';
import { Login } from './components/login/login';
import { CompA } from './components/comp-a/comp-a';
import { CompB } from './components/comp-b/comp-b';
import { Todolists } from './components/todolists/todolists';
import { EmailForm } from './components/email-form/email-form';

export const routes: Routes = [
  {
    path: '',
    component: Fruit,
    title: 'Fruit',
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
    title: 'Todolists',
  },
  {
    path: 'emailForm',
    component: EmailForm,
    title: 'EmailForm',
  },
];
