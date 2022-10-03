import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user.type';
import { UsersService } from './users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styles: [
  ]
})
export class UserlistComponent implements OnInit {

  id!: number;
  users!: Observable<User[]>

  constructor(private userService: UsersService) { }

  ngOnInit(): void {

    this.users = this.userService.getUsers()

   
  }

}
