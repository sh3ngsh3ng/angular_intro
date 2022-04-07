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
    this.flag = !this.flag
  }

  // switch case
  // *ngSwitch


  // for loop
  // *ngFor

 

  



  ngOnInit(): void {
  }

}
