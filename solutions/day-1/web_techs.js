export const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const newWebTech = [];
if (webTechs.find((item) => item == "Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  newWebTech.push(...webTechs, "Sass");
}
console.log(newWebTech);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);
