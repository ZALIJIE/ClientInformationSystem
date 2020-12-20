import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Interaction } from 'src/app/shared/interaction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private apiService: ApiService) { 
  }

  getAllInteractionByEmployeeId(empId:number): Observable<Interaction[]>{
    return this.apiService.getAll('interaction/employee/'+empId);
  }

  getAllInteractionByClientId(clientId:number): Observable<Interaction[]>{
    return this.apiService.getAll('interaction/client/'+clientId);
  }
}
