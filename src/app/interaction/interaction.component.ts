import { Interaction } from 'src/app/shared/interaction';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../core/services/interaction.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  id:number;
  interactions:Interaction[];
  constructor(private interactionService:InteractionService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('employee')){
      this.id = +this.route.snapshot.paramMap.get('employeeId');
      this.interactionService.getAllInteractionByEmployeeId(this.id).subscribe((i)=>{
        this.interactions=i;
      });
    }
    if(this.router.url.includes('client')){
      this.id = +this.route.snapshot.paramMap.get('clientId');
      this.interactionService.getAllInteractionByEmployeeId(this.id).subscribe((i)=>{
        this.interactions=i;
      });
    }

  }
}
