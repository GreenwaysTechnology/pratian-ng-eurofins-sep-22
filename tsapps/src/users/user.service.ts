//es 6 module: how to share code from one file to another file
//export,export default,import

export class UserService {
    constructor() { }
    //methods
    public getUsers(): Array<string> {
        return ['Subramanian', 'KK', 'Subu', 'Ram', 'John','Arun','Geetha']
    }
    public save(user:string){
        console.log(user)
    }
}
