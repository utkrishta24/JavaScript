//https://api.chucknorris.io/

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        // console.log("API",response.json());
        return response.json();
    })
    .then((data) => {
        // console.log("Data is: ",data);
        var joke = data.value;
        console.log("Joke: ", joke);
    })
    // .then()
    .catch();

// try {
// }catch(error){
// }