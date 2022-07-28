import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";

@Component({
  selector: 'app-advertisement',
  templateUrl: 'advertisement.component.html'
})

export class advertisementComponent {
    title = 'Advertisement List';
    constructor(private repository: AdvertisementRepository,
        private router: Router) 
    { }

    get AdvertisementList(): Advertisement[] {
        return this.repository.getAdvertisement();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("Advertisement/delete/"+id);
        }
    }
    
}