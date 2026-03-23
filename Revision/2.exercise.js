// medium question
function findMax(a, b, c) {
    if(a >= b && a >= c) {
        return a;
    } else if(b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMax(8, 12, 4));
console.log(findMax(10, 5, 8));
console.log(findMax(7, 7, 5));


function BMI(weight, height) {
    let bmi = weight / (height * height);
    if(bmi < 18.5) {
        return "Underweight";
    } else if(bmi < 25) {
        return "Normal";
    } else if(bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}
console.log(BMI(50, 1.70));
console.log(BMI(70, 1.75));


let bankAccount = {
    owner : "Pratik",
    balance : 5000,

    deposit : function(amount) {
        this.balance = this.balance + amount;
        return "New balance: " + this.balance;
    },

    withdraw : function(amount) {
        if(amount > this.balance) {
            return "Insufficient funds"
        }
        this.balance = this.balance - amount;
        return "New balance: " + this.balance;
    }
};
console.log(bankAccount.deposit(5000));
console.log(bankAccount.withdraw(3000));
console.log(bankAccount.withdraw(20000));
