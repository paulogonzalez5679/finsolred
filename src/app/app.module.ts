import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FooterComponent } from './footer/footer.component';
import { ConocenosMasComponent } from './conocenos-mas/conocenos-mas.component';

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    ServiciosComponent,
    NosotrosComponent,
    ConveniosComponent,
    ContactanosComponent,
    FooterComponent,
    ConocenosMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
