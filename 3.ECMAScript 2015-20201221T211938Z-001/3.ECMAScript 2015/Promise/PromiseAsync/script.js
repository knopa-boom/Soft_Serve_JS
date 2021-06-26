/*
   В примере демонстрируется
   асинхронное получение некоторых данных,
   которые асинхронно проверяются на тип данных string
   и выводятся на экран.
   
   Асинхронность реализована при помощи
   Promise (промисификация).
*/

"use strict";

function getDataAsync() {
   return new Promise((resolve, reject) => {
      console.log("Получаем данные ...");
      setTimeout( // Имитация получения данных
         () => {
            let data = "Hello world!";
            console.log("Данные получены");
            resolve(data);
         },
         3000
      );
   });
}

function isStringAsync(value) {
   return new Promise((resolve, reject) => {
      console.log("Проверяем данные ...");
      setTimeout( // Имитация проверки
         () => {
            let result;
            if (typeof value === "string") {
               result = true;
            } else {
               result = false;
            }
            console.log("Данные проверены");
            resolve(result);
         },
         3000
      );
   });
}

function start() {
   let data;
   getDataAsync().then( // Получение данных
      (dataRes) => {
         data = dataRes;
         return isStringAsync(dataRes); // Проверка данных
      }
   ).then(
      (isStringRes) => { // Вывод на экран
         let r = `Получены данные ${isStringRes ? "строчного" : "не строчного"} типа: ${data}`;
         console.log(r);
      }
   );
}

start();
setTimeout(
   start,
   2000
);