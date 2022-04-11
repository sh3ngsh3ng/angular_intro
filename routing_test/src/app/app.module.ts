import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListDataService } from './services/food-list-data.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
// import { FoodListComponent } from './components/food-list/food-list.component';
// import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // FoodListComponent,
    // ElectronicListComponent,
    routingComponents,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

