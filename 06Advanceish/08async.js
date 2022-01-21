const uno=() => {
    console.log("One");
};

const dos=() => {
    setTimeout(()=> {
        console.log("WOOOOHOOOO");
    },3000);
    console.log("Two");
};

const tres=() => {
    console.log("Three");
};

uno();
dos();
tres();

