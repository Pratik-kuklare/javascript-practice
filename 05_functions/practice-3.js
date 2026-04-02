// fixed the bugs, error

function multiply(a, b) {
    let result = a * b;
    return result;  // without return it show undefined
}
console.log(multiply(4, 5)); // 20


function greetUser(name, role) {
    console.log(name + " is a " + role);
}
greetUser("Pratik"); // role parameter value not taken is show undefined
greetUser("Pratik", "Student");

/*
const result = multiply(3, 4)
const multiply = function(a, b) {
    return a * b;
}   
console.log(result); */ // it shows error because cost multiply not hoisted so line 1 not exist yet

const multiply1 = function(a, b) {
    return a * b;
}
const result1 = multiply1(3, 4)
console.log(result1);  // 12