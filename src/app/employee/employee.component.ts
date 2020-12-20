import { EmployeeService } from './../core/services/employee.service';
import { Employee } from './../shared/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[] | undefined
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployeesInfo().subscribe((e)=>
      {this.employees=e;}
      );
  }

}
