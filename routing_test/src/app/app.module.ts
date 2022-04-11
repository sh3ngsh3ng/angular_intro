import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FoodListComponent } from './components/food-list/food-list.component';
// import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // FoodListComponent,
    // ElectronicListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

