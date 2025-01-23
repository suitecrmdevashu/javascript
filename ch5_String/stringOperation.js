/*start */

/**
 * The toString() method returns a string as a string.
 * The toString() method does not change the original string.
 * The toString() method can be used to convert a string object into a string.
 */


$message = "Hi my name is ashu";
let temp = [1, 2, 3, 4, 5];
let convertData = temp.toString();
console.log(typeof convertData);
console.log(convertData);
/*end */


/*start */
/*
 * The concat() method joins two or more strings.
 * The concat() method does not change the existing strings.
 * The concat() method returns a new string.
 */


let text1 = "sea";
let text2 = "food";
let text3 = "is danger";
let result = text1.concat(" ", text2, " ", text3);
console.log(result);


let t1 = "Hello";
let t2 = "world!";
let t3 = "Have a nice day!";
let finalresult = t1 + " " + t2 + " " + t3;
console.log(finalresult);
/*end */



/*start */
/*
 * The split() method splits a string into an array of substrings.
 * The split() method returns the new array.
 * The split() method does not change the original string.
 * If (" ") is used as separator, the string is split between words.
 */
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
const myArray1 = text.split(" ", 3);
console.log(myArray1);

/*end */

