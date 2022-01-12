var user = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    },
};
var harsh = Object.create(user);
console.log(harsh);
harsh.name="Harsh";
harsh.getUserName();

var sam= Object.create(user,{
    name:{value:"Sammy"},
    courseCount:{value: 3},
});

sam.getUserName();