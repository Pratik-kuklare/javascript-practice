// function with one parameter

function number(num) {
    console.log(`${num}`);
}
number(2);

function square(number) {
    return number * number;
}
console.log(square(4));

// function with two parameters

function sumNumber(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
}
sumNumber(2, 4);

function sumTwoNumber(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}
console.log(sumTwoNumber(2, 2));

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Pratik', 'Kuklare'))