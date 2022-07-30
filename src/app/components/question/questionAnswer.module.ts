import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { questionAnswerComponent } from "./questionAnswer.component";
import { add_updateComponent } from "./add_update.component";
import { detailsComponent } from "./details.component";
import { AboutusComponent } from './aboutus.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [questionAnswerComponent, add_editComponent, detailsComponent, AboutusComponent ],
    exports : [aquestionAnswerComponent, add_editComponent,detailsComponent, AboutusComponent]
})

export class AdvertisementModule {}