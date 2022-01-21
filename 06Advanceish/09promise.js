const uno = () => {
    return "One";
};

//const dos = async () => {

// const dos = () => {
//     setTimeout(() => {
//         return "WOOOOHOOOO"
//     }, 3000);
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        // resolve("Got That");
        setTimeout(() => {
                    resolve("WOOOOHOOOO");
                    // reject("WOOOOHOOOO");
                }, 3000);
    });
};

const tres = () => {
    return "Three";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
    let valTwo = await dos();
    console.log(valTwo);
    let valThree = tres();
    console.log(valThree);
};
callMe();

