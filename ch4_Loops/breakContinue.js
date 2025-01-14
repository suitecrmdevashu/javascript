/*
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.
*/

/*Break Statement */
let text = "";
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    break;
  }
  text += "The number is " + i + "\n";
}
console.log(text);

/*Continue Statement */
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
  }
  text += "The number is " + i + "\n";
}
console.log(text);
