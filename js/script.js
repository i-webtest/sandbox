"use strict";

/* 
 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент  на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
*/

// let obj = {
//   1: "понедельник",
//   2: "вторник",
//   3: "среда",
//   4: "четверг",
//   5: "пятница",
//   6: "суббота",
//   7: "воскресенье",
// };

// let day = obj[3];
// console.log(day);

// console.log(obj[6]);

//Урок №1
// let title, screens, screenPrice, rollback, fullPrice, adaptive;

// alert("Hello, JavaScript!");
// console.log("Hello, JavaScript!");

//--------------------------------------------------------Урок №2
const title = "Проект";
const screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 10;
let fullPrice = 30000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screens.toLowerCase().split(screens));
console.log("Стоимость вёрстки экранов: " + screenPrice + " рублей");
console.log("Стоимость разработки сайта: " + fullPrice + " рублей");
console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100));

//УСЛОЖНЕННОЕ ЗАДАНИЕ
let num = 266219;
let num1 = Array.from(String(num), Number);
let result = num1[0] * num1[1] * num1[2] * num1[3] * num1[4] * num1[5];
result **= 3;

console.log(num1);
console.log(result);
console.log(String(result).substring(0, 2));

//---------------------------------------------------------Урок №3
