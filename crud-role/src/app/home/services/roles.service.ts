import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs/operators';

import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly API = '/assets/roles.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Role[]>(this.API)
      .pipe(tap((courses) => console.log(courses)));
  }
}
