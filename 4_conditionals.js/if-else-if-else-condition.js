let a = 0;
if(a > 0) {
    console.log(`${a} is a positive number`);
} else if(a < 0) {
    console.log(`${a} is a negative number`);
} else if(a === 0) {
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a number`);
}

let weather = 'sunny';
if(weather === 'rainy') {
    console.log('You need a raincoat');
} else if(weather === 'cloudy') {
    console.log('You need a jacket');
} else if(weather === 'sunny') {
    console.log('You can go out freely');
} else {
    console.log('No need to bring raincoat');
}