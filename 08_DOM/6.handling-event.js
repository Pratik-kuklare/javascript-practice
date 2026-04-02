// Handling events
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Create
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
document.body.appendChild(newDiv);

// Remove
const old = document.getElementById("old");
old.remove();