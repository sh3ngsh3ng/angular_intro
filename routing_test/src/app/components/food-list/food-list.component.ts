import { Component, OnInit } from '@angular/core';
import { FoodListDataService } from 'src/app/services/food-list-data.service';

@Component({
  selector: 'app-food-list',
  template: `
  <table *ngFor="let f of foodItems">
    <tr>{{f.name}}</tr>
  </table>

  `,
  styles: [
  ]
})
export class FoodListComponent implements OnInit {

  constructor(private _foodItemsService: FoodListDataService) { }

  public foodItems = [{"name": "", cost: 0}];
  // public foodItems: any; // alternative

  ngOnInit(): void {
    
    this.foodItems = this._foodItemsService.getFoodListItems();
    console.log(this.foodItems)
  }

}
