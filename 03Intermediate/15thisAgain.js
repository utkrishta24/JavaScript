// for all regular function calls, this points to window object
console.log(this);

var user={
    firstName:"Isha",
    courseCount:4,
    getCourseCount: function(){
        console.log("Line 8",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 11",this);    
        }
        sayHello();
    },
};

user.getCourseCount();