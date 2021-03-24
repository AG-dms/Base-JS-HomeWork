'use strict';
const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,

    },
];

const newarr = products.filter(item => "photos" in item && item.photos.length > 0);
console.log(newarr);



// Не понимаю почему в отладчике функция за переменую А берет второй объект массива, 
//а b это первый(нулевой объект), почему не наоборот?
// Сортировка от этого все равно правильная, но не понятно
// еще в разборе ДЗ эта задача расписана гораздо короче
// То есть все эти условия происходят как бы под капотом и можно их не писать?
const sortArr = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    if (a.price == b.price) {
        return 0;
    }
});
console.log(sortArr);