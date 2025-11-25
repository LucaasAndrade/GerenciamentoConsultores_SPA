import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiUrl = `${environment.apiUrl}/api/admin`;

  constructor(private http: HttpClient) { }

  getAdministradores(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.apiUrl);
  }

  getAdministrador(id: string): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.apiUrl}/${id}`);
  }

  createAdministrador(administrador: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>(this.apiUrl, administrador);
  }

  updateAdministrador(id: string, administrador: Administrador): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, administrador);
  }

  deleteAdministrador(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
