import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserdetailsComponent } from './userdetails.component';
import { SkillsComponent } from './skills.component';


@NgModule({
  declarations: [
    UserComponent,
    UserdetailsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    UserdetailsComponent,
    SkillsComponent
  ]
})
export class UserModule { }
