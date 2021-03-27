"use sctrict";

function Products(name, price) {
    this.name = name;
    this.price = price;
}

Products.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 0.25;
    return this.price;
};

let product1 = new Products("Товар1", 100);


product1.make25PercentDiscount();
alert(product1.price);