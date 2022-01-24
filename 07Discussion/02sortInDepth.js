// input: [6,-2,2,0,-7].sort()
// ouput: (5) [-2, -7, 0, 2, 6]

// converted to strings according to UTF-16..and gets sorted accroding to it not maths

// function mySort(a,b){
//     if(a>b){
//         return 1
//     }
//     else if(b>a){
//         return -1
//     }
//     else{
//         return 0
//     }
// }
// [6,-2,2,0,-7].sort(mySort)
// (5) [-7, -2, 0, 2, 6]

function batmanGameOrder(a,b){
    var batman = ["Arkham Origins",
    "Arkham Origins Blackgate",
    "Assault on Arkham",
    "Arkham Asylum",
    "Arkham City",
    "Arkham Knights"
    ];

    return batman.indexOf(a) - batman.indexOf(b);
}

var games = [
    "Arkham Knights",
    "Arkham Asylum",
     "Arkham Origins",
     "Arkham Origins Blackgate"
    ]

games.sort(batmanGameOrder);
console.log(games);