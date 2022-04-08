import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }

  getEmployeeInfo() {
    return [
      {"id": 1, "name": "Man 1"},
      {"id": 2, "name": "Man 2"},
      {"id": 3, "name": "Man 3"},
    ]
  }

}
