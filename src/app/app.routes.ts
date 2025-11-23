import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'consultores/novo',
    loadComponent: () => import('./consultores/consultor-form/consultor-form.component').then(c => c.ConsultorFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'consultores/editar/:id', // Nova rota para edição
    loadComponent: () => import('./consultores/consultor-form/consultor-form.component').then(c => c.ConsultorFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'consultores',
    loadComponent: () => import('./consultores/consultor-list/consultor-list.component').then(c => c.ConsultorListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'administradores',
    loadComponent: () => import('./administradores/administrador-list/administrador-list.component').then(c => c.AdministradorListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'administrador-form',
    loadComponent: () => import('./administradores/administrador-form/administrador-form.component').then(c => c.AdministradorFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'administrador-form/:id',
    loadComponent: () => import('./administradores/administrador-form/administrador-form.component').then(c => c.AdministradorFormComponent),
    canActivate: [authGuard]
  }
];
