"use strict";

/**
 * функция складывает параметр "a" с параметром "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function mathematic1(a, b) {
    return a + b;
}
alert(mathematic1(2, 3));

/**
 * функция вычитает из параметра "a" параметр "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function mathematic2(a, b) {
    return a - b;

}
alert(mathematic2(10, 7));

/**
 * функция умножает параметр "a" на параметр "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
// попробовал стрелочные функции, они правильно составены, их же только спомощью переменных можно?
let mathematic3 = (a, b) => a * b;
alert(mathematic3(2, 2));


/**
 * функция делит параметр "a" на параметр "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
let mathematic4 = (a, b) => a / b;
alert(mathematic4(10, 5));