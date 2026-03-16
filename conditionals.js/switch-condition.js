let weather = 'cloudy'
switch(weather) {
    case 'rainy' :
        console.log('You need a raincoat');
        break;
    case 'cloudy' :
        console.log('You need a jacket');
        break;
    case 'sunny' :
        console.log('You can go out freely');
        break;
    default:
        console.log('No need to bring raincoat');
}

let day = 'sunday';
switch(day) {
    case 'monday':
        console.log('Today is Monday');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;
    case 'wednesday':
        console.log('Today is Wednesday');
        break;
    case 'thursday':
        console.log('Today is Thursday');
        break;
    case 'friday':
        console.log('Today is Friday');
        break;
    case 'saturday':
        console.log('Today is Saturday');
        break;
    case 'sunday':
        console.log('Today is Sunday');
        break;
    default:
        console.log('It is not a week day');
}

// Examples to use conditions in the cases

let num = -10;
switch(true) {
    case num > 0:
        console.log('Number is a positive');
        break;
    case num < 0:
        console.log('Number is a Negative');
        break;
    case num === 0:
        console.log('Number is zero');
        break;
    default:
        console.log('Entered value was not a number');
}