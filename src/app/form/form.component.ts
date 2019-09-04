import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Obj ={
    name : "",
    age : 0,
    city : ""
  }
 
  buttonClick() {
    console.log(this.Obj.name),
    console.log(this.Obj.age),
    console.log(this.Obj.city)
   
  }

  changeInput(e){
    //console.log("uhiygiygiyg")
    //console.log(e.target.value)
  }

  onClick(){
    alert("You Clicked Me!");
  }
  
  

  constructor() { }

  ngOnInit() {
  }

 

}
