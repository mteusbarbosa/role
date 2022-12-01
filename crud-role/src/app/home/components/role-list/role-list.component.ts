import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Role } from '../../model/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  @Input() roles: Role[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

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

  //Envia o role para o home.component
  onEdit(role: Role){
    this.edit.emit(role);
  }

  onDelete(role: Role){
    this.edit.emit(role);
  }

}
