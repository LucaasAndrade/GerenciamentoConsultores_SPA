import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Administrador } from '../models/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/admin/login';
  private readonly ADMIN_ID_KEY = 'id_admin';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: Pick<Administrador, 'login' | 'password'>): Observable<Administrador> {
    return this.http.post<Administrador>(this.apiUrl, credentials).pipe(
      tap(response => {
        console.log(response)
        if (response && response.id_admin) {
          localStorage.setItem(this.ADMIN_ID_KEY, response.id_admin);
          this.router.navigate(['/consultores']);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.ADMIN_ID_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.ADMIN_ID_KEY);
  }

  getAdminId(): string | null {
    return localStorage.getItem(this.ADMIN_ID_KEY);
  }
}
