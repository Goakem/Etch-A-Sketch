const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    const userInput = prompt("Enter a number between 0 and 100:");
    debugger;

    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            container.appendChild(newDiv);

            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
        }
    }
});



