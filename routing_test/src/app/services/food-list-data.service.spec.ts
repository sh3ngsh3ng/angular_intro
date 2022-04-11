import { TestBed } from '@angular/core/testing';

import { FoodListDataService } from './food-list-data.service';

describe('FoodListDataService', () => {
  let service: FoodListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
