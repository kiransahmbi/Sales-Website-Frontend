import { Component, Sanitizer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionAnswer } from "../../models/questionAnswer.model";
import { QuestionAnswerRepository } from "../../models/questionAnswer.repository";

@Component({
    selector: "add_edit",
    templateUrl: "add_update.component.html"
})

export class add_updateComponent {
  
    title: string = 'Add a new Item';
    editing: boolean = false;
    item: QuestionAnswer = new QuestionAnswer();

    constructor(private repository: QuestionAnswerRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        }

        //Add
        else{
            this.item = new QuestionAnswer();
        }

    }

    save(form: NgForm) {
        this.repository.saveQuestionAnswer(this.item);
        this.router.navigateByUrl("");                
    }

    private deleteItem(id: string){
        this.repository.deleteQuestionAnswer(id);
        this.router.navigateByUrl("");
    }
    
}