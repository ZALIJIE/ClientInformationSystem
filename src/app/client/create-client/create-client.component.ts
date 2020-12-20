import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client.service';
import { CreateClient } from 'src/app/shared/createClient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  client:CreateClient={
    Name:'',
    Email:'',
    Phone:'',
    Address:'',
  }
  constructor(private clientService:ClientService, private router:Router ) { }

  ngOnInit(): void {

  }

  create() {
    this.clientService.createClient(this.client).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['']);
          console.log("Successfully create client");
        } 
        else {
          console.log("Unable to create client")
        }
      }

    );
  }

}
