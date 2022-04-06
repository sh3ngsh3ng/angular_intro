import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybindingtest',
  template: `
    <h1 [ngClass]="textStyle">Demo 1</h1>
    <h1 [class.red]="classRed">Demo 2</h1>
    <h1 [style.color]="check ? 'green' : 'red'">Demo 3</h1>
    <h1 [ngStyle]="allStyles">Demo 4</h1>
    <button [value]="" (click)="buttonClicked($event)">Click this button</button>
    <input type="text" [(ngModel)]="name">{{name}}
  `,
  styles: [`
    .green {
      color: green;
    }
    .red {
      color: red
    }
    .txt {
      font-style: italic;
    }

  `]
})
export class PropertybindingtestComponent implements OnInit {

  public classGreen = "green";
  public classRed = true;
  public textStyle = {
    "green": true,
    "red": false,
    "txt": true
  }

  public check = false;

  public allStyles = {
    color: "yellow",
    backgroundColor: "black"
  }

  public name = ""

  buttonClicked(event:MouseEvent) {
    console.log("Button Clicked");
    console.log(event);
    // event.target.valu = "Button Clicked";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
