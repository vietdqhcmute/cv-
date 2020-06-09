import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';
@Component({
  selector: 'app-left-application',
  templateUrl: './left-application.component.html',
  styleUrls: ['./left-application.component.scss']
})
export class LeftApplicationComponent implements OnInit {
  //private user : User;
  @Input() userForLeft: User;
  //@Input() firstNameForLeft: string;
  @Output('emitChangeValue') change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("From left", this.userForLeft.contact);
  }

  emitChangeValue(event){
    let userInput = event.target.value;
    this.change.emit(userInput) ;
  }

}
