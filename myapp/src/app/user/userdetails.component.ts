import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.type';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: [
  ]
})
export class UserdetailsComponent implements OnInit {

  @Input()
  users!: User[]
  //spinner state
  @Input()
  loading!: boolean
  @Input()
  status!: string

  //user data to be sent via parent to service 
  user: User = {
    id: 1000,
    name: 'Karthik',
    status: true,
    skills: ['devops']
  }
  //Event Emitter:
  //Name of the Event
  @Output()
  onUserRequest = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    //send data to the parent
    this.onUserRequest.emit(this.user)
  }

}
