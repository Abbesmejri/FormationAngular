import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  myform:FormGroup;

  constructor() { }

  ngOnInit() {

    this.myform = new FormGroup(

      {
      name:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.email])
      }
    )
  }
   
  getstarted(){
    console.log(this.myform.value) ;
  
    /* stringify STRING TO JSON*/

  localStorage.setItem('user',JSON.stringify(this.myform.value))
  


  }


}
