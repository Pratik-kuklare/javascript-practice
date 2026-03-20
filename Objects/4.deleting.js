let person3 = {
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

person3.newSkill = "Java";
console.log(person3);

// deleting new key
delete person3.newSkill;
console.log(person3);

delete person3['isStudent'];
console.log(person3);
