/*
The for of statement loops through the values of an iterable object.
for (variable of iterable) {
  // code block to be executed
}
*/
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x  + "\n";
}
console.log(text);