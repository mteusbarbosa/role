import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RolesService } from './../services/roles.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: RolesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      titulo: [null],
      local: [null],
      categoria: [null],
      descricao: [null],
      data: [null],
      horario: [null],
      valor: [null],
      roleUrl: [null],
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onSubmit() {
    this.service
      .save(this.form.value)
      .subscribe((result) => console.log(result), error => this.onError());
  }

  onCancel() {}

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000 });
  }
}
