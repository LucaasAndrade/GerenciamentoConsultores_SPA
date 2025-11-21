import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importe ActivatedRoute
import { ConsultorService } from '../consultor.service';


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
  isEditMode = false;
  private currentConsultorId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, // Injete ActivatedRoute
    private router: Router,
    private consultorService: ConsultorService // Injete o ConsultorService
  ) {
    this.consultorForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      area_atuacao: ['', Validators.required] // Changed from areaDeAtuacao
    });
  }

  ngOnInit(): void {
    this.currentConsultorId = this.route.snapshot.paramMap.get('id');
    if (this.currentConsultorId) {
      this.isEditMode = true;
      // Lógica para carregar dados do consultor (usar um serviço)
    }
  }

  onSubmit(): void {
    if (this.consultorForm.valid) {
      if (this.isEditMode) {
        console.log(`Formulário de EDIÇÃO válido para o ID ${this.currentConsultorId}! Dados:`, this.consultorForm.value);
        // Lógica para chamar o serviço de update
      } else {
        this.consultorService.createConsultor(this.consultorForm.value).subscribe({
          next: (consultor) => {
            console.log('Consultor criado com sucesso:', consultor);
            this.router.navigate(['/consultores']); // Redireciona para a lista após salvar
          },
          error: (error) => {
            console.error('Erro ao criar consultor:', error);
            // Implementar feedback de erro para o usuário
          }
        });
      }
    } else {
      this.consultorForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/consultores']); // Navega de volta para a lista
  }
}