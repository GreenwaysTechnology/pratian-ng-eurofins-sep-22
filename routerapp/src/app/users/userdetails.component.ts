import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user.type';
import { UsersService } from './users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: [
  ]
})
export class UserdetailsComponent implements OnInit {

  id!: number
  user!: Observable<User>
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        console.log(params)
        this.id = params['id']
        this.user = this.userService.getUserById(this.id)
      }
    })
  }

}
