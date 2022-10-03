import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserdetailsComponent } from './userdetails.component';



@NgModule({
  declarations: [
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    UserlistComponent,
    UserdetailsComponent
  ]
})
export class UsersModule { }
