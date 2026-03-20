//Tricky question
const student = {
    name : "Pratik",
    age : 20
};
const key = "name";
console.log(student.key); // undefined
console.log(student[key]); // Pratik
console.log(student);

const obj = {
    "full name" : "Pratik Kuklare"
};
//  console.log(obj.full name); it show error
console.log(obj["full name"]);

const a = { x : 10};
const b = a;
b.x = 99;
console.log(a.x); // 99