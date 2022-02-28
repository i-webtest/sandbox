"use strict";

//УСЛОЖНЕННОЕ ЗАДАНИЕ
let num = 266219;
let num1 = Array.from(String(num), Number);
let result = num1[0] * num1[1] * num1[2] * num1[3] * num1[4] * num1[5];
result **= 3;

console.log(num1);
console.log(result);
console.log(String(result).substring(0, 2));
