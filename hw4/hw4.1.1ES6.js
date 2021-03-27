"use sctrict";

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
        // return this.price; Нужноли это указывать? 
        // Нужно ли присваивать новое значения для price или нет, или это зависит от условий?
    }
}

let product2 = new Products('товар 2', 200);

product2.make25PercentDiscount();

alert(product2.price);