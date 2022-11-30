import { Role } from '../../model/role.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  @Input() role: Role[] = [];

  readonly displayedColumns = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
