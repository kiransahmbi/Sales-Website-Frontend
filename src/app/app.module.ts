import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

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
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from "./components/auth/auth.guard";
import { PartialsModule } from './components/partials/partials.module';
import { HeaderComponent } from './components/partials/header.component';
import { FooterComponent } from './components/partials/footer.component';
import { NavbarComponent } from './components/partials/navbar.component';


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
    RouterModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "aboutus", component: AboutusComponent },
      { path: "advertisement/details", component: detailsComponent },
      { path: "advertisement/advertisement", component: advertisementComponent },
      { path: "partials/partials", component: HeaderComponent },
      { path: "partials/partials", component: FooterComponent },
      { path: "partials/partials", component: NavbarComponent  },
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
