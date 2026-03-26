const heading = document.getElementById("title");

heading.textContent = "New Title";         // change text
heading.innerHTML = "<b>Bold Title</b>";   // change HTML inside
heading.style.color = "red";              // change CSS
heading.classList.add("active");          // add a class
heading.classList.remove("hidden");       // remove a class
heading.classList.toggle("dark");         // toggle a class