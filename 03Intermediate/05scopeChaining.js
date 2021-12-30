var name="Isha";

console.log("Line Number 3", name);

function sayName(){
    // var name="Mr. H.";
    console.log("Line number 6", name);
    sayNameTwo();
    function sayNameTwo(){
        // var name="Mrs. I. U. S.";
        console.log("Line number 10",name);
    }
}

sayName();

