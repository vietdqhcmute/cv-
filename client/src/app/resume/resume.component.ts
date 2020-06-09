import { Injectable, Component, OnInit } from '@angular/core';
import {
  User,
  Contact,
  Experience,
  Education,
  Skill,
} from '../model/user.model';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
@Injectable()
export class ResumeComponent implements OnInit {
  public user: User = {
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      title: '',
    },
  };

  //firstName: String = 'Phuong Dao';
  constructor() {}

  ngOnInit(): void {
    this.user.contact = this.initDefaultData();
    console.log(this.user);
  }
  // onLeftChange(firtNameOutFromLeft: string){
  //   this.firstName = firtNameOutFromLeft;
  //   console.log(firtNameOutFromLeft);
  // }
  // onLeftChange(firstNameForLeft : String, lastNameForLeft : String, titleForLeft: String, addressForLeft: String, emailForLeft : String, phoneForLeft : String){
  //   this.user.contact.firstName = firstNameForLeft;
  //   this.user.contact.lastName = lastNameForLeft;
  //   this.user.contact.email = emailForLeft;
  //   this.user.contact.address = addressForLeft; 
  //   this.user.contact.phone = phoneForLeft 
  //   this.user.contact.title = titleForLeft;
  // }


  onLeftChange(event : String) {
    this.user.contact.firstName = event;
  }
  initDefaultData() {
    let contact: Contact = {
      firstName: 'Phuong',
      lastName: 'Dao',
      email: 'phuongdao@dxc.com',
      address: '123, Thong Nhat street, Go Vap district, HCM city',
      phone: '0987654321',
      title: 'Developer',
    };
    return contact;
  }
}
