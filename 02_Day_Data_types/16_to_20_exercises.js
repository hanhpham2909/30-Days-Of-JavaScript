// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let string = "30 Days Of JavaScript";
console.log(string.lastIndexOf("JavaScript"));
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string1.indexOf("You"));
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string1.lastIndexOf("conjunction"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string1.search("You"));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let string3 = " 30 Days Of JavaScript ";
console.log(string3.trim());
console.log(string3);
