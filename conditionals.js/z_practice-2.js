// 1

const marks = 65;
let grade;
if(marks >= 80 && marks <= 100) {
    grade = 'A';
} else if(marks >= 70 && marks <= 89) {
    grade = 'B';
} else if(marks >= 60 && marks <= 69) {
    grade = 'C';
} else if(marks >= 50 && marks <= 59) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Student grade is ${grade}`);

// 2

let month = 'January';
let season;
if(month === 'september' || month === 'october' || month === 'November') {
    season = 'Autumn';
} else if(month === 'December' || month === 'January' || month === 'February') {
    season = 'Winter';
} else if(month === 'March' || month === 'April' || month === 'May') {
    season = 'Spring';
} else {
    season = 'Error';
}
console.log(season);

// 3

let day = 'Friday';
switch(day) {
    case 'Monday':
        console.log('Monday is a working day');
        break;
    case 'Tuesday':
        console.log('Tuesday is a Working day');
        break;
    case 'Wednesday':
        console.log('Wednesday is a working day');
        break;
    case 'Thursday':
        console.log('Thursday is a working day');
        break;
    case 'Friday':
        console.log('Friday is a working day');
        break;
    case 'Saturday':
        console.log('Saturday is a Weekend');
        break;
    case 'Sunday':
        console.log('Sunday is a weekend');
        break;
    default:
        console.log('input is not a day');
}