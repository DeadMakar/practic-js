// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */

// const message = prompt("Яка офіційна назва JavaScript?");
// if (message === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }




// Напишіть програму, яка отримає від користувача
//  число (кількість хвилин) та виведе в консоль
//  рядок у форматі годин та хвилин
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  70 === 01:10
//  */

// const message = 65;
// let hours = message / 60;
// let modifyHours = Math.floor(hours);

// let correctHours = String(modifyHours).padStart(2, 0);

// let minuts = message - (correctHours * 60);
// let correctMinuts = String(minuts).padStart(2, 0);

// console.log(`${correctHours} : ${correctMinuts}`)


const message = 65;

let correctHours = String(Math.floor(message / 60)).padStart(2, 0);

let correctMinuts = String(message - (correctHours * 60)).padStart(2, 0);

console.log(`${correctHours} : ${correctMinuts}`)