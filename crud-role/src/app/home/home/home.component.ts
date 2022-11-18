import { Component, Input, OnInit } from '@angular/core';
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
  displayedColumns = ['_id', 'titulo', 'local', 'descricao', 'roleUrl'];

  constructor(private rolesService: RolesService) {
    this.roles = this.rolesService.list();
  }

  ngOnInit(): void {
    /** */
  }
}
