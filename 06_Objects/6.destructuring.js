const person = {
    firstName : "Pratik",
    lastName : "Kuklare",
    age : 20,
    skills : [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    isStudent : true
}
console.log(person);

const {firstName, lastName, age, skills, isStudent} = person;
console.log(firstName);  
console.log(lastName);
console.log(age);
console.log(skills);
console.log(isStudent);


const calculator = {
    brand: "Casio"
}
const {brand} = calculator;
console.log(brand);