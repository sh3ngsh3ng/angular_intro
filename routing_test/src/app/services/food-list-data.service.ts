import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListDataService {

  constructor() { }


  getFoodListItems() {
    return [
      {"name": "Apple", "cost": 10},
      {"name": "Banana", "cost": 20},
      {"name": "Coconut", "cost": 30}
    ]
  }

}
