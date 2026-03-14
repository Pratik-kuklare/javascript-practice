let num = [1, 2, 3];
num[0] = 10
console.log(num) // 10, 2, 3

let nums = [1, 2, 3];
let number = [1, 2, 3];
console.log(num == number); // false

nums = number;
console.log(nums == number); // true

let person1 = {
    name : 'Pratik',
    role : 'learning',
    country : 'India'
};
let person2 = {
    name : 'John',
    role : 'teaching',
    country : 'UK'
};
console.log(person1 == person2); // false

person2 = person1;
console.log(person1 == person2); // true
