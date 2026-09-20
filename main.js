const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function createNewDiv () {
    let userInput = Number(prompt("Enter a number between 1 and 100:"));
    console.log(`This is the datatype of userInput within stated constraint ${typeof userInput}`);

    if ((userInput < 1) || (userInput > 100) || (userInput === NaN)) {
        userInput = Number(prompt("You must pick a number btw 1 & 100"));
        console.log(`This is the datatype of userInput outside the scope ${typeof userInput}`);
    }

    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            console.log(`I made it into the loop`);
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            const containerTrueHeight = container.offsetHeight - 12;
            const containerTrueWidth = container.offsetWidth - 12;
            console.log(`True div size: Height is ${containerTrueHeight}, Width is ${containerTrueWidth}`);

            const numberOfFlexGap = userInput - 1;
            const sizeOfFlexGap = numberOfFlexGap * 5;
            console.log(`The total numbers of gap: ${numberOfFlexGap} and size of gap: ${sizeOfFlexGap}`);
            
            const childrenDivWidth = containerTrueWidth - sizeOfFlexGap;
            const newDivWidth = (childrenDivWidth / userInput) - 2;
            console.log(`This is the width of the new div: ${childrenDivWidth}`);

            const childrenDivHeight = containerTrueHeight -sizeOfFlexGap;
            const newDivHeight = (childrenDivHeight / userInput) - 2;
            console.log(`This is the Height of the new div: ${childrenDivHeight}`);

            newDiv.style.width = newDivWidth + "px";
            newDiv.style.height = newDivHeight + "px";
            console.log(`Calc completed, Yay!`);

            container.appendChild(newDiv);
            console.log(`Appended`)

            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
                console.log(`just turned blue`);
            });
            newDiv.addEventListener("mouseout", (e) => {
                e.target.style.backgroundColor = "initial";
                console.log(`I am now default`);
            })
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        console.log(`removing children is my thing`)
    }
}

btn.addEventListener("click", (e) => {
    let clickCount = performance.eventCounts.get("click");
    console.log(`I have been clicked, leggo!`);

    if (clickCount === 1) {
        console.log(`I am 1`);
        createNewDiv();
        console.log(`Click action 1 completed`);
    } else if (clickCount > 1) {
        console.log(`Click action ${clickCount} completed`)
        removeAllChildNodes(container);
        console.log(`children removed`);
        createNewDiv();
        console.log(`creating new div like always`);
    }
});