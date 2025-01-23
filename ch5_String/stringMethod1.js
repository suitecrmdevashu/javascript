/* The charAt() method returns the character at a specified index (position) in a string */
let message = "HELLO WORLD";
console.log(message.charAt(4));

/* A string is converted to upper case with toUpperCase(): */
message = "my name is ashu sharma";
console.log(message.toUpperCase());

/* A string is converted to lower case with toLowerCase(): */
message = "HELLO WORLD";
console.log(message.toLocaleLowerCase());

/* 
The includes() method returns true if a string contains a specified string.
Otherwise it returns false.
The includes() method is case sensitive. 
*/
console.log(message.includes('WORLD'));

/* 
The startsWith() method returns true if a string starts with a specified string.
Otherwise it returns false.
The startsWith() method is case sensitive.
*/
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"));

/* 
The endsWith() method returns true if a string ends with a specified string.
Otherwise it returns false.
The endsWith() method is case sensitive.
*/
let text1 = "Hello world, welcome to the universe.";
console.log(text1.endsWith("universe."));