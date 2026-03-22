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

function getAverage(hindi, marathi, maths, science, english, socialscience ) {
    let average = ((hindi + marathi + maths + science + english + socialscience) / 6).toFixed(2);
    return average;
}

function isEligible(attendance) {
    if(attendance < 75) {
        return false;
    }
    return true;
}

function startGradeCheck() {
    const name = prompt("Enter student name:");
    const attendance = Number (prompt("Enter attendance percentage:"));
    const hindi = Number (prompt("Enter hindi marks:"));
    const marathi = Number (prompt("Enter marathi marks:"));
    const maths = Number (prompt("Enter maths marks:"));
    const science = Number (prompt("Enter science marks:"));
    const english = Number (prompt("Enter english marks:"));
    const socialscience = Number (prompt("Enter socialscience marks:"));

    const student = {
        name : name,
        attendance : attendance,
        subjects : {
            hindi : hindi,
            marathi : marathi,
            maths : maths,
            science : science,
            english : english,
            socialscience : socialscience
        }
    };

    if(!isEligible(student.attendance)) {
        alert(student.name + " is NOT eligible!\nAttendance is below 75%");
        return;
    }

    const average = getAverage(
        student.subjects.hindi,
        student.subjects.marathi,
        student.subjects.maths,
        student.subjects.science,
        student.subjects.english,
        student.subjects.socialscience,
    );
    const grade = getGrade(average);

    alert(
        "=========REPORT CARD=========" +
        "\nName       : " + student.name +
        "\nAverage    : " + average +
        "\nGrade      : " + grade +
        "\n==========================="
    );
}