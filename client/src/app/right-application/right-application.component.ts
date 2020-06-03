import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-right-application',
  templateUrl: './right-application.component.html',
  styleUrls: ['./right-application.component.scss'],
})
export class RightApplicationComponent implements OnInit {
  @Input() firstNameForRight: string;
  constructor() {}

  ngOnInit(): void {
    console.log('From right', this.firstNameForRight);
  }
}
