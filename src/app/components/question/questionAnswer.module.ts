import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { add_updateComponent } from "./add_update.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [add_updateComponent],
    exports : [add_updateComponent]
})

export class QuestionAnswerModule {}