var isEven = (element) => {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
};

// console.log(isEven(4));

// var result = [2,6,3,8].every(isEven);
// console.log(result);

var result = [2,6,4,8].every((e)=> (e%2===0)); //callback
console.log(result);
