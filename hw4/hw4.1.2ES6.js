"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(someText) {
        this.text = someText;
        return this.text;
    }
}


// Не понял как свойству highlighted присвоить значени false. Это нужно сделать прямо в конструкторе? тогда как?
// Или непосредственно уже при создании объекта нужно передать ему значение false?
class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj1 = new Post('Петя', 'текст текс', '27/03');

let obj2 = new AttachedPost('Вася', 'какой-то текст', '27/03', false);

console.log(obj2);
obj2.edit('другой текст');
obj2.makeTextHighlighted();
console.log(obj2);