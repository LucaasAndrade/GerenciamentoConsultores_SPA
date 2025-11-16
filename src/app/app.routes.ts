import { Routes } from '@angular/router';
import { ConsultorListComponent } from './consultores/consultor-list/consultor-list.component'; // Import the standalone component

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultores',
    pathMatch: 'full'
  },
  {
    path: 'consultores',
    loadComponent: () => import('./consultores/consultor-list/consultor-list.component').then(c => c.ConsultorListComponent)
  }
];
