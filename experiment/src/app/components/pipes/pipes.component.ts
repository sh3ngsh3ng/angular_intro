import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public pipeData = [
    {"id": "one", "name": "Man 1"},
    {"id": "two", "name": "Man 2"},
    {"id": "three", "name": "Man 3"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
