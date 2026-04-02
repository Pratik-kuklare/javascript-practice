// fix the bugs

if (isAdmin = true) { console.log("Access granted"); } // always use "===" in if condition

let name = "";
if (name) { console.log("Name exists"); } 
else { console.log("No name"); } // no bugs

console.log(null === undefined); // different data type