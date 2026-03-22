// creating function inside object
const person = {
    firstName : "Pratik",
    lastName : "Kuklare",
    age : 20,
    getFullName : function() {
        return `${person.firstName} ${person.lastName}`
    }
}
console.log(person.getFullName())

const calculator = {
    brand: "Casio",
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3));
console.log(calculator.brand);

const user = {
    name : "Pratik",
    greet : function() {
        return "Hello " + this.name;
    }
}
console.log(user.greet());