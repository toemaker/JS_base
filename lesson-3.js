//Циклы

//Цикл while
// var i = 1;
// while (i <= 10) {
//     console.log("Элемент №" + i);
//     i++;
// }

// var str = "Привет ";
// str += "мир";
// alert(str);

// var i = 1, list = "<ul>";
// while (i <= 100) {
//     list += "<li>Элемент №" + i + "</li>";
//     i++;
// }
// list += "</ul>";
// document.write(list);

// var table = "<table border='1' width='600'>";
// var tr = 1;//Счетчик строк
// while (tr <= 100) {
//     if (tr == 6) {
//         break;//Принудительный выход из цикла
//     }
//     table += "<tr>";
//     var td = 1;//Счетчик столбцов
//     while (td <= 10) {
//         if (td == 5) {
//             continue;//Пропускает текущую интерацию цикла
//         }
//         var style = td % 2 == 0 ? "color:red;" : "color:blue;";
//         table += "<td style = '" + style + "'>" + (tr * td) + "</td>";
//         td++;
//     }
//     table += "</tr>";
//     tr++;
// }
// table += "</table>";
// document.write(table);

//Игра казино
// var money = +prompt('Ваша сумма');
// if (money < 1000) {
//     alert("Сумма недостаточная!");
// } else {
//     while (1) {
//         var bet = +prompt('Ваша ставка');
//         if (bet > money || isNaN(bet)) {
//             alert('Вы указали некорректную ставку');
//         } else {
//             break;
//         }
//     }
//     alert('Игра началась');
//     var number = parseInt(Math.random() * 9 + 1); //Число, которое загадал кормпьютер. Не работает функция рандом.
//     var count = 3;//счетчик попыток
//     while (count > 0) {
//         var answer = prompt('Попытка №' + (4 - count));
//         if (answer == number) {
//             alert('Вы угадали! Ваша сумма = ' + (money + bet));
//             break;
//         } else {
//             count--;
//             if (count == 0) {
//                 alert('Вы проиграли! Было загадано ' + number + "\nВаша самма = " + (money - bet));
//             }
//         }
//     }
// }


//Цикл do while 
// do {
//     операторы;
// }
// while (условие);


//Цикл for
// for(i=0; i<3; i++){
//     операторы;
// }

// function deposit(money, years) {
//     var rate = years > 3 ? 6 : 5;
//     for (var i = 1; i <= years; i++) {
//         var profit = money * rate / 100;
//         money += profit;
//         document.write('Ваша сумма за ' + i + 'год = ' + money.toFixed(2) + '(Прибыль: ' + profit + ')<hr>');
//     }
// }

// var m = +prompt('Ваша сумма');
// var y = +prompt('Срок владения');
// deposit(m, y);


//Массивы
var mas = [10, 20, 30, "test", true];
console.log(mas);
var lastItem = mas[mas.length - 1];
alert(lastItem);
//Добавление элемента в массив
mas.push(777);//Добавить элемент в конец
mas.unshift(777);//Добавить элемент в начало массива
mas[mas.length] = 888;//Вставить элемент массива в нужный индекс
console.log(mas);

//Удаление элемента из массива
var deleted = mas.pop();//Удаляем последний элемент из массива. Удаленное значение можно сохранить
var deleted = mas.splice(1, 3);//Начиная с индекса 1, удаляем 3 элемента
alert(deleted);

//Поиск элемента в массиве
alert(mas.indexOf(30));//indexOf вернет первый элемент массива, который совпадает с искомым

//Преобразование строки в массив
var fio = "Иванов Иван Иванович"
alert(fio[0]);//Строка это массив символов
var masFio = fio.split(' ');
alert(masFio[1]);

//Преобразование массива в строку
var str = masFio.join('\n');
alert(str);


var goods = [
    {
        title: 'Товар 1',
        price: 100
    },
    {
        title: 'Товар 2',
        price: 200
    },
    {
        title: 'Товар 3',
        price: 300
    }
];

for (var i = 0; i < goods.length; i++) {
    console.log(goods[i].title + 'стоит ' + goods[i].price);
}

var s = 0;
for (var item of goods) {
    console.log(item.title + 'стоит ' + item.price)
    s = s + item.price;
}
