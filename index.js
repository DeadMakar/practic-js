//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const inputNameRef = document.querySelector("#alertInput");
// const buttonNameRef = document.querySelector("#alertButton");
// // console.log(inputNameRef);
// // console.log(buttonNameRef);
// buttonNameRef.addEventListener("click", (event) => {
//   alert(inputNameRef.value);
// });

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const swapBtnEl = document.querySelector('#swapButton')
// const leftSwapEl = document.querySelector('#leftSwapInput')
// const rightSwapEl = document.querySelector('#rightSwapInput')

// swapBtnEl.addEventListener('click', onChangeInputHandle)

// function onChangeInputHandle(event) {
//     const leftInputValue = leftSwapEl.value;
//     const rigthInputValue = rightSwapEl.value
//     leftSwapEl.value = rigthInputValue;
//     rightSwapEl.value = leftInputValue
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const passwordInputEl = document.querySelector("#passwordInput");
// const passwordButtonEl = document.querySelector("#passwordButton");

// passwordButtonEl.addEventListener("click", () => {
//   if (passwordButtonEl.textContent === "Розкрыть") {
//     passwordInputEl.setAttribute("type", "text");
//     passwordButtonEl.textContent = "Скрыть";
//     return;
//   }

//   passwordInputEl.setAttribute("type", "password");
//   passwordButtonEl.textContent = "Розкрыть";
// });

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
// const decreaseBtnEl = document.querySelector("#decrease");
// const increaseBtnEl = document.querySelector("#increase");
// const boxEl = document.querySelector("#box");
// decreaseBtnEl.addEventListener("click", () => {
//   const size = getComputedStyle(boxEl).width;
//   boxEl.style.width = parseInt(size) - 10 + "px";
//   boxEl.style.height = parseInt(size) - 10 + "px";

// });

// increaseBtnEl.addEventListener("click", () => {
//   const size = getComputedStyle(boxEl).width;
//   boxEl.style.width = parseInt(size) + 10 + "px";
//   boxEl.style.height = parseInt(size) + 10 + "px";
// });

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
// const placeRef = document.querySelector("#place");
// document.body.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   if (event.target === placeRef) {
//     console.log("КЛЫКНУВ, КУРВА");
//   }
// });
//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const doubleBtnEl = document.querySelector('#double')
const listItemEl = document.querySelectorAll('.listItem')

doubleBtnEl.addEventListener("click", () => {
    listItemEl.forEach(el => el.textContent = BigInt (el.textContent) ** 2n)
})

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
