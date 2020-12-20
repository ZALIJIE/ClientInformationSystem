import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiService:ApiService) { }

  getAllEmployeesInfo():Observable<Employee[]>{
    return this.apiService.getAll('employee')
  }

  // getInteractionInfo():Observable<>
}
