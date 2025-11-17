import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultores',
    pathMatch: 'full'
  },
  {
    path: 'consultores/novo',
    loadComponent: () => import('./consultores/consultor-form/consultor-form.component').then(c => c.ConsultorFormComponent)
  },
  {
    path: 'consultores/editar/:id', // Nova rota para edição
    loadComponent: () => import('./consultores/consultor-form/consultor-form.component').then(c => c.ConsultorFormComponent)
  },
  {
    path: 'consultores',
    loadComponent: () => import('./consultores/consultor-list/consultor-list.component').then(c => c.ConsultorListComponent)
  }
];
