"use strict";

//--------------------------------------------------------Урок №5
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "КаЛьКулятор ВёРстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "слайдер");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "реклама");
    }

    do {
      sum = +prompt("Сколько это будет стоить?", 2000);
    } while (!isNumber(sum));

    sum += sum;
  }

  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

function getTitle() {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Итоговая стоимость за вычетом процента отката: " + servicePercentPrice);
