// 6. Cut (slice) out the first word of the string using substr() or substring() method
let string = "JavaScript and Typescript";

console.log(string.substr(5, 9));
console.log(string.substring(11, 14));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let string01 = "30 Days Of JavaScript";
console.log(string01.substr(3, 19));
console.log(string01.substring(3, 21));

// 8. Check if the string contains a word Script using includes() method
let string02 = "JavaScript";
let string03 = "Javascript";
let string04 = "Program";

console.log(string02.includes("Script"));
console.log(string03.includes("Script"));
console.log(string04.includes("Script"));

// 9. Split the string into an array using split() method
console.log(string.split());

// 10. Split the string 30 Days Of JavaScript at the space using split() method
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(""));