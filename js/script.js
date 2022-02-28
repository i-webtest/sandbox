"use strict";

//--------------------------------------------------------Урок №2
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 30000);
let rollback = 10;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "слайдер");
let servicePrice1 = +prompt("Сколько это будет стоить?", 2000);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "реклама");
let servicePrice2 = +prompt("Сколько это будет стоить?", 1000);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percentPrice = fullPrice * (rollback / 100);
let servicePercentPrice = fullPrice - percentPrice;

if (fullPrice >= 30000) {
  console.log("Даём скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

console.log(typeof title);
console.log("Проект: " + title);
console.log(typeof fullPrice);

console.log("Типы экранов: " + screens);
console.log("Стоимость вёрстки экранов: " + screenPrice + " рублей");
console.log(adaptive);
console.log("Дополнительный тип услуги: " + service1);
console.log("Стоимость дополнительной услуги: " + servicePrice1);
console.log("Дополнительный тип услуги: " + service2);
console.log("Стоимость дополнительной услуги: " + servicePrice2);
console.log(screens.length);
console.log(screens.toLowerCase().split(screens));

console.log("Стоимость разработки сайта: " + fullPrice + " рублей");
console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100));
console.log("Итого: " + Math.ceil(servicePercentPrice));
