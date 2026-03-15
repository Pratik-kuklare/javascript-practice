
// With AND: if first part is false, JS skips the second part entirely
false && console.log("never runs");

// With OR: if first part is true, JS skips the second part
true || console.log("never runs");

// This is used in real code to set default values:
const userName = "" || "Guest";
console.log(username);

const port = null || 3000;
console.log(port);

// with if condition
if ("") {
    console.log("this never runs");
}

if ("Pratik") {
    console.log("this runs!");
}

if ([]) {
    console.log("empty array is truth - this runs");
}

const isLoggedIn = true;
const cartItems = 3;
const username = "Pratik";
// Guard clause
if (!isLoggedIn) {
  console.log("Please log in first");
}

// Ternary operator (compact if/else using boolean)
const message = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(message); // "Welcome back!"