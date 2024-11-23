let monthInput = prompt("Enter a month:");
let numberOfDays = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  June: 31,
  July: 30,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 30,
};
if (numberOfDays[monthInput]) { // Lưu ý cú pháp khi truy xuất giá trị từ đối tượng
  alert(`${monthInput} has ${numberOfDays[monthInput]} `);
}

