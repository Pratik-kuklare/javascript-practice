// Predict the output
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet(); // Hello Guest
greet("Pratik"); // Hello Pratik

function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(result); // 15

function sayHi() {
    console.log("Hi!");
    return;               // return immediately exist the function.
    console.log("Bye!");
}
sayHi(); // Hi! 