import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // Importe CommonModule e DatePipe
import { Consultor } from '../../models/consultor.model';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // A ser populado por um serviço
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
    console.log(`Botão Excluir clicado para o consultor com ID: ${id}`);
    // Lógica para abrir um diálogo de confirmação e excluir o item será implementada aqui
  }
}
