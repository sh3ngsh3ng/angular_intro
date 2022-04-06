import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybindingtest',
  template: `
    <h1 [ngClass]="textStyle">Demo 1</h1>
    <h1 [class.red]="classRed">Demo 2</h1>
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


  constructor() { }

  ngOnInit(): void {
  }

}
