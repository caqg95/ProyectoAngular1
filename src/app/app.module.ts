import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutmeComponent } from './Layout/aboutme/aboutme.component';
import { ProyectosComponent } from './Layout/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
