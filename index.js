/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const message = prompt("Яка офіційна назва JavaScript?");
if (message === "ECMAScript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
