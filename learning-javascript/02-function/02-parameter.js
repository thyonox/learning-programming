function greet(name, age) {
    console.log(`Hello, ${name}! you are ${age} years old.`);
}
greet('Alice', 20); // Hello, Alice! you are 20 years old.
greet('Bob'); // Hello, Bob! you are undefined years old.
greet('Tom', 30, 25); // Hello, Tom! you are 30 years old.




function time(name = 'Mary', time = new Date().toLocaleDateString()) {
    console.log(`Hello, ${name}! current time is ${time}.`);
}
time(); // Hello, Mary! current time is 2026/2/27.
time('Alice'); // Hello, Alice! current time is 2026/2/27.
time('Bob', '2026-2-27'); // Hello, Bob! current time is 2026-2-27.




function sum() {
    total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    } 
    return total;
}
const array = [1, 2, 3, 4];
console.log(sum(...array)); // 10




function logInfo(first, ...rest) {
    console.log(`First: ${first}`);
    console.log(`Rest: ${rest}`);
}
logInfo('A', 'B', 'C', 'D'); // First: A   Rest: B,C,D
