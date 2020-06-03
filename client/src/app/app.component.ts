import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  firstName:String = "Phuong Dao";
  
  ngOnInit(): void {
  }

  onLeftChange(firtNameOutFromLeft: String){
    this.firstName = firtNameOutFromLeft;
    console.log(firtNameOutFromLeft);
  }
}
