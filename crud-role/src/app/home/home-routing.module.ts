import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleResolver } from './guards/role.resolver';
import { HomeComponent } from './container/home/home.component';
import { RoleFormComponent } from './container/role-form/role-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'new',
    component: RoleFormComponent,
    resolve: { role: RoleResolver },
  },
  {
    path: 'edit/:id',
    component: RoleFormComponent,
    resolve: { role: RoleResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
