import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InteractionComponent } from './interaction/interaction.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ClientComponent } from './client/client.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { UpdateInteractionComponent } from './interaction/update-interaction/update-interaction.component';
import { CreateInteractionComponent } from './interaction/create-interaction/create-interaction.component';
import { DeleteInteractionComponent } from './interaction/delete-interaction/delete-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    InteractionComponent,
    HeaderComponent,
    ClientComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    CreateClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    UpdateInteractionComponent,
    CreateInteractionComponent,
    DeleteInteractionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
