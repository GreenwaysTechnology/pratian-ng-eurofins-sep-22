import { Injectable } from '@angular/core';
import { UserModule } from './user.module';
import { User } from './user.type';

/**
 * Injectors:
 *   are functions used to create objects
 * 
 * When we create service object, we can secifiy what injector you want to use
 * Types of Injectors
 * 1.Global injector or root injector
 * 2.Module Injector - Every submodule has its own injector
 * 3.Component injector - Every component has its own injector
 * 
 * how to create service object 
 *  - with part of injectable decorator providedIn
 *  - with part of module - provider
 */

@Injectable({
  // providedIn: UserModule
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //user object - models
  private users: User[] = [{
    id: 100,
    name: 'Subramanian',
    status: true,
    skills: ['Java', 'Javascript', 'Python', 'React', 'Node', 'Angular']
  },
  {
    id: 100,
    name: 'Subramanian',
    status: true,
    skills: ['Java', 'Javascript', 'Python', 'React', 'Node', 'Angular']
  }
  ]
  //biz apis :sync api
  // public getUsers(): User[] {
  //   return this.users
  // }
  //async api(timer) using callbacks:
  // public getUsers(callback: any) {
  //   //return this.users
  //   setTimeout(callback,5000,this.users)
  // }
  //Promise replaces callback based programming
  public getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 5000, this.users)
    });
  }
  public save(user: User) {
    console.log('save method is called',user)
    return 'User Saved'
  }

}
