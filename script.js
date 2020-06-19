Number.prototype.powerFive = function (n) {
  return Math.pow(this, 5);
};

let angka = 2;

console.log(angka.powerFive());

// let buttonValue = document.getElementById("btn-input");

// buttonValue.addEventListener("click", function () {
//   let inputValue = document.getElementById("input").value;

//   Number.prototype.powerFive = function (inputValue) {
//     return Math.pow(this, 5);
//   };

//   //   let angka = 2;

//   console.log(inputValue.powerFive());

//   document.querySelector(
//     ".container .row .col-12 #result"
//   ).innerHTML = `${inputValue.powerFive()}`;
// });
