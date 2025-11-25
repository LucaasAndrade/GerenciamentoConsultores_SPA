import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Administrador } from '../../models/administrador.model';
import { AdministradorService } from '../administrador.service';
import { AuthService } from '../../auth/auth.service'; // Import AuthService

@Component({
  selector: 'app-administrador-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {
  administradores: Administrador[] = [];
  loggedInAdminId: string | null = null; // To store the logged-in admin's ID

  constructor(
    private administradorService: AdministradorService,
    private authService: AuthService // Inject AuthService
  ) { }

  ngOnInit(): void {
    this.loggedInAdminId = this.authService.getAdminId(); // Get the logged-in admin ID
    this.administradorService.getAdministradores().subscribe(data => {
      this.administradores = data;
    });
  }

  deleteAdministrador(id: string): void {
    console.log(this.loggedInAdminId === id)
    if (id === this.loggedInAdminId) {
      alert('Você não pode excluir o seu próprio usuário enquanto estiver logado.');
      return;
    }

    if (confirm('Tem certeza que deseja excluir este administrador?')) {
      this.administradorService.deleteAdministrador(id).subscribe(() => {
        this.administradores = this.administradores.filter(administrador => administrador.id_admin !== id);
        alert('Administrador excluído com sucesso!');
      },
      error => {
        console.error('Erro ao excluir administrador:', error);
        alert('Ocorreu um erro ao excluir o administrador.');
      });
    }
  }
}
