import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { RoleFormComponent } from './container/role-form/role-form.component';
import { RoleListComponent } from './components/role-list/role-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    RoleFormComponent,
    RoleListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
