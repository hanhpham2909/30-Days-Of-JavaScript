// Exercise: Level 2
// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let string =
  "The quote 'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.' by Mother Teresa";
console.log(string);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

if (typeof "10" === 10) {
  console.log("They are exactly equal to 10");
} else {
  let convertValue = Number("10");
  console.log(convertValue === 10);
}

let string1 = Number("cafe");
console.log(typeof string1);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
if (9.8 == 10) {
  console.log("They are exactly equal ");
} else {
  let num1 = Math.ceil(9.8);
  console.log(num1);
  console.log(`'Make it exactly equal with 10 ', ${num1} == 10`);
}

// Check if 'on' is found in both python and jargon
let a = "python";
let b = "jargon";
if (a.includes("on") && b.includes("on")) {
  console.log("They have contained 'on'");
} else {
  console.log("They have not contain 'on' ");
}

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.random() * 100);

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 50) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255) + 0);

// Access the 'JavaScript' string characters using a random number.
let string3 = "JavaScript";
let string3Index = Math.floor(Math.random() * string3.length);
let randomChar = string3[string3Index];
console.log(randomChar);

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string4 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string4.indexOf('because because because'));
console.log(string4.substr(31,54));