import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RoleFormComponent } from './role-form/role-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    RoleFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
