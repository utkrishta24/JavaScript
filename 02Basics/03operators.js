//  = - / *
// var num1 = 7;
// var num2 = 6;

// console.log(num1 * num2);

// var answer = num1 >num2;

// console.log(answer);

// D = (L - S) / L * 100
// (a + b) * (c / d) * e

var sellingPrice = 199;
var listingPrice = 799;
var discountPercent = (listingPrice - sellingPrice) / listingPrice * 100;

// console.log("Discount percent is:" + discountPercent);

displayDiscountPercentage=Math.round(discountPercent);
console.log("Discount percent is: " + displayDiscountPercentage + "% OFF");

var result= listingPrice>sellingPrice;
console.log(typeof result);