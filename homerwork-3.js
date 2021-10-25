// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var i = 2;
while (i <= 100) {
    if (isEasy(i)) {
        console.log(i);
    }
    i++
}

function isEasy(x) {
    var y = 2;
    while (y < x / 2) {
        if (x % y == 0) {
            return false;
        }
        y++;
    }
    return true;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.


var cart = [
    {
        title: 'Товар 1',
        price: 100,
        count: 5
    },
    {
        title: 'Товар 2',
        price: 200,
        count: 3
    },
    {
        title: 'Товар 3',
        price: 300,
        count: 4
    }
];

// for (var i = 0; i < goods.length; i++) {
//     console.log(goods[i].title + ' В количестве' + goods[i].count + ' штук стоит ' + (goods[i].price * goods[i].count));
// }

var s = 0;
for (var item of cart) {
    console.log(item.title + ' В количестве' + item.count + ' штук стоит ' + (item.price * item.count))
    s = s + item.price * item.count;
}
console.log('Суммарная стоимость корзаны ' + s);

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(cart) {
    var s = 0;
    for (var item of cart) {
        console.log(item.title + ' В количестве' + item.count + ' штук стоит ' + (item.price * item.count))
        s = s + item.price * item.count;
    }
    return s;
}
console.log('Суммарная стоимость корзаны ' + s);

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (var i = 0; i < 10; console.log(i++))
    // 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
    // x
    // xx
    // xxx
    // xxxx
    // xxxxx

    var str = '';
for (var i = 0; i < 20; i++) {
    str += "X";
    console.log(str);
}