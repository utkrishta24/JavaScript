var User = function(firstName,courseCount){     //use uppercase for prototypes
  this.firstName= firstName;
  this.courseCount=courseCount;
  this.getCourseCount= function(){
      console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function(){
  console.log(`Your first name is: ${this.firstName}`);
}



var Harsh = new User("Harsh",2);
Harsh.getFirstName();
Harsh.getCourseCount();
// console.log(Harsh);

var Utkrishta= new User("Utkrishta",3);
// console.log(Utkrishta);
Utkrishta.getFirstName();
Utkrishta.getCourseCount();

// var lco={name:"harsh"}
// console.log( lco.hasOwnProperty("name"));
// console.log( lco.hasOwnProperty("firstName"));

if(Harsh.hasOwnProperty("firstName")){
  Harsh.getFirstName();
}

