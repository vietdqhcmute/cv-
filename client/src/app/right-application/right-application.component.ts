import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-right-application',
  templateUrl: './right-application.component.html',
  styleUrls: ['./right-application.component.scss'],
})
export class RightApplicationComponent implements OnInit {
 // @Input() firstNameForRight: string;
  @Input() userForRight: User;
  constructor() {}

  ngOnInit(): void {
    console.log('From right', this.userForRight.contact);
  }
}
