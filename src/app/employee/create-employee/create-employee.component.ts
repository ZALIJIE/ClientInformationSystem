import { CreateEmployee } from './../../shared/createEmployee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  emp:CreateEmployee={
    Name:'',
    Password:'',
    Designation:''
  }
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }
  create() {
    this.employeeService.createEmployee(this.emp).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['']);
          console.log("Login Successful");
        } 
        else {
          console.log("Unable to create employee")
        }
      }

    );
  }
}
