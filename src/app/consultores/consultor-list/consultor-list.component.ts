import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // Importe CommonModule e DatePipe
import { Consultor } from '../../models/consultor.model';
import { AreaDeAtuacao } from '../../models/area-de-atuacao.model';

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

  constructor() { }

  ngOnInit(): void {
    // Exemplo de áreas de atuação
    const areaTi: AreaDeAtuacao = { id: 1, nome: 'Tecnologia da Informação' };
    const areaRh: AreaDeAtuacao = { id: 2, nome: 'Recursos Humanos' };

    // Populando a lista com dados de exemplo
    this.consultores = [
      {
        id: '1',
        nome: 'Carlos Silva',
        email: 'carlos.silva@example.com',
        telefone: '(11) 98765-4321',
        areaDeAtuacao: areaTi,
        dataDeCriacao: new Date('2023-10-01'),
        ultimoUpdate: new Date('2023-11-15')
      },
      {
        id: '2',
        nome: 'Ana Souza',
        email: 'ana.souza@example.com',
        telefone: '(21) 91234-5678',
        areaDeAtuacao: areaRh,
        dataDeCriacao: new Date('2023-09-20'),
        ultimoUpdate: new Date('2023-11-10')
      },
      {
        id: '3',
        nome: 'Pedro Martins',
        email: 'pedro.martins@example.com',
        telefone: '(31) 95555-8888',
        areaDeAtuacao: areaTi,
        dataDeCriacao: new Date('2023-08-15'),
        ultimoUpdate: new Date('2023-10-30')
      }
    ];
  }

  adicionarConsultor(): void {
    console.log('Botão Adicionar Novo clicado!');
    // Lógica para navegar para o formulário de adição será implementada aqui
  }

  editarConsultor(id: string | undefined): void {
    if (!id) return;
    console.log(`Botão Editar clicado para o consultor com ID: ${id}`);
    // Lógica para navegar para o formulário de edição será implementada aqui
  }

  excluirConsultor(id: string | undefined): void {
    if (!id) return;
    console.log(`Botão Excluir clicado para o consultor com ID: ${id}`);
    // Lógica para abrir um diálogo de confirmação e excluir o item será implementada aqui
  }
}
