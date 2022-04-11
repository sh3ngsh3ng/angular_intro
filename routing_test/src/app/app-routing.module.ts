import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';
import { FoodListComponent } from './components/food-list/food-list.component';

const routes: Routes = [
  {path: 'electronic-list', component: ElectronicListComponent},
  {path: 'food-list', component: FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ElectronicListComponent,
  FoodListComponent
]
