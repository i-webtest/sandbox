"use strict";

//--------------------------------------------------------Урок №4
let title = prompt("Как называется ваш проект?", "КаЛьКулятор ВёРстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 30000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "слайдер");
let servicePrice1 = +prompt("Сколько это будет стоить?", 2000);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "реклама");
let servicePrice2 = +prompt("Сколько это будет стоить?", 1000);
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даём скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  allServicePrices = servicePrice1 + servicePrice2;
  return allServicePrices;
};

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
  return fullPrice;
}

function getTitle() {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrices() {
  return servicePercentPrice;
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Типы экранов: " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом процента отката: " + servicePercentPrice);

// console.log("Итого: " + Math.ceil(servicePercentPrice));
// console.log("Проект: " + getTitle(title));
// console.log("Стоимость вёрстки экранов: " + screenPrice + " рублей");
// console.log(adaptive);
// console.log("Дополнительный тип услуги: " + service1);
// console.log("Стоимость дополнительной услуги: " + servicePrice1);
// console.log("Дополнительный тип услуги: " + service2);
// console.log("Стоимость дополнительной услуги: " + servicePrice2);
// console.log(screens.toLowerCase().split(screens));

// console.log("Стоимость разработки сайта: " + fullPrice + " рублей");
// console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100));
// console.log("Итоговая стоимость за вычетом процента отката: " + servicePercentPrice);
