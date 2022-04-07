import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PropertybindingtestComponent } from './components/propertybindingtest/propertybindingtest.component';
import { StructuraldirectivesComponent } from './components/structuraldirectives/structuraldirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingtestComponent,
    StructuraldirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
