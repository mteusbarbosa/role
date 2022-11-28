import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RolesService } from './../services/roles.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent implements OnInit {

  form = this.formBuilder.group({
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
    private location: Location
  ) {
    //this.form
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
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
