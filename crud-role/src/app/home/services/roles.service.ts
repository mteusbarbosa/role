import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  //Endereço da URL da API
  private readonly API = 'api/roles';

  constructor(private httpClient: HttpClient) {}

  //Método GET HTTP - receber os roles do servidor
  list() {
    return this.httpClient.get<Role[]>(this.API)
      //.pipe(tap((roles) => console.log(roles)));
  }

  //Método POST HTTP - criar um role
  private create(record: Partial<Role>) {
    return this.httpClient.post<Role>(this.API, record);
  }

  //Método PUT HTTP - atualizar um role
  private update(record: Partial<Role>) {
    return this.httpClient.put<Role>(`${this.API}/${record._id}`, record);
  }

  //Carregamento do ID no formulário de edição
  loadById(id: string) {
    return this.httpClient.get<Role>(`${this.API}/${id}`);
  }

  //Salvar ou atualizar um novo role
  save(record: Partial<Role>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }
}
