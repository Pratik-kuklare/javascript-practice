// function inside function (Nested Function)
function isEligible(attendance = 75, fees = false) {
    if(attendance < 75) {
        return "Not Eligible - Low Attendance";
    } 
    if(fees === false) {
        return "Not Eligible - Fees Pending";
    }
    return "Eligible"; 
}

    function getGrade(marks) {
       if(marks >= 90) {
        return "o";
       } else if(marks >= 75) {
        return "A";
       } else if(marks >= 60) {
        return "B";
       } else {
        return "Fail";
       }
    }
    function generateResult(name, marks, attendance, fees) {
        let Eligibility = isEligible(attendance, fees);
        if(Eligibility !== 'Eligible') {
            return Eligibility;
        }
        let grade = getGrade(marks);
        return name + " | Grade: " + grade;
    }
console.log(generateResult("Pratik", 80, 77, false));

