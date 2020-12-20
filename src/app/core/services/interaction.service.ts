import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Interaction } from 'src/app/shared/interaction';
import { CreateInteraction } from 'src/app/shared/createInteraction';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private apiService: ApiService) { 
  }

  //Create Two independent methods for displaying all Interaction. 
  //First Scenairo: The interaction (where employee.id==interaction.employeeId) will be displayed when User click on employee's name.
  getAllInteractionByEmployeeId(empId:number): Observable<Interaction[]>{
    return this.apiService.getAll('interaction/employee/'+empId);
  }

  //Second Scenairo: The interaction (where client.id==interaction.clientId) will be displayed when User click on client's name.
  getAllInteractionByClientId(clientId:number): Observable<Interaction[]>{
    return this.apiService.getAll('interaction/client/'+clientId);
  }

  //Creating a new interaction object
  createInteraction(createInteraction:CreateInteraction):Observable<boolean>{
    return this.apiService.create('interaction/create', createInteraction).pipe(
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
