"use strict";

//УСЛОЖНЕННОЕ ЗАДАНИЕ Урок №3
let lang = "ru";

if (lang === "ru") {
  console.log("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс");
} else if (lang === "en") {
  console.log("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
} else {
  console.log("Oops!");
}

switch (lang) {
  case "ru":
    console.log("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс");
    break;
  case "en":
    console.log("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
    break;
  default:
    console.log("Oops!");
    break;
}

let langArr = {
  ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};
// langArr.ru = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
// langArr.en = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(langArr.ru);

let namePerson = "Александр";
console.log(namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент");
