import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    //navigate
  }
  gotoUser(){
     this.router.navigate(['users'])
  }
  gotoProduct(){
    this.router.navigate(['products'])

  }

}
