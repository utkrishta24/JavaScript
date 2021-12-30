const user = ["isha", "utkrishta", "aloo", "harshu", 1409];
// for (let i = 0; i < user.length; i++) {
//     if (typeof(user[i]) === "string") {
//         console.log(user[i]);
//     }
// }

let i=0;
// while(i<user.length){
//     if(typeof user[i]==="string"){
//         console.log(user[i]);
//     }
//     i++;
// }

do{
    if(typeof user[i]!="string"){
        console.log(user[i]);
        
    }
    i++;
}while(i<user.length);