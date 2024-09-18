// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import { webTechs } from "./web_techs.js";
import { countries } from "./countries.js";

// console.log(countries);
// console.log(webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

function removePunctuation(str) {
  return str
    .split("")
    .filter((char) => /[a-zA-Z0-9 ]/.test(char))
    .join("");
}

const words = removePunctuation(text).split(" ");
// console.log(words);
// console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.find((item) => item == "Meat") === undefined) {
  shoppingCart.unshift("Meat");
}

console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.find((item) => item == "Sugar") === undefined) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
let isAllergic = true;
if (isAllergic) {
  console.log(shoppingCart.filter((item) => item != "Honey"));
}

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
