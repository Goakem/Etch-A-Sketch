const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function createNewDiv () {
    let userInput = Number(prompt("Enter a number between 1 and 100:"));
    console.log(`This is the datatype of userInput within stated constraint "${typeof userInput}"`);
    console.log(`This is the user input ${userInput}`);

    if ((userInput < 1) || (userInput > 100) || (userInput === NaN)) {
        userInput = Number(prompt("You must pick a number btw 1 & 100"));
        console.log(`This is the datatype of userInput outside the scope "${typeof userInput}"`);
        console.log(`This is the user input ${userInput}`);
    }

    const containerTrueHeight = container.offsetHeight - 12;
    const containerTrueWidth = container.offsetWidth - 12;
    console.log(`True container div size: Height is ${containerTrueHeight}, Width is ${containerTrueWidth}`);

    const numberOfFlexGap = userInput - 1;
    const sizeOfFlexGap = numberOfFlexGap * 5;
    console.log(`The total numbers of gap: ${numberOfFlexGap} and size of gap: ${sizeOfFlexGap}`);
    
    const shareableContainerWidth = containerTrueWidth - sizeOfFlexGap;
    const newDivWidth = (shareableContainerWidth / userInput) - 2;
    console.log(`This is the new shareable width of the container div: ${shareableContainerWidth}`);
    console.log(`This is the size width of a child div: ${newDivWidth}`);

    const shareableContainerHeight = containerTrueHeight -sizeOfFlexGap;
    const newDivHeight = (shareableContainerHeight / userInput) - 2;
    console.log(`This is the new shareable Height of the container div: ${shareableContainerHeight}`);
    console.log(`This is the size height of a child div: ${newDivHeight}`);
    console.log(`Calc completed, Yay!`);

    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            console.log(`I made it into the loop`);
            console.log(`i: ${i} && j: ${j}`)
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");
            console.log(`newDiv has been created`);

            newDiv.style.width = newDivWidth + "px";
            newDiv.style.height = newDivHeight + "px";

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
        console.log(`removing children is my thing`);
    }
}

btn.addEventListener("click", (e) => {
    let clickCount = performance.eventCounts.get("click");
    console.log(`I have been clicked, leggo!`);

    if (clickCount === 1) {
        console.log(`I am click 1`);
        createNewDiv();
        console.log(`Click action 1 completed`);
    } else if (clickCount > 1) {
        removeAllChildNodes(container);
        console.log(`children removed`);
        createNewDiv();
        console.log(`creating new div like always`);
        console.log(`Click action ${clickCount} completed`);

    }
});