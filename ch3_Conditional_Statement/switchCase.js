//SwitchCase
//The switch statement is used to perform different actions based on different conditions.

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Today is Sunday";
    break;
  case 1:
    day = "Today is Monday";
    break;
  case 2:
    day = "Today is Tuesday";
    break;
  case 3:
    day = "Today is Wednesday";
    break;
  case 4:
    day = "Today is Thursday";
    break;
  case 5:
    day = "Today is Friday";
    break;
  case  6:
    day = "Today is Saturday";
}

console.log(day);


let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);