// 1.函数声明
function sum(a, b) {
    return a + b;
}
console.log(sum(1,2));

// 2.函数表达式
const add = function(a, b) {
    return a + b;
}
console.log(add(3, 4));

// 3.箭头函数
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

// 4.构造函数
const sum2 = new Function('a', 'b', 'return a + b');
console.log(sum2(7, 8));
