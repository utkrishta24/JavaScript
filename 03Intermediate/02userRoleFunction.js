/*
define a funtion that can answer the role of a user
a user can be on following roles
admin- with all access
subadmin- with access to create/delete courses
testprep- with access to create/delete tests
user- consume all the content
other- trial user

input: getUserRole(name,role)
*/

var getUserRole = function (name,role){
//var getUserRole = (name,role) =>{      //arrow function
//function getUserRole(name,role){
    switch(role){
    case "admin":
        return `${name} is admin with all the access`;
        break; //unused
    case "subadmin":
        return `${name} is a sub-admin with access to create/delete courses`;
        break;
    case "testprep":
        return `${name} is a test-prep with access to create/delete tests`;
        break;
    case "user":
        return `${name} is a user to consume content`;
        break;
    default:
        return `${name} is a trial user`;
        break;
    }
}

console.log(getUserRole("Utkrishta","testprep"));
var getRole= getUserRole("Isha","admin");
console.log(getRole);