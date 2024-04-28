import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
