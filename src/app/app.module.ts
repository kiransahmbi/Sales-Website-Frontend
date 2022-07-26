import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { add_editComponent } from './components/advertisement/add_edit.component';
import { advertisementComponent } from './components/advertisement/advertisement.component';
import { IndexComponent } from './components/index.component';

import { IndexModule } from './components/index.module';
import { AdvertisementModule } from "./components/advertisement/advertisement.module";
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from "./components/auth/auth.guard";
import { PartialsModule } from './components/partials/partials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AdvertisementModule,
    AuthModule,
    PartialsModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "advertisement/advertisement", component: advertisementComponent },
      { path: "advertisement/:mode", component: add_editComponent, canActivate: [AuthGuard]},
      { path: "advertisement/:mode/:id", component: add_editComponent, canActivate: [AuthGuard] },
      { path: "auth/signin", component: SignInComponent },
      { path: "auth/signup", component: SignUpComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
