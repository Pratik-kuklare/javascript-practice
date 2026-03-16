// Trap of truthy & falsy

console.log([] == false) // true [] is converted in "" first then "" is 0
console.log([] === false) // false
console.log("" == false) // true
console.log("0" == false) // true

// Falsy check and == equality are COMPLETELY different things

null == false       // false — even though null is falsy
undefined == false  // false — even though undefined is falsy
"" == false         // true  — but only because of number coercion

