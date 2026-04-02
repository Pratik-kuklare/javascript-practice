// Print even numbers 1 to 20
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}


// Print sum of 1 to 100
let sum = 0;
for(let i = 1; i < 101; i++) {
    sum += i; 
}
console.log(sum);

// Print multiplicaton table of 5
const num = 5;

for(let i = 1; i <= 10; i++) {
    const result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}