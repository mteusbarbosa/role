import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Role } from '../model/role.model';
import { RolesService } from './../services/roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //Precisa inicializar no construtor
  roles: Observable<Role[]>;
  displayedColumns = [
    '_id',
    'titulo',
    'local',
    'categoria',
    'descricao',
    'data',
    'horario',
    'valor',
    'roleUrl',
  ];

  constructor(
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.roles = this.rolesService.list();
  }

  ngOnInit(): void {
    /** */
  }

  //Redirecionamento para formulário de criação
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
