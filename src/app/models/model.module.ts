import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AdvertisementRepository } from "./advertisement.repository";
import { QuestionAnswerRepository } from "./questionAnswer.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        AdvertisementRepository,
        QuestionAnswerRepository,
        RestDataSource,
        AuthService     
    ]
})

export class ModelModule { }