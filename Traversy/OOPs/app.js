// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad);
// console.log(brad.age);
/*
//person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    //this refers to current instance of object
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }
}

// this.alert(1);
// console.log(this); 

// const brad = new Person('Brad',36);
// const john = new Person('John',30);
// console.log(john.age); 

const brad = new Person('Brad', '9-10-1980');
console.log(brad.calculateAge());
*/

/*
//Strings
const name1= 'Jeff';
const name2= new String('Jeff');
// name2.foo='bar';
console.log(name2);

console.log(typeof name2); 

if(name2==='Jeff'){
    console.log('YES'); 
}
else{
    console.log('NO'); 
}
*/

//Number 
// const num1=5;
// const num2= new Number(5);
// console.log(num2); 

//boolean
// const boo1= true;
// const boo2= new Boolean(true);
// console.log(boo2);

// //function
// const getSum1= function(x,y){
//     return x+y;
// }

// const getSum2= new Function('x','y','return 1+1');
// console.log(getSum1(1,1)); 
// console.log(getSum2('1','1')); 

//object
// const john1= {name: "John"};
// const john2= new Object({name:"John"});
// console.log(john1); 

//arrays
// const arr1=[1,2,3,4];
// const arr2=new Array(1,2,3,4);
// console.log(arr2);

//regular expression
// const re1=/\w+/;
// const re2= new RegExp('\\w+');
// console.log(re2); 
// console.log(re1); 

/*
//....................prototypes................

//Object.prototype
//Person.prototype

//person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.age = age;
    //this refers to current instance of object
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);

    // }
}

//calculate age
Person.prototype.calculateAge=function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

}

//get full name
Person.prototype.getFullName= function(){
    return `${this.firstName} ${this.lastName}`;
}


//gets married
Person.prototype.getsMarried=function(newLastName){
 this.lastName= newLastName;
}

const john = new Person('John', 'Doe', '8-10-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
*/


//Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
//Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

//customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);


    this.phone = phone;
    this.membership = membership;
}

//inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
//make customer.prototype return customer
Customer.prototype.constructor = Customer;
//create custormer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
//customer greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}
console.log(customer1.greeting());