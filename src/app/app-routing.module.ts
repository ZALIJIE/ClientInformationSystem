import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InteractionComponent } from './interaction/interaction.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'employee/interaction/:employeeId', component:InteractionComponent},
  {path:'client/interaction/:clientId', component:InteractionComponent},
  {path:'client', component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
