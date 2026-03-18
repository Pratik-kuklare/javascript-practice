// method 1
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
        return false;
}
console.log(isEven(7));

// Method 2
function isEven1(num1) {
    return num1 % 2 === 0;
}
console.log(isEven1(7));


function calculateArea(length, width) {
    let area = length * width;
    return area;
}
console.log(calculateArea(40, 30));

// if width is not provided, use length as width
function calculateAge(length, width = length) {
    let area = length * width;
    return area;
}
console.log(calculateAge(3, 5));
console.log(calculateAge(3))


function gradeStudent(marks) {
    if(marks >= 90) {
        return "O";
    } else if(marks >= 75) {
        return "A";
    } else if(marks >= 60) {
        return "B";
    } else {
        return "Fail";
    }
}
console.log(gradeStudent(50));