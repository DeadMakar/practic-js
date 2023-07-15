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

// const message = prompt("Ведіть число");

// let correctHours = String(Math.floor(message / 60)).padStart(2, 0);

// let correctMinuts = String(message - (correctHours * 60)).padStart(2, 0);

// console.log(`${correctHours} : ${correctMinuts}`)

/**
 *? Напишіть цикл, який виводить у консоль
 *? числа  від max до min  за спаданням
 *? Виведіть у консоль усі парних чисел від min до max
 */

const max = 50;
const min = 23;

// for (let i=max; i >= min; i-=1) {
//     console.log(i);
// };
// for (let i=min; i <= max; i+=1) {

//     if (i % 2 ===  0) {
//         console.log(i);

//     }
// };
// console.log(50 % 2);
// console.log(51 % 2);

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

let total = 0;
let message = prompt("enter number");
while (message !== null) {
  total += Number(message);
  message = prompt("enter number");
}
alert(total);
