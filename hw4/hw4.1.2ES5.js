function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (someText) {
    this.text = someText;
    return this.text;
};



// Не понял как свойству highlighted присвоить значени false. Это нужно сделать прямо в конструкторе? тогда как?
// Или непосредственно уже при создании объекта нужно передать ему значение false?
function AttachedPost(author, text, date, highlighted) {
    /* Я правильно понял, что запись ниже Наследует свойства из Post, 
    но при этом значения этих свойств у объекта AttachedPost будут свои уникальные а у Post свои?
    То есть это по сути тоже самое, что мы бы продублировали код для объекта AttachedPost:
        this.author = author;
        this.text = text;
        this.date = date;
        Это сделано по большей части чтобы сокращать код и не дубировать его, 
        или тут именно сам факт Наследования важен?
        */
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}
// не много не понял выражение - 'объект прослойка' по доп. видео.
// Вернее не понял, что значит они будут жестко связанны между собой, если так не написать?
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost; // constructor это ключевое слово или вместо него можно что угодно написать?

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let obj1 = new Post('Петя', 'текст текс', '27/03');

let obj2 = new AttachedPost('Вася', 'какой-то текст', '27/03', 2423);

console.log(obj2);
obj2.edit('другой текст');
obj2.makeTextHighlighted();
console.log(obj2);