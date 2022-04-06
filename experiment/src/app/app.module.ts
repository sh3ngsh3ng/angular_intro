import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertybindingtestComponent } from './components/propertybindingtest/propertybindingtest.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingtestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
