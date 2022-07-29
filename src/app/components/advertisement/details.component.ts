import { Component } from '@angular/core';

import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class detailsComponent {
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: Advertisement = new Advertisement();
    constructor(private repository: AdvertisementRepository,
        private router: Router,
        activeRoute: ActivatedRoute) 
{ 


    this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
}
    
}