import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  imageUrl:string="https://apolitical.co/wp-content/themes/apolitical/public/img/front-page/ida-auken-quote.jpg";
  state:boolean = false;
  count:number = 0;
  message:string = 'hello';
  nom:string;
  email:string;
  phone:string;
  about:string;
  date : Date = new Date()
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() { 
    console.log('constructor execution')
  }

  ngOnInit() {
    console.log('OnInit execution')

  }
  clickEvent(){
    this.state = true;
    alert(this.state)
  }
  increment(){
    this.count ++;
  }
  decrement(){
    this.count --;
  }
  display(){
    alert(this.message)
  }

  save(){
    let data = {
      "nom":this.nom,
      "email":this.email,
      "phone":this.phone,
      "about":this.about
    }
    console.log(data)
  }
}
