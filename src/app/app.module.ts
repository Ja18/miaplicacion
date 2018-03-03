import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApliDetalleComponent } from './apli-detalle.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ApliDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
