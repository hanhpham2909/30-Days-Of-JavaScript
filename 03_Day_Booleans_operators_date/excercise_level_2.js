// 1.
// let base = prompt("Enter base");
// let height = prompt("Enter height");
// let triangle = (0.5 * base * height);
// let alert_1 = alert(`Area = ${triangle}`);

// console.log(base);
// console.log(height);
// console.log(alert_1);

//2.
// let side_a = prompt('Enter side a');
// let side_b = prompt('Enter side b');
// let side_c = prompt('Enter side c');

// let a = parseFloat(side_a);
// let b = parseFloat(side_b);
// let c = parseFloat(side_c);

// let perimeter = (a + b + c);
// let alert_2 = alert(`Perimeter= ${perimeter}`);

//3.
// let length = prompt("Enter length");
// let width = prompt("Enter width");

// let a = parseFloat(length);
// let b = parseFloat(width);

// let area = a * b;
// let perimeter = 2 * (a + b);

// let area_alert = alert(`area of rectangle ${area} and Perimeter ${perimeter}`);

//4.
// let radius = prompt("Enter radius");
// let r = parseFloat(radius);
// let pi = 3.14;
// let area = pi * r * r;
// let circumference = 2 * pi * r;

// let area_alert = alert(`Area = ${area}`);
// let circumference_alert = alert(`Circumference = ${circumference}`);

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
// function calculateSlope(x, y) {
//   if ((x == 0)) {
//     y = 2 * x - 2;
//   } else if ((y == 0)) {
//     x = (y + 2) / 2;
//   }
//   return {
//     y_result: y,
//     x_result: x,
//   }};
//   let slope = calculateSlope(2,3);
//   console.log("X-intercept:", slope.x_result);
//   console.log("Y-intercept:", slope.y_result);

//6.
// function calculateSlope(x1,y1,x2,y2){
//     let m = (y2-y1)/(x2-x1);
//     return m
// }
// let number = calculateSlope(2,2,6,10);
// console.log(number);

//7.
// let slope_excercise_6 = 2;
// if (slope_excercise_6 === number){
//     console.log("\nThe slopes are equal.");
// } else {
//     console.log("\nThe slopes are not equal.");
// }

//8.
// const a = 1;
// const b = 6;
// const c = 9;
// const delta = b ** 2 - 4 * a * c;
// let x1;

// console.log("delta = ", delta);
// if (delta === 0) {
//   x1 = -b / (2 * a);
//   console.log("Để y = 0, thì x = ", x1);
// }

// // after tham khảo cách giải khác
// function Calculate(x) {
//   return x * x + 6 * x + 9;
// }
// for (let x = -10; x <= 20; x += 1) {
//   let y = Calculate(x);
//   if (y == 0) {
//     console.log(`With x = ${x}, y= ${y}`);
//   }
// }

// //9.
// let hours = prompt("Enter hours");
// let ratePerHour = prompt("Enter rate per hour");
// let salary = (hours * ratePerHour);
// let alert_pay = alert(`Your weekly earning is ${salary}`);

//10
// Tạo prompt và nhập tên muốn check
// let nameInput = prompt("Enter your name");
// if (nameInput.length > 7) {
//   let alert1 = alert("Your name is long");
// } else if (nameInput.length < 7) {
//   let alert2 = alert("Your name is short");
// }

//11
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// if (firstName.length > lastName.length) {
//   console.log("Your first name, Asabeneh is longer than your family name, Yetayeh");
// } else if (firstName.length < lastName.length) {
//   console.log("Your first name, Asabeneh is shorter than your family name, Yetayeh");
// } else {
//   console.log("Your first name, Asabeneh is equal than your family name, Yetayeh");
// }

//12
// let myAge = 250;
// let yourAge = 25;
// let ageDifference = myAge - yourAge;
// console.log(`I am ${ageDifference} years older than you`) ;

//13
// let yourBirthYear = prompt("Enter birth year");
// function calculateAge(yourBirthYear) {
//   const now = new Date();
//   const thisYear = now.getFullYear();
//   let yourAge = thisYear - yourBirthYear;
//   let yearAllowDrive = 18 - yourAge;
//   return { yourAge, yearAllowDrive };
// }
// const { yourAge, yearAllowDrive } = calculateAge(yourBirthYear);
// if (yourAge >= 18) {
//   let alert1 = alert(`You are ${yourAge}. You are old enough to drive`);
// } else {
//   let alert2 = alert(
//     `You are ${yourAge}. You will be allowed to drive after ${yearAllowDrive} years.`
//   );
// }

/* Sai: return yourAge, yearAllowDrive ;
Trong JS, chỉ trả về giá trị cuối cùng sau dấu phẩy. 
Sử dụng đối tượng: Khi bạn muốn trả về một nhóm giá trị liên quan với nhau nhưng có tên rõ ràng. Đối tượng là lựa chọn tốt khi bạn cần truy cập các giá trị qua tên (tên thuộc tính).
Ví dụ: Trả về thông tin người dùng như tên, tuổi, và địa chỉ. Mỗi thông tin có tên rõ ràng, ví dụ: name, age, address.

Sử dụng mảng: Khi bạn cần trả về một danh sách các giá trị mà không cần phải truy cập theo tên, chỉ cần sử dụng chỉ số. Mảng là lựa chọn tốt khi bạn chỉ cần nhóm các giá trị liên quan mà không cần phải đặt tên cho từng giá trị.
Ví dụ: Trả về một dãy số hoặc một danh sách các phần tử mà không cần phải đặt tên cho từng phần tử. */

//14
// let yearsYouLive = prompt("Enter number of years you live ");
// let alert1 = alert ("You lived "+ yearsYouLive * 365*24*3600+ " seconds.")

//15
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth() + 1;
// let date = now.getDate();
// let hour = now.getHours();
// let minutes = now.getMinutes();
// console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
// console.log(`${date}-${month}-${year} ${hour}:${minutes}`);
// console.log(`${date}/${month}/${year} ${hour}:${minutes}`);

//16
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let formatMonth = month < 10 ? "0" + month : month;
let formatDate = date < 10 ? "0" + date : date;

let formatMinutes = minutes < 10 ? "0" + minutes : minutes;
let formatHours = hour < 10 ? "0" + hour : hour;

console.log(`${year}-${formatMonth}-${formatDate} ${formatHours}:${formatMinutes}`)