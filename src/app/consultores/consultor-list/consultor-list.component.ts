import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Consultor } from '../../models/consultor.model';
import { Router } from '@angular/router';
import { ConsultorService } from '../consultor.service';

@Component({
  selector: 'app-consultor-list',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule], // Add FormsModule here
  templateUrl: './consultor-list.component.html',
  styleUrls: ['./consultor-list.component.css']
})
export class ConsultorListComponent implements OnInit {
  consultores: Consultor[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router,
    private consultorService: ConsultorService
  ) { }

  ngOnInit(): void {
    this.filterConsultores(); // Fetch initial data
  }

  filterConsultores(): void {
    if (this.searchTerm.trim()) {
      this.consultorService.getConsultoresFilteredByName(this.searchTerm.trim()).subscribe({
        next: (data) => {
          this.consultores = Array.isArray(data) ? data : [data];
        },
        error: (error) => {
          console.error('Erro ao buscar consultores filtrados:', error);
          this.consultores = []; // Clear list on error
        }
      });
    } else {
      this.consultorService.getConsultores().subscribe({
        next: (consultores) => {
          this.consultores = consultores;
        },
        error: (error) => {
          console.error('Erro ao buscar todos os consultores:', error);
          this.consultores = []; // Clear list on error
        }
      });
    }
  }

  adicionarConsultor(): void {
    this.router.navigate(["/consultores/novo"])
  }

  editarConsultor(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/consultores/editar', id]);
  }

  excluirConsultor(id: string | undefined): void {
    if (!id) return;
    if (confirm('Tem certeza que deseja excluir este consultor?')) {
      this.consultorService.deleteConsultor(id).subscribe({
        next: () => {
          this.filterConsultores(); // Re-fetch data after deletion
          console.log(`Consultor com ID: ${id} excluído com sucesso.`);
        },
        error: (error) => {
          console.error(`Erro ao excluir consultor com ID: ${id}`, error);
        }
      });
    }
  }
}
