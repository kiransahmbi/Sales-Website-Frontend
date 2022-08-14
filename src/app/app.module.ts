
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { add_editComponent } from './components/advertisement/add_edit.component';
import { advertisementComponent } from './components/advertisement/advertisement.component';
import { detailsComponent } from './components/advertisement/details.component';
import { IndexComponent } from './components/index.component';
import { AboutusComponent } from './components/advertisement/aboutus.component';
import { IndexModule } from './components/index.module';
import { AdvertisementModule } from "./components/advertisement/advertisement.module";
import { QuestionAnswerModule } from "./components/question/questionAnswer.module";
import { MyAccountModule } from "./components/myAccount/MyAccount.module";
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from "./components/auth/auth.guard";
import { PartialsModule } from './components/partials/partials.module';
import { add_updateComponent } from './components/question/add_update.component';
import { MyListingsComponent } from './components/myAccount/myListings.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    IndexModule,
    FormsModule,
    AdvertisementModule,
    QuestionAnswerModule,
    MyAccountModule,
    AuthModule,
    PartialsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "aboutus", component: AboutusComponent },

      { path: "advertisement/list", component: advertisementComponent },
      { path: "advertisement/details/:id", component: detailsComponent },
      { path: "advertisement/add", component: add_editComponent, canActivate: [AuthGuard] },
      { path: "advertisement/:mode/:id", component: add_editComponent, canActivate: [AuthGuard] },

      { path: "question/add/:advertisement", component: add_updateComponent },
      { path: "question/:mode/:id/:advertisement", component: add_updateComponent, canActivate: [AuthGuard] },

      { path: "auth/signin", component: SignInComponent },
      { path: "auth/signup", component: SignUpComponent },

      { path: "myaccount/listings", component: MyListingsComponent, canActivate: [AuthGuard] },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }