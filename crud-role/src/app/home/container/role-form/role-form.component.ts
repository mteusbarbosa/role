import { Role } from './../../model/role.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    titulo: [''],
    local: [''],
    categoria: [''],
    descricao: [''],
    data: [''],
    horario: [''],
    valor: [1],
    roleUrl: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: RolesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    //this.form
  }

  ngOnInit(): void {
    //Edição de um role
    const role: Role = this.route.snapshot.data['role'];
    this.form.setValue({
      _id: role._id,
      titulo:  role.titulo,
      local:  role.local,
      categoria:  role.categoria,
      descricao:  role.descricao,
      data:  role.data,
      horario:  role.horario,
      valor: role.valor,
      roleUrl: role.roleUrl
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar role', '', { duration: 3000 });
  }
}
