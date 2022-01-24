// truthy and falsy
const google = 'google';
const fb = null; //not false but falsy

if (google) {
    console.log('I execute - Block 1');
}
if (!!fb) { //not falsy now...using 1 ! only true or false now or exact boolean
            //!! is double shot ..best practice to remove truthy or falsy making it true or false
    console.log('I execute - Block 2');
}

