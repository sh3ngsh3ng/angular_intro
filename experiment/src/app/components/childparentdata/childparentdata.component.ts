import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childparentdata',
  templateUrl: './childparentdata.component.html',
  styleUrls: ['./childparentdata.component.css']
})
export class ChildparentdataComponent implements OnInit {

  @Input() dataFromParent = ''
  @Output() public childEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent() {
    this.childEvent.emit("This is data from childparent")
  }

}
