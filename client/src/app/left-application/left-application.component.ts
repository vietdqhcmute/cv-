import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-application',
  templateUrl: './left-application.component.html',
  styleUrls: ['./left-application.component.scss']
})
export class LeftApplicationComponent implements OnInit {
  @Input() firstNameForLeft: string;
  @Output('emitChangeValue') change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("From left", this.firstNameForLeft);
  }

  emitChangeValue(event){
    let firstNameInput = event.target.value;
    this.change.emit(firstNameInput) ;
  }

}
