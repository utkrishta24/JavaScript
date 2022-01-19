// ...args spread operator and rest operator both

// var returnedValue= Math.max(2,4,6,10,1,8,3,6,3,8);
// console.log(returnedValue);

// var myObj={

// }
// Object.assign(myObj,{a:1,b:2,c:3},{z:5,y:6,x:7});
// console.log(myObj);

function sumOne(a,b){
    return a+b;
}
var myA=[5,4];
// console.log(sumOne(...myA)); //spread operator: takes a grp and spread into values

function sumTwo(a,b,...args){   //rest operator : 
    let sum=0;
    let multi=a*b;
    console.log(args);
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(3,4,6,7,7,3));