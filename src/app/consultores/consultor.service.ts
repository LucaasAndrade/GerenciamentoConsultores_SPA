import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultor } from '../models/consultor.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultorService {
  private apiUrl = '/api/consultores'; // Base URL for the API

  constructor(private http: HttpClient) { }

  createConsultor(consultor: Consultor): Observable<Consultor> {
    return this.http.post<Consultor>(this.apiUrl, consultor);
  }

  getConsultores(): Observable<Consultor[]> {
    return this.http.get<Consultor[]>(this.apiUrl);
  }

  getConsultoresFilteredByName(name: string): Observable<Consultor[]> {
    return this.http.get<Consultor[]>(`${this.apiUrl}/filtered/${name}`);
  }

  deleteConsultor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getConsultorById(id: string): Observable<Consultor> {
    return this.http.get<Consultor>(`${this.apiUrl}/${id}`);
  }

  updateConsultor(id: string, consultor: Consultor): Observable<Consultor> {
    return this.http.put<Consultor>(`${this.apiUrl}/${id}`, consultor);
  }

  // You can add other methods like getConsultorById, updateConsultor, deleteConsultor here later
}
