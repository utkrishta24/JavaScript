/*
console.log('Hello World');
console.log(123);
console.log(true);
var greeting='hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1,b:2});
console.table({a:1,b:2,c:3});
console.error('Error');
console.clear();
console.warn('Warning');
console.time('hello')
console.log('World');
console.log('World');
console.log('World');
console.log('World');
console.log('World');
console.timeEnd('hello');

var name='John Doe';
console.log(name);
name='Steve Smith';
console.log(name);

var greeting;
console.log(greeting);
greeting='hello';
console.log(greeting);

let name='John Doe';
console.log(name);
name='Steve Smith';
console.log(name);

const name='John';
console.log(name);
name='Sara';

const Person={
name:'John',
age:'30'
}
console.log(Person);
Person.name='Sara';
console.log(Person);

const numbers=[1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

const name='John Doe';
console.log(typeof name);
const age=45;
console.log(typeof age);
const hasKids=true;
console.log(typeof hasKids);
const car=null;
console.log(typeof car);
let test;
console.log(typeof test);
const sym=Symbol();
console.log(typeof sym);

const hobbies=['movies','music'];
console.log(typeof hobbies);
const address={
    city:'Boston',
    state:'MA'
}
console.log(typeof address);
const today=new Date();
console.log(today);
console.log(typeof today);

let val;
val=5;
val=String(5);
val=String(4+4);
val=String(true);
val=String(new Date());
val=String([1,2,3,4]);
val=(5).toString();
val=Number('5');
val=Number(true);
val=Number('hello');
val=Number([1,2,3]);
val=parseInt('100.30');
val=parseFloat('100.2');

console.log(val);
console.log(typeof val);
console.log(val.length);     //do not work for number
console.log(val.toFixed(2)); //only for numbers

//const val1=5;
const val1=String(5);
const val2=6;
//const sum=val1+val2;
const sum=Number(val1+val2);
console.log(sum);
console.log(typeof sum);

const num1=100;
const num2=50;
let val;
val=num1+num2;
val=num1-num2;
val=num1*num2;
val=num1/num2;
val=num1%num2;
val=Math.PI;
val=Math.E;
val=Math.round(2.6);
val=Math.ceil(2.4);
val=Math.floor(2.8);
val=Math.abs(-2.4);
val=Math.sqrt(64);
val=Math.pow(8,2);
val=Math.min(-2,3,4,7,23);
val=Math.max(-2,3,4,7,23);
val=Math.random();
val=Math.random()*20;
val=Math.floor(Math.random()*20);
console.log(val);

const firstName='William';
const lastName='John';
const age=30;
let val;
val=firstName+lastName;
val=firstName+' '+lastName;
const str='Hello there! My name is Brad';
val='Brad ';
val+='Traversy';
val='Hello, my name is '+firstName+' and I am '+age;
//val='That's awesome, I can't wait';  //error
val="That's awesome, I can't wait";
val='That\'s awesome, I can\'t wait';
val=firstName.length;
val=firstName.concat(' ',lastName);
val=firstName.toUpperCase();
val=lastName.toLowerCase();
val=firstName[0];
val=firstName.indexOf('l');
val=firstName.lastIndexOf('l');
val=firstName.charAt('2');
val=firstName.charAt(firstName.length-1);
val=firstName.substring(0,4);
val=firstName.slice(-3);
val=firstName.slice(0,4);
val=str.split(' ');
val=str.replace('Brad','Jack');
val=str.includes('Hello');
val=str.includes('Food');
console.log(val);

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;
html = '<ul><li>Name: '+name+' </li><li>Age: '+age+' </li><li>Job: ' +job+' </li><li>City: '+city+' </li><ul>';
document.body.innerHTML=html;

html = '<ul>'+
        '<li>Name: '+name+' </li>'+
       '<li>Age: '+age+' </li>'+
       '<li>Job: ' +job+' </li>'+
       '<li>City: '+city+' </li>'+
       '<ul>';
document.body.innerHTML=html;

html = `
        <ul>
       <li>Name: ${name} </li>
       <li>Age: ${age} </li>
       <li>Job:  ${job} </li>
       <li>City: ${city} </li>
       <ul>
       `;
document.body.innerHTML=html;

const numbers=[43,56,23,33,45,12,65,4];
const numbers2=new Array (22,32,43,12,67);
const fruit=['Kiwi','Pear','Apple'];
const mixed=[22,'Hello', true, undefined, null, {a:1,b:2}, new Date()];
let val;
val=numbers.length;
val=Array.isArray(numbers);
val=numbers[3];
numbers[2]=100;
val=numbers.indexOf(33);
numbers.push(250);
numbers.unshift(120);
numbers.pop();
numbers.shift();
numbers.splice(1,2);
numbers.splice(1,1);
numbers.reverse();
val=numbers.concat(numbers2);
val=fruit.sort();
val=numbers.sort();
val=numbers.sort(function(x,y){
    return x-y;
});
val=numbers.sort(function(x,y){
    return y-x;
});
function under50(num){
    return num<50;
}
val=numbers.find(under50);
console.log(numbers);
console.log(val);

const Person={
    firstName:'Steve',
    lastName:'Smith',
    age:30,
    email:'steve@aol.com',
    hobbies:['music','sports'],
    address:{
        city:'Miami',
        state:'FL'},
        getBirthYear:function(){
            return 2021-this.age;
        }
    };
let val;
val=Person;
val=Person.firstName;
val=Person['lastName'];
val=Person.age;
val=Person.hobbies[1];
val=Person.address.state;
val=Person.address['city'];
val=Person.getBirthYear();
console.log(val);

const people=[
    {name:'John', age:30},
    {name:'Mike', age:24}
];
for(let i=0;i<people.length;i++)
{
    console.log(people[i].name);
    console.log(people[i].age);
}

let val;
const today=new Date();
val=today;
val=today.toString();
const birthday=new Date('6-24-2000 11:34:12');

// val=today.getMonth();
// val=today.getDate();
// val=today.getDay();
// val=today.getFullYear();
// val=today.getHours();
// val=today.getTime();
birthday.setMonth(8);
birthday.setDate(9);
birthday.setFullYear(2003);
val=birthday;
val=birthday.toString();
console.log(val);
console.log(typeof val);

const id=100;
if(id==100){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

const id2=100;
if(id2!=100){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

const id3='100';
if(id3===100){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

const id4='100';
if(id4!==100){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

//const id5=100;
if(typeof id5!== 'undefined'){
    console.log(`The ID is ${id5}`);
}
else{
    console.log(`No ID`);
}

*/
