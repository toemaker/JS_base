// var day = prompt("Введите номер дня");
// if (day > 0 && day < 6) {
//     alert("Будний день");
// } else if (day == 6 || day == 7) {
//     alert("Выходной день");
// } else {
//     alert("День некорректный");
// }

// //Пример на понимание
// var a = 10, check = true;
// if (a >= 10) {
//     a++;
//     if (a >= 11) {
//         a += 2;
//         if (a < 15) {
//             if (!check) {
//                 a = 0;
//             }
//             a++;
//         }
//         if ("test") {
//             if (0) {
//                 a = 1;
//             }
//             if (undefined) {
//                 a = 2;
//             }
//             if (10) {
//                 a++;
//             }
//             if ("") {
//                 a = 3;
//             }
//         }
//         a++;
//     }
// }
// alert(a++);


// var price = +prompt("Введите стоимость");
// if (price >= 500 && price < 1000) {
//     price = price - price * 5 / 100;
// } else if (price >= 1000) {
//     price = price - price * 10 / 100;
// }

// alert(price)


// //Тернарный оператор

// //Генерация дня 
// // var date = new Date();//библиотека готовых команд для работы с датой и временем
// // var day = date.getDay();

// // alert()

// var day = prompt('Введите номер дня');
// alert(day > 0 && day < 6 ? 'Будний день' : 'Выходной день');//То что после ? относится к if, а то что после : к else

// var a = 10;
// var b = (a >= 10) ? (a < 15 ? 1 : 0) : 100;
// alert(b);//b = 1
// //Использовать только в простых конструкциях

// //операторы switch case

// var svetophor = prompt('Введите цвет светофора (red, green, yellow)');
// switch (svetophor) {
//     case "red":
//         console.log('Стоп');
//         break;
//     case "green":
//         console.log('Вперед');
//         break;
//     case "yellow":
//         console.log('Внимание');
//         break;
//     default:
//         console.log('Поломка светофора');
//         break;
// }

// //Метод объекта
// var a = Math.pow(2, 3);//получим 2 в степени 3
// alert(a);
// var a = Math.pow(8, 1 / 3);//получим корень третий степени
// alert(a);
// var a = Math.sqrt(9);//Квадратный корень из 9
// alert(a);
// var a = 2.3456;
// alert(Math.round(a));//Округление до целого
// alert(a);
// alert(Math.ceil(a));//Округление в большую сторону
// alert(a);
// alert(Math.floor(a));//Округление в меньшую сторону
// alert(a);
// var a = 25.345;
// alert(a.toFixed(2));//Округление до вторго знака после запятой


//Случайные числа
// var a = Math.random();//[0,1)
// var a = perseInt(Math.random() * (10 - 1) + 1);
// alert(a);

// var age1 = perseInt(Math.random() * 30 + 20);//скобку можно в уме вычислять
// var age2 = perseInt(Math.random() * 30 + 20);
// var age3 = perseInt(Math.random() * 30 + 20);

// console.log(age1, age2, age3);

// var max = Math.max(age1, age2, age3);
// var min = Math.min(age1, age2, age3);
// var middle = age1 + age2 + age3 - max - min;
// console.log(min, middle, max);


//Функции и рекурсии
//Пример 1
// var outer = 10;
// function showSum(a = 0, b = 0) {
//     outer = 5;
//     var res = a + b + outer;
//     alert(res);
// }
// showSum(1, 1);
// alert(outer);//Получится 5, потому что outer - глобальная переменная

// showSum(5);//Вместо а подставится 5, а вместо b 0

//Пример 2
// function getSum(a, b) {
//     var s = a + b;
//     return a + b;//Оператор return немедленно завершает работу функции и присваивает ей значение
// }

// var res = 2 * getSum(2, 2);
// alert(res);

//Привмер 3

// alert(calc(2, 4));

// function calc(a, b) {
//     if (isEveen(a) && isEveen(b)) {
//         return a * b;
//     }
//     return a + b;
// }

// function isEveen(n) {
//     return n % 2 == 0;
//     //     if (n % 2 == 0) {
//     //         return true;
//     //     }
//     //         return false;
// }

// //Рекурсия - функция, вызывающая саму себя
// function f(n) {
//     if (n == -1) {
//         return;
//     }
//     console.log(n);
//     f(n - 1);
// }

// f(5);//рекурсия занимает место в стеке
