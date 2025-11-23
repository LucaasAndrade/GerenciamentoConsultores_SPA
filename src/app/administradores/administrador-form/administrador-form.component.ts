import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../../models/administrador.model';

@Component({
  selector: 'app-administrador-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './administrador-form.component.html',
  styleUrls: ['./administrador-form.component.css']
})
export class AdministradorFormComponent implements OnInit {
  administradorForm: FormGroup;
  isEditMode = false;
  private currentAdminId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private administradorService: AdministradorService
  ) {
    this.administradorForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentAdminId = this.route.snapshot.paramMap.get('id');
    if (this.currentAdminId) {
      this.isEditMode = true;
      this.administradorService.getAdministrador(this.currentAdminId).subscribe({
        next: (admin) => {
          this.administradorForm.patchValue(admin);
        },
        error: (error) => {
          console.error('Erro ao buscar administrador:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.administradorForm.valid) {
      const adminData: Administrador = {
        ...this.administradorForm.value,
        data_criacao: new Date(),
        ultimo_update: new Date()
      };

      if (this.isEditMode && this.currentAdminId) {
        this.administradorService.updateAdministrador(this.currentAdminId, adminData).subscribe({
          next: () => {
            this.router.navigate(['/administradores']);
          },
          error: (error) => {
            console.error('Erro ao atualizar administrador:', error);
          }
        });
      } else {
        this.administradorService.createAdministrador(adminData).subscribe({
          next: () => {
            this.router.navigate(['/administradores']);
          },
          error: (error) => {
            console.error('Erro ao criar administrador:', error);
          }
        });
      }
    } else {
      this.administradorForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/administradores']);
  }
}
