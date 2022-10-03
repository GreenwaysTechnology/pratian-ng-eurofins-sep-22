import { UserService } from './user.service'

//controller - component
export class UserComponent {
    constructor(private userService: UserService) { }
    public onInit() {
        console.log(this.userService.getUsers())
    }
    public insert(user) {
        this.userService.save(user)
    }
}
