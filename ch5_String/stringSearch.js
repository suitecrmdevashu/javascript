/*
The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
 */

let text = "Please locate where locate occurs!";
let index = text.indexOf("locate");
console.log(index);

/*
The search() method searches a string for a string (or a regular expression) and returns the position of the match:
 */
let text1 = "Please locate where locate occurs!";
console.log(text1.search("where"));

/**
 * The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
 */

let text3 = "Please locate where 'locate' occurs!";
let search1 = text3.lastIndexOf("locate");
console.log(search1);

/**
 * The match() method returns an array containing the results of matching a string against a string (or a regular expression).
 */
let mess = "The rain in SPAIN stays mainly in the plain";
const myArr = mess.match("ain");
console.log(myArr[0]);

/**
 * The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

 */
let message = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = message.matchAll("Cats");
console.log(Array.from(iterator));