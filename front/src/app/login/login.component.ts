import { Component, OnInit } from '@angular/core';
// import { FormBuilder} from '@angular/forms';
import { User } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  pswd: string;

  constructor(
    // private formB: FormBuilder
  ) { }

  ngOnInit() {

  }

}
