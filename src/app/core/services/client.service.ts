import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client';
import { map } from 'rxjs/operators';
import { CreateClient } from 'src/app/shared/createClient';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService:ApiService) { }

  //listing all clients object in a table
  getAllClientsInfo(): Observable<Client[]>{
    return this.apiService.getAll('client');
  }

  //creat
  createClient(createClient:CreateClient):Observable<boolean>{
    return this.apiService.create('client/create', createClient).pipe(
      map((response)=>{
        if(response){
          console.log(response);
          return true;
        }
        return false;
      })
    )
  }
}
