
import { Component } from '@angular/core';

import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";
import { QuestionAnswer } from "../../models/questionAnswer.model";
import { QuestionAnswerRepository } from "../../models/questionAnswer.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/models/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class detailsComponent {
    title: string = 'Details';
    item: Advertisement;
    dateEnabled: string;
    lifetime: string;
    constructor(private repository: AdvertisementRepository,
        private questionsRepository: QuestionAnswerRepository,
        private router: Router, activeRoute: ActivatedRoute, public auth: AuthService) 
  { 
    this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
    this.dateEnabled = new Date(this.item.DateEnabled).toISOString().split('T')[0];
    this.lifetime = new Date(this.item.Lifetime).toISOString().split('T')[0];
  } 

  get questionList(): QuestionAnswer[] {
    return this.questionsRepository.getQuestionAnswer(this.item._id);        
  }

  deleteItem(id: string){
    if(confirm("Are you sure do you want to delete?")) {
      this.router.navigateByUrl("/question/delete/" + id + "/" + this.item._id);
    }
  }
    
}