import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public employees = [{"id": 0, "name": ""}];

  constructor(private _employee: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employee.getEmployeeInfo()
  }

}
