import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchilddata',
  templateUrl: './parentchilddata.component.html',
  styleUrls: ['./parentchilddata.component.css']
})
export class ParentchilddataComponent implements OnInit {

  constructor() { }

  msg="Hello from parent"
  message=""
  ngOnInit(): void {
  }

}
