import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class add_editComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: Advertisement = new Advertisement();

    constructor(private repository: AdvertisementRepository,
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
<<<<<<< Updated upstream

        // Add
               
=======
>>>>>>> Stashed changes
    }

    save(form: NgForm) {
        this.repository.saveAdvertisement(this.item);
        this.router.navigateByUrl("Advertisement/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteAdvertisement(id);
        this.router.navigateByUrl("Advertisement/list");
    }
    
}