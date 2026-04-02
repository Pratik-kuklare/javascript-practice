function grettings(name = 'Pratik') {
    let message = `hello, ${name}`;
    return message;
}
console.log(grettings());

function printFullName(firstName = 'Pratik', lastName = 'Kuklare') {
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(printFullName());
console.log(printFullName('Adity', 'Dubey'));

 function calculateAge(birthYear, currentYear = 2026) {
    let age = currentYear - birthYear;
    return age;
 }
 console.log('Age:', calculateAge(2005)); 