const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function createNewDiv () {
    const userInput = prompt("Enter a number between 1 and 100:");

    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            const newDivHeight = (container.offsetHeight / +userInput);
            const newDivWidth = (container.offsetWidth / +userInput);

            newDiv.style.width = newDivWidth + "px";
            newDiv.style.height = newDivHeight + "px";
            console.log(typeof newDivHeight);
            console.log(typeof newDivWidth);

            container.appendChild(newDiv);

            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
            newDiv.addEventListener("mouseout", (e) => {
                e.target.style.backgroundColor = "initial";
            })
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btn.addEventListener("click", (e) => {
    let clickCount = performance.eventCounts.get("click");

    if (clickCount === 1) {
        createNewDiv();
    } else if (clickCount > 1) {
 
        removeAllChildNodes(container);
        createNewDiv();
    }
});