/* traversing object */
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

for(let key in person){
  console.log(key);
}

console.log(Object.keys(person));
console.log(Object.values(person));

for(let val of Object.values(person)){
  console.log(val);
}