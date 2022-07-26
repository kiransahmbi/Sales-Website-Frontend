import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { advertisementComponent } from "./advertisement.component";
import { add_editComponent } from "./add_edit.component";
import { detailsComponent } from "./details.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [advertisementComponent, add_editComponent, detailsComponent ],
    exports : [advertisementComponent, add_editComponent,detailsComponent]
})

export class AdvertisementModule {}