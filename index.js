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

// const max = 50;
// const min = 23;

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

// /**
//  *? При завантаженні сторінки користувачеві пропонується
//  *? в prompt ввести число. Введення додається до значення
//  *? змінної total.
//  *? Операція введення числа триває до того часу,
//  *? поки користувач не натисне кнопку Cancel у prompt.
//  *? Після того як користувач припинив введення, натиснувши на
//  *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

//  *! Робити перевірку, що користувач ввів саме число,
//  *! а не довільний набір символів не потрібно.
//  */

// let total = 0;
// let message = prompt("enter number");
// while (message !== null) {
//   total += Number(message);
//   message = prompt("enter number");
// }
// alert(total);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

/* const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const arr = Object.keys(user);

for (const key of arr) {
  console.log(`${key}: ${user[key]}`);
} */

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function calcSelery(obj) {
//   const weluse = Object.values(obj);
//   let total = 0;
//   for (const item of weluse) {
//     total += item;
//   }
//   return total;
// }
// const resalt = calcSelery(someObj);
// console.log (resalt);

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {
//   for (const stone of someStones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 0;
// }
// console.log(calcTotalPrice(stones, "Брилнт"));

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// const newArr = [...arr];
// const index = newArr.indexOf("foo");
// newArr.splice(index, 1);
// console.log(newArr);

// newArr.reverse();
// console.log(newArr);
// const sdsa = newArr.join(" ");
// console.log(sdsa);

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// console.log(string);
// Напишит функцію, яка приймає два аргументи (массив рядків і рядок), перевіряє чи є такий рядок у масиві.
// якщо такий рядок знайдено у массиві, потрібно утворити з нього массив, розвернути і повернути із функції
// якщо такого рядку немає то потрібно повернути рядок "Not found 🙄"

// const arr = ["aPple", "bananA", "cHerry", "Orange"];

// function findString(array, string) {
//   for (let item of array) {
//     if (item.toLowerCase() === string.toLowerCase()) {
//       return item.split("").reverse();
//     }
//   }
//   return "Not found 🙄";
// }
// console.log(findString(arr, "sds"));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const foo = (array) => {
//   return array.map((item, index)=> {
//     return {
//       ...item,
//       price: item.price * 0.8,
//       id: index+1,
//     }
//    })
// }

// console.log(foo(fruits));

// const foo = (array) => array.map((item, index) =>({
//       ...item,
//       price: item.price * 0.8,
//       id: index+1,
//     })
//    )

/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const array = tweets.flatMap(item => item.tags);
// console.log(array);

// const result = array.reduce((acc, item) => {
//   return {
//     ...acc,
//     [item]: acc[item] ? acc[item] + 1 : 1
//   }
// }, {})
// console.log(result);

// //TODO:=============================================
// /**
//  *? Напиши функцію конструктор Storage який створює об'єкти
//  *? Для управління складом товарів.
//  *? При виклику отримуватиме один агрумент - початковий масив товарів,
//  *? і записувати їх у властивість items.
//  *? Додай методи класу:
//  *? getItems() - повертайте масив товарів
//  *? addItems(item) - отримує новий товар та додає його до поточних
//  *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//  */

// const arr = ["apple", "banana", "mango"];

// const Storage = function (arr) {
//   this.items = arr;
//   this.getItems = function () {
//     return this.items;
//   };
//   this.addItems = function (item) {
//     this.items.push(item);
//   };
//   this.removeItem = function (item) {
//     const index = this.items.indexOf(item);
//     if (index === -1) {
//       return;
//     }
//     this.items.splice(index, 1);
//   };
// };

// const newStorage = new Storage(arr);
// // console.log(newStorage);

// newStorage.addItems("tomato");

// newStorage.removeItem("dgdsgds");

// console.log(newStorage.getItems());
