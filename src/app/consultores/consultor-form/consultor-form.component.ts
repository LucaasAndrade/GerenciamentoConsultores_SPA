import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importe ActivatedRoute
import { AreaDeAtuacao } from '../../models/area-de-atuacao.model';
import { Consultor } from '../../models/consultor.model';

@Component({
  selector: 'app-consultor-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './consultor-form.component.html',
  styleUrls: ['./consultor-form.component.css']
})
export class ConsultorFormComponent implements OnInit {
  consultorForm: FormGroup;
  areasDeAtuacao: AreaDeAtuacao[] = [];
  isEditMode = false;
  private currentConsultorId: string | null = null;

  // Mock de dados de consultores para simular um serviço
  private mockConsultores: Consultor[] = [
      { id: '1', nome: 'Carlos Silva', email: 'carlos.silva@example.com', telefone: '(11) 98765-4321', areaDeAtuacao: { id: 1, nome: 'Tecnologia da Informação' }, dataDeCriacao: new Date(), ultimoUpdate: new Date() },
      { id: '2', nome: 'Ana Souza', email: 'ana.souza@example.com', telefone: '(21) 91234-5678', areaDeAtuacao: { id: 2, nome: 'Recursos Humanos' }, dataDeCriacao: new Date(), ultimoUpdate: new Date() },
      { id: '3', nome: 'Pedro Martins', email: 'pedro.martins@example.com', telefone: '(31) 95555-8888', areaDeAtuacao: { id: 1, nome: 'Tecnologia da Informação' }, dataDeCriacao: new Date(), ultimoUpdate: new Date() }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, // Injete ActivatedRoute
    private router: Router
  ) {
    this.consultorForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      areaDeAtuacao: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.areasDeAtuacao = [
      { id: 1, nome: 'Tecnologia da Informação' },
      { id: 2, nome: 'Recursos Humanos' },
      { id: 3, nome: 'Financeiro' },
      { id: 4, nome: 'Marketing Digital' }
    ];

    this.currentConsultorId = this.route.snapshot.paramMap.get('id');
    if (this.currentConsultorId) {
      this.isEditMode = true;
      const consultor = this.mockConsultores.find(c => c.id === this.currentConsultorId);
      if (consultor) {
        this.consultorForm.patchValue({
          nome: consultor.nome,
          email: consultor.email,
          telefone: consultor.telefone,
          areaDeAtuacao: consultor.areaDeAtuacao.id
        });
      }
    }
  }

  onSubmit(): void {
    if (this.consultorForm.valid) {
      if (this.isEditMode) {
        console.log(`Formulário de EDIÇÃO válido para o ID ${this.currentConsultorId}! Dados:`, this.consultorForm.value);
        // Lógica para chamar o serviço de update
      } else {
        console.log('Formulário de CRIAÇÃO válido! Dados:', this.consultorForm.value);
        // Lógica para chamar o serviço de create
      }
      this.router.navigate(['/consultores']); // Redireciona para a lista após salvar
    } else {
      this.consultorForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/consultores']); // Navega de volta para a lista
  }
}
