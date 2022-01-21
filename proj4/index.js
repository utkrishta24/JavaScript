const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard = null;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip))


function flip() {
  // console.log("Card Flipped");
  // console.log(this);

  this.classList.add("flip");
  if(!isFlipped){
    isFlipped=true;
    firstCard=this;
  }
  else{
    secondCard=this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

function checkIt(){
console.log("Checking");
}

function success() {

}

function fail() {

}

function reset() {

}





//TODO: suffle