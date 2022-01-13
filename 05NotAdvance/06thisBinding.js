const harsh={
    firstName:"Harsh",
    lastName:"Sinha",
    role:"Admin",
    courseCount:3,
    getInfo:function(){
        console.log(
            `First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses.`);
    },
};


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "SubAdmin",
    courseCount: 4,
};



harsh.getInfo.call(dj);


// harsh.getInfo();
// dj.getInfo();
//borrowing method --->
// harsh.getInfo.bind(dj)();



