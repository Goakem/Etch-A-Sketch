const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

let userInput = 16;

const containerTrueHeight = container.offsetHeight - 12;
const containerTrueWidth = container.offsetWidth - 12;

const numberOfFlexGap = userInput - 1;
const sizeOfFlexGap = numberOfFlexGap * 5;

const shareableContainerWidth = containerTrueWidth - sizeOfFlexGap;
const newDivWidth = (shareableContainerWidth / userInput) - 2;


const shareableContainerHeight = containerTrueHeight -sizeOfFlexGap;
const newDivHeight = (shareableContainerHeight / userInput) - 2;

for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            newDiv.style.width = newDivWidth + "px";
            newDiv.style.height = newDivHeight + "px";

            container.appendChild(newDiv);

            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
        }
    }

function createNewDiv () {
    let userInput = Number(prompt("Enter a number between 1 and 100:"));

    if ((userInput < 1) || (userInput > 100) || (userInput === NaN)) {
        userInput = Number(prompt("You must pick a number btw 1 & 100"));
    }


    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            newDiv.style.width = newDivWidth + "px";
            newDiv.style.height = newDivHeight + "px";

            container.appendChild(newDiv);

            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
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

    if (clickCount >= 1) {
        removeAllChildNodes(container);
        createNewDiv();
    }
});