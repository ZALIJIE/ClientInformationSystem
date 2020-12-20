import { CreateEmployee } from './../../shared/createEmployee';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { map } from 'rxjs/operators';
import { CreateClient } from 'src/app/shared/createClient';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiService:ApiService) { }

  //listing all employee objects
  getAllEmployeesInfo():Observable<Employee[]>{
    return this.apiService.getAll('employee')
  }

  //create a new employee entity
  createEmployee(createEmployee:CreateEmployee):Observable<boolean>{
    return this.apiService.create('employee/create', createEmployee).pipe(
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
