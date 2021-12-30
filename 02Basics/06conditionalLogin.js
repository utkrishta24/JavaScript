//allow user to access course if he is:
//logged in from email
//logged in from google
//logged in from facebook

var email = true;
var facebook = false;
var google = true;

if(email || google || facebook){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}