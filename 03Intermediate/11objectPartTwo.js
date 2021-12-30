var user = {
    firstName: "Isha",
    lastName: "Utkrishta",
    relation: "couple",
    age: 18,
    love: true,
    courseList:[],
    getCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} has owned about ${this.courseList.length} courses`;   
    },
}

var courseList=true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.getCourse("HEllo");
user.getCourse("Hi");

console.log(user.getCourseCount());
