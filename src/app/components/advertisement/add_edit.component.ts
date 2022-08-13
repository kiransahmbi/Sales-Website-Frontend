
import { Component, Sanitizer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class add_editComponent {

    categories = [
        {
          id: 1,
          name: 'Automotive'
        },
        {
          id: 2,
          name: 'Books'
        },
        {
          id: 3,
          name: 'Clothing, Shoes & Jewelry'
        },
        {
          id: 4,
          name: 'Electronics'
        },
        {
          id: 5,
          name: 'Furniture'
        },
        {
          id: 6,
          name: 'Musical Instruments'
        },
        
      ];

      conditions = [
        {
          id: 1,
          name: 'Like New'
        },
        {
          id: 2,
          name: 'Minor Damage'
        },
        {
          id: 3,
          name: 'Noticeable Damage'
        },
        {
          id: 4,
          name: 'Major Damage'
        },
        {
          id: 5,
          name: 'Needs Repair'
        }
      ];
    
    title:string = 'Add a New Item';
    editing: boolean = false;
    item: Advertisement = new Advertisement();

    constructor(private repository: AdvertisementRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.title = "Update Item";
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        }

        if (activeRoute.snapshot.params["mode"] == "delete") {
          this.deleteItem(activeRoute.snapshot.params["id"]);
        }
    }

    save(form: NgForm) {
        this.repository.saveAdvertisement(this.item);
        this.router.navigateByUrl("/advertisement/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteAdvertisement(id);
        this.router.navigateByUrl("/advertisement/list");
    }
    
}