//The while loop loops through a block of code as long as a specified condition is true.

/*
while (condition) {
  // code block to be executed
}
*/
let text = "";
let i = 0;
while (i < 10) {
  text += "The number is " + i + "\n";
  i++;
}
console.log(text);