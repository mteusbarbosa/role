import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly API = 'api/roles';

  constructor(private httpClient: HttpClient) { }

  //Método GET HTTP
  list() {
    return this.httpClient
      .get<Role[]>(this.API)
      .pipe(tap((roles) => console.log(roles)));
  }

  loadById(id: string){
    return this.httpClient.get<Role>(`${this.API}/${id}`);
  }

  //Método POST HTTP
  save(record: Partial<Role>){
    return this.httpClient.post<Role>(this.API, record);
  }
}
