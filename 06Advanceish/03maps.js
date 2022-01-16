// var obj = new Object;
var myMap= new Map();
myMap.set(1,"Uno");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}


for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let [key,value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}


myMap.forEach((value,key)=> console.log(`${value} is ${key}`));

myMap.delete(2);
console.log(myMap);