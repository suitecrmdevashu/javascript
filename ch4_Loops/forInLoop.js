/*
The JavaScript for in statement loops through the properties of an Object:

for (key in object) {
  // code block to be executed
}
*/
let studentData = {
  name  : "Suraj",
  class : "X",
  marks : 97.8+"%",
  sub : "PCM"
};

let text = "";

for( let key in studentData){
  text +=  key + " = " + studentData[key] + "\n";
}

console.log(text);