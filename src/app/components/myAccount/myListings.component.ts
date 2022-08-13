
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Advertisement } from "../../models/advertisement.model";
import { AdvertisementRepository } from "../../models/advertisement.repository";
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: 'myListings.component.html'
})

export class MyListingsComponent {
    title = 'My Listings';
    constructor(private repository: AdvertisementRepository,
        private router: Router, activeRoute: ActivatedRoute, public auth: AuthService) 
    { }

    get AdvertisementList(): Advertisement[] {
        console.log(this.auth.username)
        return this.repository.getUserAdvertisement(this.auth.username);        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("/advertisement/delete/"+id);
        }
    }
    
    checkExpired(lifetime: Date) {
        return new Date(lifetime).getTime() < new Date().getTime();
    }
    
}