import { ClientService } from './../core/services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:Client[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClientsInfo().subscribe((c)=>{
      this.clients=c;
    });
  }

}
