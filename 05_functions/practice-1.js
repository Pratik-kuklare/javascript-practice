function canVote(age) {
    if(age >= 18) {
        return true;
    } 
        return false;
}
console.log(canVote(16));

function isWeekend(day) {
    if(day === "Saturday" || day === "Sunday") {
        return true; 
    }
    return false;
}
console.log(isWeekend("Sunday"));

function getUsername(input) {
    return input || "Guest";
}
console.log(getUsername("Pratik")); // Pratik
console.log(getUsername(""));  // Guest
console.log(getUsername(null));