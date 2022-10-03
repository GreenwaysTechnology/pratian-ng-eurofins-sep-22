//dependency injection - has-a relationship
class UserService {
    constructor() { }
    //methods
    public getUsers(): Array<string> {
        return ['Subramanian', 'KK', 'Subu', 'Ram', 'John']
    }
    public save(user:string){
        console.log(user)
    }
}
//controller - component
class UserComponent {
    constructor(private userService: UserService) { }
    public onInit() {
        console.log(this.userService.getUsers())
    }
    public insert(user){
        this.userService.save(user)
    }
}
//
// let userService = new UserService();
// let userComponent = new UserComponent(userService)
let userComponent = new UserComponent(new UserService())

userComponent.onInit()
userComponent.insert('Karthik')
