// import user from ".06classjs.js/"

const user = require("./06classjs");

const Harsh= new user("harsh","krishsinha@gam.cp");
console.log(Harsh.getInfo());
Harsh.enrollCourse("JS");
Harsh.enrollCourse("Py");

console.log(Harsh.getCourseList());

let courses =Harsh.getCourseList();
courses.forEach((c)=> console.log(c));


// const user = require("./06classjs");
// const hitesh= new user("hitesh","hitesh@lco.dev");
// console.log(hitesh.getInfo().email);
// hitesh.enrollCourse("React");
// hitesh.enrollCourse("Angular");
// console.log(hitesh.getCourseList());

