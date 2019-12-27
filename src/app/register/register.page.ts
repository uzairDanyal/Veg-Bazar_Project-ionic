import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }
  a: boolean;
  ngOnInit() {

  }

  storeReg(){
    this.a = true;
  }

  userReg(){
    this.a = false;
  }

}
