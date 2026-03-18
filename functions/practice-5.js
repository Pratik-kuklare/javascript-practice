// difference in output

// version 1
console.log(sayHello());
function sayHello() {
    return "Hello!";
}  // "Hello!"

// version 2
/* console.log(sayHi());
const sayHi = function() {
    return "Hi!";
}; */   // throws error because of const. 

function calculate(a, b, operation) {
    if(operation === 'add') {
        return a + b;
    } else if(operation === 'subtract') {
        return a - b;
    } else if(operation === 'multiply') {
        return a * b;
    } else if(operation === 'divide') {
        return a / b;
    } else {
        return "Invalid operation";
    }
}
console.log(calculate(10, 5, 'add'));
console.log(calculate(10, 5, 'subtract'));
console.log(calculate(10, 5, 'multiply'));
console.log(calculate(10, 5, 'divide'));

function calculate(a, b, operation) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return "Invalid operation";
    }
}
console.log(calculate(10, 5, 'add'));
console.log(calculate(10, 5, 'subtract'));
console.log(calculate(10, 5, 'multiply'));
console.log(calculate(10, 5, 'divide'));
