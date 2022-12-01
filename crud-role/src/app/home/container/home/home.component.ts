import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Role } from '../../model/role.model';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //Precisa inicializar no construtor
  roles$: Observable<Role[]> | null = null;
  dialog: any;


  constructor(
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
}

//Inicialização e reinicialização da tela
refresh(){
  this.roles$ = this.rolesService.list()
  .pipe(
    catchError(error => {
      this.onError('Erro ao carregar cursos.');
      return of([])
    })
  );
}

//Tratamento de erro
onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}

  ngOnInit(): void {
    /** */
  }

  //Redirecionamento para formulário de criação
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(role: Role){
    this.router.navigate(['edit', role._id], { relativeTo: this.route });
  }

  onDelete(role: Role){
    this.rolesService.remove(role._id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Curso deletado com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
      });
    },
    () => this.onError('Erro ao tentar deletar curso.')
    )
  }
}
