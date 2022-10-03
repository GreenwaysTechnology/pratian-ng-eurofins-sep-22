import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { USERS } from './user-mock';
import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(): Observable<User[]> {
    return of(USERS)
  }
  public getUserById(id: number | string): Observable<User> {
    return this.getUsers().pipe(
      map((users: User[]) => users.find(user => user.id === +id)!)
    )
  }
}
