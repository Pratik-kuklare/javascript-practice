const student = {
    name : "Pratik",
    age : 20,
    college : "DY Patil",
    branch : "CSE",
    fees : true,
    attendance : 80,
    subjects : {
        maths : 85,
        science : 90,
        english : 72
    }
};
function getAverage(subjects) {
    let average = (subjects.maths + subjects.science + subjects.english) / 3;
    return average.toFixed(2);
}
function getGrade(average) {
    if(average >=90) {
        return "O";
    } else if(average >=75) {
        return "A";
    } else if(average >=60) {
        return "B";
    } else if(average >=45) {
        return "C";
    } else if(average >= 35) {
        return "D";
    } else {
        return "Fail";
    }
}
function isEligible(attendance, fees) {
    if(attendance < 75) {
        return false;
    } if(fees === false) {
        return false;
    }
    return true;
}
function generateReport(student) {
    const {name, age, college, branch, fees, attendance, subjects} = student;
    if(!isEligible(attendance, fees)) {
        return "Not Eligible for Report";
    }
    let average = getAverage(subjects);
    let grade = getGrade(average);
    return "=====REPORT CARD =====" + "\n" +
    "Name    : " + name + "\n" +
    "Age     : " + age + "\n" +
    "College : " + college + "\n" +
    "Branch  : " + branch + "\n" +
    "Average : " + average + "\n" +
    "Grade   : " + grade + "\n" +
    "========================";
}
console.log(generateReport(student));