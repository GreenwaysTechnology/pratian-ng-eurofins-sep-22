import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  //state 
  title: string = 'User Page'
  users!: User[]
  // //spinner state
  loading: boolean = true;
  status: string = "loading....."





  //only for di
  constructor(private userService: UserService) { }

  //to intalize the state during view render
  async ngOnInit() {
    //initalize the variable
    //this.users = this.userService.getUsers()
    //callback style api
    // this.userService.getUsers((users: User[]) => {
    //   this.users = users
    //   this.loading = !this.loading;
    // })
    // this.userService.getUsers()
    //   .then((users: User[]) => {
    //     this.users = users;
    //     this.loading = !this.loading;
    //   }).catch((err: any) => { 
    //     //you can catch any errors
    //   })
    try {
      this.users = await this.userService.getUsers()
      this.loading = !this.loading;
    }
    catch (err) {
      //you can catch any errors
    }
  }

  getData(user: User) {
     console.log(this.userService.save(user))
  }


}
