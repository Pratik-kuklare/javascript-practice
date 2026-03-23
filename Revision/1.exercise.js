function isOdd(num) {
    if(num % 2 !== 0)
        return true;
        return false;
}
console.log(isOdd(3));

function fullName(firstName, lastName) {
    if(lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName
}
console.log(fullName("Pratik"));

const car = {
    brand : "BMW",
    speed : 350,
    isElectric : false,
    describe : function() {
        return this.brand + " is the brand and " + this.speed + " is the speed";
    }
}
console.log(car.describe());