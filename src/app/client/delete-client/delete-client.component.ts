import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  id:number
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
  }

}
