import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FoodListComponent } from './components/food-list/food-list.component';

const routes: Routes = [
  // router works from top to bottom
  {path: "", component: ElectronicListComponent},
  {path: 'food-list', component: FoodListComponent},
  {path: 'electronic-list', component: ElectronicListComponent},
  {path: "**", component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ElectronicListComponent,
  FoodListComponent,
  ErrorPageComponent
]
