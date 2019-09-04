import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employee1 = {
    name : "tharindu",
    age : 24,
    city : "kurunegala"
  }
  
  employee2 = {
    name : "lahiru",
    age : 22,
    city : "kandy"
  }
  
  employee3 = {
    name : "ravindu",
    age : 25,
    city : "kegalla"
  }
  
  arr1 : any[] = [this.employee1,this.employee2,this.employee3]
  
  
  constructor() { }

  ngOnInit() {
  }

}



