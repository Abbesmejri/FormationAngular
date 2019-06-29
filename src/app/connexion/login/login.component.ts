import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
