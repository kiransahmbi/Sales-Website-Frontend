import { Component, Sanitizer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionAnswer } from "../../models/questionAnswer.model";
import { QuestionAnswerRepository } from "../../models/questionAnswer.repository";

@Component({
    selector: "add_update",
    templateUrl: "add_update.component.html"
})

export class add_updateComponent {
  
    title: string;
    action: string;
    advertisement: string;
    item: QuestionAnswer = new QuestionAnswer();

    constructor(private repository: QuestionAnswerRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        

        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"], activeRoute.snapshot.params["advertisement"]);
        }

        // Edit
        if (activeRoute.snapshot.params["mode"] == "edit") {
            this.action = "edit";
            this.title = "Update Answer";
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        }
        
        //Add
        else {
            this.action = "add";
            this.title = "Ask a Question";
            this.item = new QuestionAnswer();
            this.item._id = "";
        }
        this.item.AdvertisementID = activeRoute.snapshot.params["advertisement"];
    }

    save(form: NgForm) {
        console.log(this.item);
        this.repository.saveQuestionAnswer(this.item);
        this.router.navigateByUrl("/advertisement/details/"+this.item.AdvertisementID);                
    }

    private deleteItem(id: string, AdvertisementID:string){
        this.repository.deleteQuestionAnswer(id);
        this.router.navigateByUrl("/advertisement/details/" + AdvertisementID);
    }
    
}