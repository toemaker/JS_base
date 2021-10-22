// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 потому что используется преыиксная форма инкрементации. Сначала а = 2, а потом с = а
// d = b++; alert(d);           // 1 потому что используется постфиксная форма инкрементации. Сначала d = b, а потом b = 2
// c = (2 + ++a); alert(c);      // 5 Сначала a = 2 + 1 = 3, потом c = 2 + 3 = 5
// d = (2 + b++); alert(d);      // 4 Сначала d = 2 + 2 = 4, потом b = 2 + 1 = 3
// alert(a);                    // 3 К этому времени а = 3
// alert(b);                    // 3 К этому времени b = 3
// Почему код даёт именно такие результаты ?


// 2. Чему будет равен x в примере ниже ?
// var a = 2;
// var x = 1 + (a *= 2);
// x = 1 + (a * 2) = 5 так как используется префиксная форма 

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// var a = +prompt("Введите а");
// var b = +prompt("Введите b");
// console.log(a, b);
// if (a >= 0 && b >= 0) {
//     res = a - b;
// } else if (a < 0 && b < 0) {
//     res = a * b;
// } else {
//     res = a + b;
// }
// console.log(res);

// 4. Присвоить переменной а значение в промежутке[0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// var a = perseInt(Math.random() * (15 - 0) + 0); //Почему-то выдает ошибку в этой строчке. Не могу понять в чем дело.

// console.log(a);
// switch (a) {
//     case 0:
//         console.log(0);
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);
//         break;
// }

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
function getSum(a, b) {
    res = a + b;
    return res;
}

function getDif(a, b) {
    res = a - b;
    return res;
}

function getMpy(a, b) {
    res = a * b;
    return res;
}

function getDiv(a, b) {
    if (b != 0) {
        res = a / b;
        return res;
    }
    return 0;
}



// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch). 

var a = +prompt("Введите а");
var b = +prompt("Введите b");
var oper = prompt("Введите операцию (+, -, *, /)")
console.log(a, b, oper);
x = mathOperation(a, b, oper);
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            y = getSum(a, b);
            console.log(y);
            break;
        case "-":
            y = getDif(a, b);
            console.log(y);
            break;
        case "*":
            y = getMpy(a, b);
            console.log(y);
            break;
        case "/":
            y = getDiv(a, b);
            console.log(y);
            break;
        default:
            alert('Неправильный знак');
            break;
    }
}
// 7. * Сравнить null и 0. Попробуйте объяснить результат.
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

//В абстрактной проверке на >, < сначала числа сравниваются между собой и если они равны, то будет false. null преобразуется в +0, который равен 0 в данном случае
//В абстрактном алгоритме проверки на равенство == ни один из сценариев не подходит и возвращается значение по-умолчанию false
//Алгоритм работы оператора >=. Если null < 0 принимает значение false, то null >= 0 принимает значение true


// 8. * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень.

var x = +prompt("Число, которое надо возвести в степень");
var p = +prompt("Степень: ");
function pow(val, p) {
    if (p == 1) {
        return val;
    }
    if (p == 0) {
        return 1;
    }
    if (p > 0) {
        var y = val * pow(val, p - 1);
        console.log(y);
        return y;
    }
}