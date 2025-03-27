/**
 * The destructuring assignment syntax unpack object properties into variables:
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  socialAccount:{
    instagram:'xyz',
    facebook:'abc'
  },
};

// Destructuring
let {firstName, lastName,age} = person;
let {instagram} = person.socialAccount;
console.log(firstName + " " + lastName);
console.log(instagram);