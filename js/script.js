"use strict";

//--------------------------------------------------------Урок №7

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
  },

  logger: function () {
    for (let prop in appData) {
      console.log("appData." + prop + " = " + appData[prop]);
    }
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "КаЛьКулятор ВёРстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "слайдер");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "реклама");
      }

      do {
        price = prompt("Сколько это будет стоить?", 2000);
      } while (!isNumber(price));

      sum += +price;
    }

    return sum;
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle() {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даём скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
};

appData.start();
appData.logger();

console.log(appData.getTitle());
// console.log("appData.allServicePrices", appData.allServicePrices);
// console.log(getRollbackMessage(appData.fullPrice));
// console.log(typeof appData.title);
// console.log(typeof appData.screenPrice);
// console.log(typeof appData.adaptive);

// console.log(appData.screens.length);
// console.log("Стоимость вёрстки экранов: " + appData.screenPrice);
console.log("Стоимость разработки сайта: " + appData.getFullPrice() + " руб");
console.log("Итоговая стоимость за вычетом процента отката: " + appData.getServicePercentPrices() + " руб");
