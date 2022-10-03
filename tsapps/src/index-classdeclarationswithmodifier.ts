// class User {
//     userId: string = "00A12"
//     userName: string = "userName"
//     status: boolean = false
//     constructor(userId: string, userName: string, status: boolean) {
//         this.userId = userId
//         this.userName = userName
//         this.status = status
//     }
// }
//private,public,protected-  encapsulation
// class User {
//     //by default all instance variables are public
//     userId: string = "00A12"
//     public userName: string = "userName"
//     //private status: boolean = false
//     status: boolean = false
//     constructor(userId: string, userName: string, status: boolean) {
//         this.userId = userId
//         this.userName = userName
//         this.status = status
//     }
// }
//using private,public keywords we can reduce code.
// class User {
//     //by default all instance variables are public
//     userId: string = "00A12"
//     public userName: string = "userName"
//     //private status: boolean = false
//     status: boolean = false
//     //constructor arg variables are local variables
//     constructor(userId: string, userName: string, status: boolean) {
//         this.userId = userId
//         this.userName = userName
//         this.status = status
//     }
// }

// class User {
//     // //by default all instance variables are public
//     // userId: string = "00A12"
//     // public userName: string = "userName"
//     // //private status: boolean = false
//     // status: boolean = false
//     //constructor arg variables are local variables which can be converted into  instance variables ,so that we can avoid declarations in side class.
//     //by adding either private or public keyword
//     // constructor(public userId: string, public userName: string, public status: boolean) {
//     //     this.userId = userId
//     //     this.userName = userName
//     //     this.status = status
//     // }
//     constructor(public userId: string, public userName: string, public status: boolean) {  }
// }

//optional args
// class User {
//     constructor(public userId?: string, public userName?: string, public status?: boolean) { }
// }
// let user = new User("1", "Subramanian", true)
// console.log(user.userName.toUpperCase())

// user = new User()
// if (user.userName !== undefined) {
//     console.log(user.userName.toUpperCase())
// }
// console.log(user.status)

//es 6 default args
class User {
    constructor(public userId: string = "A00", public userName: string = "default", public status: true | false = false, public gender?: "Male" | "Female" | "Third") { }
}
let user = new User("1", "Subramanian", true)
console.log(user.userName.toUpperCase())

user = new User()
console.log(user.userName.toUpperCase())
console.log(user.status)

user = new User("222", "John", true, "Male")
console.log(user.userName.toUpperCase())
console.log(user.status)