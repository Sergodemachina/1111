
    
// let result = myVar1 > myVar2 ? console.log(true) : console.log(false);
// тернарный оператор


// Конструкция Switch

// const userRole = "admin";

// || логическое И возвращает значение true делается в первую очяередь
// && логическое ИЛИ возвращает значение False
// ! логическое НЕ

// console.log(1 || 0 || 4);  возвращает первое тру тоесть число или строку
// console.log(1 && 0); возвращает первую лож. боесть 0

// console.log(( 1 && 2) || (4 && 0)); раскрываются скобки из-за ||;



// if (1 && 0) {
//     console.log(result);

// 1/ находит ключевое слово if. понимает, что дальше условие
// 2 внутри условия находит логические  И - &&.
// 3 оператор приводит значение к булеву типу - true\false делает под капотом
// 4 1-true/ 0-false возвращает значение которое является false при приведении в булев тип
// 5 в данном случае мы получаем 0. которое приводится в булев тип блоком if



//логическое НЕ - !
//  js приводит значение после ! к булевому типу 
// 2 ! меняет полученый тип на противоположеный


// const myvar = !5;
// console.log(myvar);

// console.log(null || 0 || "" || undefined);

// console.log("яблоко" && true && null && 1);
//  console.log(0 || (tue && "123") || null);
//  console.log((0 && true) || ("123" && null));
// console.log (!(null || (!"orange" && true))); ! преобразует значение наоборот

// 1


// 2
// const currentTmp = 8;

//  const intervalOne = 5123;
//  const intervalTwo = 2;
//  const intervalThree = 8;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//    console.log(`${intervalOne} - самый большой отерзок`);
//  } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//    console.log(`${intervalTwo} - самый большой отерзок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//    console.log(`${intervalThree} - самый большой отерзок`);
//  }

// const currentTmp = -11;

// if (currentTmp <= -30) {
//     console.log("Stay homw");
// }
// if (currentTmp > -30 && currentTmp <= -10) {
//     console.log("Weather is cold");
// }
// if (currentTmp > -10 && currentTmp <= 5) {
//     console.log("Weather isn't cold");
// }
// if (currentTmp > 5 && currentTmp <= 15) {
//     console.log("Warm");
// }
// if (currentTmp > 15 && currentTmp <= 25) {
//     console.log("Very Warm");
// }
// if (currentTmp > 25 && currentTmp < 35) {
//     console.log("Hot");
// }
// if (currentTmp >= 35) {
//     console.log("Tooo Hot!");
// }

// циклы
// let myVar = 0;
// while (true) {
//     console.log((myVar += 1)); //myVar = myVar + 1    += добавляет к пердыдущему 
// }

// let myVar = 0;

// while (myVar >= 0 && myVar <= 10) {
//     console.log((myVar += 1));
// }

// do {
//     console.log(myVar += 1);
// } while (false)

// FOR


// const myVar = 10;

// for (let counter = 0; counter <= myVar; counter++) {
//     console.log(counter);
// }

// const endOfLoop = 10;
// for (let counter = 0; counter <= endOfLoop; counter++) {
// console.log(counter);
// if (counter === 5) {
//     break;
// }

// const endOfLoop = 10;
// for (let counter = 0; counter <= endOfLoop; counter++) {}


// задача 1  решать через while? do-while, for



// задача 2


// задача 3:




// задача 4 






//1 задача вывести в консоль заданную строку N рвз


// const iteratiomText = "Итерация";

// //while

// const limit = 5;
// let counter = 1; 

// while (counter <= limit) {
//     console.log(`${iteratiomText} - s{counter}`);
//     counter++;
// }


// 2 задача 
// let carsAmount = 60; // N
// const minCarsAmount = 10; // M

// for (let day = 1; carsAmount > minCarsAmount; day++ ){
//     carsAmount /=2;
//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// }
// const startYear = 1800;
// const endYear = 2020;

//  let leapYearsAmount = 0;
// // const firstSpaceTryYear = 1961;

// // for (let counter = startYear; counter <= endYear; counter++){

// //     if (counter === firstSpaceTryYear){
// //         console.log(`${firstSpaceTryYear} - первый полёт в космос`);
// //         console.log(`Колличество итераций - ${counter - startYear}`);
// //         break;
// //     }
// // }


// for (let year = startYear; year <= endYear; year++) {
//     if (year % 400 === 0 || (year % 4 === 0 && 100 !== 0)) {
//         console.log(year);
//         leapYearsAmount += 1;
//         }
//     }

console.log (!(null || (!"orange" && true)));
