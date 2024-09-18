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

// console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.find((item) => item == "Sugar") === undefined) {
  shoppingCart.push("Sugar");
}
// console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
let isAllergic = true;
if (isAllergic) {
  // console.log(shoppingCart.filter((item) => item != "Honey"));
}

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
// console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.find((item) => item == "Ethiopia")) {
  console.log("ETHIOPIA");
}

// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedArray = ages.sort();
console.log(sortedArray);

const minArray = Math.min(...sortedArray);
const maxArray = Math.max(...sortedArray);
console.log(minArray, maxArray);

const median = [];
if (sortedArray.length % 2 === 1) {
  median.push(sortedArray[Math.floor(sortedArray.length / 2)]);
} else {
  let indexMedian =
    (sortedArray[sortedArray.length / 2] +
      sortedArray[sortedArray.length / 2 + 1]) /
    2;
  median.push(indexMedian);
}

console.log(median);

const sumAges = sortedArray.reduce((a, b) => a + b);
const averageAges = sumAges / sortedArray.length;
console.log(averageAges);

const range = maxArray - minArray;
console.log(range);

const minAvg = Math.abs(minArray - averageAges);
const maxAvg = Math.abs(maxArray - averageAges);

console.log(minAvg, maxAvg);
