//user is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - Validi
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged In Success");
//     if(isEmailVerified){
//         console.log("Email Verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("You can make a purchase");
}
else{
    console.log("You are not allowed to make a purchase");
}

