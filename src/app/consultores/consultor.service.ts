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

  // You can add other methods like getConsultores, getConsultorById, updateConsultor, deleteConsultor here later
}
