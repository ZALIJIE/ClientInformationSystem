import { InteractionService } from './../../core/services/interaction.service';
import { CreateInteraction } from 'src/app/shared/createInteraction';
import { Interaction } from 'src/app/shared/interaction';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-interaction',
  templateUrl: './create-interaction.component.html',
  styleUrls: ['./create-interaction.component.css']
  
})
export class CreateInteractionComponent implements OnInit {
  interaction:CreateInteraction={
    ClientId:null,
    EmployeeId:null,
    IntType:'',
    IntDate:null,
    Remarks:''
  }
  constructor(private interactionService:InteractionService, private router:Router) { }

  ngOnInit(): void {
  }
  create() {
    this.interactionService.createInteraction(this.interaction).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['']);
          console.log("Successfully created interaction");
        } 
        else {
          console.log("Unable to create interaction")
        }
      }

    );
  }
}
