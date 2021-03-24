'use strict';

//Задание 3
// добавил округление чтобы были целые числа (понятно что в реальности так делать нельзя, т.к цена будет не корректная)
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(discount => {
    discount.price = Math.round(discount.price / 1.15);
});

console.log(products);