const student = {
    name : "Pratik",
    age : 20,
    cgpa : 8,
    branch : "CSE",
    isVerified : false
};
student.isVerified = true;
student.cgpa = 8.9;
student.college = "DY Patil";
student.year = 3;
delete student.age;
console.log(student.name);
console.log(student["branch"]);
const key = "college";
console.log(student[key]);
console.log(student);