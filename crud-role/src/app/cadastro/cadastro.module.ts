import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
