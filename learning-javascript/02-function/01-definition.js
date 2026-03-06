// 1.函数声明
// 打印对象 o 的每个属性和值
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}`);
    }
}
printprops({name: 'Alice', age: 30});
// 计算笛卡尔坐标点(x1, y1)和(x2, y2)之间的距离
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
console.log(distance(1, 2, 4, 6));
// 计算阶乘的递归函数
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(4));

// 2.函数表达式
// 把函数赋值给一个变量
const square = function(x) {
    return x * x;
}
// 函数表达式可以包含名字，对递归有用
const f = function fac(n) {
    if (n <= 1) return 1;
    return n * fac(n - 1);
}
// 函数表达式也可以定义完立即调用
const tensquared = (function(x) {
    return x * x;
})();

// 3.箭头函数
// 标准写法
const sum = (x, y) => {
    return x + y;
}
// 函数体只有一个return，可以省略大括号和return
const sum2 = (x, y) => x + y;
// 只有一个参数可以省略括号
const square2 = x => x * x;