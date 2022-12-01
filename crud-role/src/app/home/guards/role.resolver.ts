import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Role } from './../model/role.model';
import { RolesService } from './../services/roles.service';

@Injectable({
  providedIn: 'root',
})

export class RoleResolver implements Resolve<Role> {

  constructor(private service: RolesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      _id: '',
      titulo: '',
      local: '',
      categoria: '',
      descricao: '',
      data: '',
      horario: '',
      valor: 0,
      roleUrl: '',
    });
  }
}
