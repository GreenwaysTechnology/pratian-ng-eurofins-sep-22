// //decorator function
// function Course(courseName: string) {
//     return function (target: any) {
//         Object.defineProperty(target.prototype, "course", { value: courseName })
//     }

// }

// //decorator usage 
// @Course('React')
// class Student {
//     constructor(public name: string = "") { }
// }
// let student = new Student("Subramanian") as any;
// console.log(student.name, student.course)

//decorator function
function Course(courseInfo: any) {
    return function (target: any) {
        Object.defineProperty(target.prototype, "course", { value: courseInfo })
    }

}

//decorator usage 
@Course({ name: 'React', author: 'Subramanian', duration: '16 hrs' })
class Student {
    constructor(public name: string = "") { }
}
let student = new Student("Subramanian") as any;
console.log(student.name, student.course.name, student.course.author, student.course.duration)
