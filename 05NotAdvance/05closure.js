// function init(){
//     var firstName = "harsh";
//     console.log("hehehehe");
//     function sayHello(){
//         console.log(`hello ${firstName}`);
//     }
//     return sayHello;
// }
// var value= init();

// value();

function doAddition(x) {
    return function (y) {
        console.log(`x is ${x}`);
        console.log(`y is ${y}`);
        return x + y;
    };
}


var sum= doAddition(4);   //x
console.log(sum(5));      //y


console.log(doAddition(5)(6));
//doAddition()()();      //curring

