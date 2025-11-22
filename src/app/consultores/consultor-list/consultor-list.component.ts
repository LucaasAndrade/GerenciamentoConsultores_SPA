import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // Importe CommonModule e DatePipe
import { Consultor } from '../../models/consultor.model';
import { Router } from '@angular/router';
import { ConsultorService } from '../consultor.service';

@Component({
  selector: 'app-consultor-list',
  standalone: true, // Marque o componente como standalone
  imports: [CommonModule, DatePipe], // Adicione CommonModule e DatePipe aqui
  templateUrl: './consultor-list.component.html',
  styleUrls: ['./consultor-list.component.css']
})
export class ConsultorListComponent implements OnInit {

  // Dados de exemplo (mock)
  consultores: Consultor[] = [];

  constructor(
    private router: Router,
    private consultorService: ConsultorService
  ) { }

  ngOnInit(): void {
    this.consultorService.getConsultores().subscribe({
      next: (consultores) => {
        this.consultores = consultores;
      },
      error: (error) => {
        console.error('Erro ao buscar consultores:', error);
      }
    });
  }

  adicionarConsultor(): void {
    this.router.navigate(["/consultores/novo"])
  }

  editarConsultor(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/consultores/editar', id]); // Navega para o formulário de edição com o ID
  }

  excluirConsultor(id: string | undefined): void {
    if (!id) return;
    if (confirm('Tem certeza que deseja excluir este consultor?')) {
      this.consultorService.deleteConsultor(id).subscribe({
        next: () => {
          this.consultores = this.consultores.filter(c => c.id_consultor !== id);
          console.log(`Consultor com ID: ${id} excluído com sucesso.`);
        },
        error: (error) => {
          console.error(`Erro ao excluir consultor com ID: ${id}`, error);
        }
      });
    }
  }
}
