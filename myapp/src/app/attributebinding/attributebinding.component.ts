import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent implements OnInit {

  //state variable
  imageUrl:string ="favicon.ico";
  isHidden:boolean = false
  isEnabled:boolean =false
  constructor() { }

  ngOnInit(): void {
  }

}
