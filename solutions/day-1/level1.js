const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
const emptArray = [];

// Declare an array with more than 5 number of elements
const element = ["water", "air", "earth", "fire", "lightning"];

// Find the length of your array
console.log(element.length);

// Get the first item, the middle item and the last item of the array
let firstItem = element[0];
console.log(firstItem);

function middleItem(array) {
  let result = [];
  let n = array.length;
  if (n % 2 === 0) {
    result.push(array[n / 2 - 1]);
    result.push(array[n / 2]);
  } else {
    result.push(array[Math.floor(n / 2)]);
  }

  return result[0];
}

console.log(middleItem(element));

let lastItem = element[element.length - 1];
console.log(lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  42,
  "Hello, world!",
  true,
  { name: "Alice" },
  [1, 2, 3],
  null,
  undefined,
  function () {
    return "Hi";
  },
  new Date(),
  Symbol("id"),
];
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(middleItem(itCompanies));
console.log(itCompanies[itCompanies.length - 1]);
// Print out each company
console.log(...itCompanies);

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((element) => {
  console.log(element.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
function sentence(array) {
  let result = [];
  let n = array.length;
  for (let i = 0; i < array.length - 2; i++) {
    result.push(array[i]);
  }

  let joinResult = [
    result.join(", "),
    " and ",
    array[n - 1],
    " are big IT companies",
  ];
  return joinResult.join("");
}

console.log(sentence(itCompanies));

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkExistingCompany(key) {
  let index = itCompanies.indexOf(key);
  index != -1
    ? console.log("Company Exist")
    : console.log("Company doesn't exist");
}
checkExistingCompany("Facebook");
checkExistingCompany("Tokopedia");

// Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j].toLocaleLowerCase() === "o") {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(itCompanies[i]);
  }
}

console.log(filteredCompanies);

// Sort the array using sort() method

// console.log(itCompanies.sort());
// // // Reverse the array using reverse() method
// console.log(itCompanies.reverse());
// // // Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3));
// // // Slice out the last 3 companies from the array
// console.log(itCompanies.splice(-3));
// // Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.splice(itCompanies.length / 2, 2));
} else {
  console.log(
    itCompanies.splice(itCompanies[Math.floor(itCompanies.length / 2)], 1)
  );
}
// Remove the first IT company from the array
// console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array

// Remove the last IT company from the array
// Remove all IT companies
