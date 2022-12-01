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
  roles$: Observable<Role[]>;
  dialog: any;


  constructor(
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.roles$ = this.rolesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
}

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
}
