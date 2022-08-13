import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        HeaderComponent, NavbarComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent, 
        FooterComponent, NavbarComponent
    ]
})
  
  export class PartialsModule {}