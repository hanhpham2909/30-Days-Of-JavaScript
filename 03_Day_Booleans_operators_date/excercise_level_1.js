// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Juliet";
const lastName = "Romeo";
const country = "vn";
const age = 23;
const isMarried = true;
const year = 2024;

console.log(typeof firstName);
console.log(typeof age);

// Check if type of '10' is equal to 10

let string = "10";
let number = 10;
console.log(string == number);

// Check if parseInt('9.8') is equal to 10: Kiểm tra xem parseInt('9.8') is equal to 10 không
console.log(parseInt("9.8") === 10);

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value

let truth_var_1 = 79;
let truth_var_2 = "cafe";
let truth_var_3 = "9.8";

let fal_var_1 = 0;
let fal_var_2 = null;
let fal_var_3 = NaN;

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
// 4 >= 3 false
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 F
// 4 != '4' T
// 4 == '4' F
// 4 === '4' F
// Find the length of python and jargon and make a falsy comparison statement.

console.log(99 == NaN);
console.log(null == NaN);
console.log(NaN == NaN);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 T
// 4 > 3 && 10 > 12 F
// 4 > 3 || 10 < 12 T
// 4 > 3 || 10 > 12 T
// !(4 > 3) F
// !(4 < 3) T
// !(false) T
// !(4 > 3 && 10 < 12) F
// !(4 > 3 && 10 > 12) T
// !(4 === '4') T

// Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.



