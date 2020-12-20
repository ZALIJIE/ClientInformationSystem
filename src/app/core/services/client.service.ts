import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService:ApiService) { }

  //listing all clients information in a table
  getAllClientsInfo(): Observable<Client[]>{
    return this.apiService.getAll('client');
  }
}
