export const countries = [
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

// Slice the first ten countries from the countries array
const slice10First = countries.slice(0, 10);
console.log(slice10First);

// Find the middle country(ies) in the countries array
let middle = "";
if (countries.length % 2 == 1) {
  middle = countries[Math.floor(countries.length / 2)];
}

console.log(middle);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf = [];
let secondHalf = [];

if (countries.length % 2 == 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2, countries.length);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(
    Math.ceil(countries.length / 2),
    countries.length
  );
}
console.log(firstHalf, secondHalf);
