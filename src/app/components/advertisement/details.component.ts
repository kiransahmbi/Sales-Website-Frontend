import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class detailsComponent {
    title = 'Details';
    constructor(private repository: AdvertisementRepository,
        private router: Router) 
    { }

    get AdvertisementList(): Advertisement[] {
        return this.repository.getAdvertisement();        
    }


    
}