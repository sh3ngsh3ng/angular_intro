import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  constructor() { }
  // Angular supports
  // - if else, switch case, for


  // if else
  // *ngIf
  flag = true
  displayText() {
    this.flag = !this.flag;
  }

  flag2 = true
  displayText2() {
    this.flag2 = !this.flag2;
  }


  // switch case
  // *ngSwitch
  public day = "tues";

  // for loop
  // *ngFor
  public participants = ["Man 1", "Woman 2", "Child 3", "God 4"]

 

  



  ngOnInit(): void {
  }

}
