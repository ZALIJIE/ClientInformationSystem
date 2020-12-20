import { CreateClientComponent } from './client/create-client/create-client.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InteractionComponent } from './interaction/interaction.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { CreateInteractionComponent } from './interaction/create-interaction/create-interaction.component';
import { UpdateInteractionComponent } from './interaction/update-interaction/update-interaction.component';
import { DeleteInteractionComponent } from './interaction/delete-interaction/delete-interaction.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'employee/interaction/:employeeId', component:InteractionComponent},
  {path:'client/interaction/:clientId', component:InteractionComponent},
  {path:'client', component:ClientComponent},
  {path:'employee/create', component:CreateEmployeeComponent},
  {path:'employee/update', component:UpdateEmployeeComponent},
  {path:'employee/delete', component:DeleteEmployeeComponent},
  {path:'client/create', component:CreateClientComponent},
  {path:'client/update', component:UpdateClientComponent},
  {path:'client/delete', component:DeleteClientComponent},
  {path:'interaction/create', component:CreateInteractionComponent},
  {path:'interaction/update', component:UpdateInteractionComponent},
  {path:'interaction/delete', component:DeleteInteractionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
