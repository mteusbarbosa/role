import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RoleFormComponent } from './role-form/role-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: RoleFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
