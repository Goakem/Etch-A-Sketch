const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function createNewDiv () {
    const userInput = prompt("Enter a number between 1 and 100:");

    for(let i = 0; i < userInput; i++) {
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("smallDiv");

            const containerTrueHeight = container.offsetHeight - 12;
            const containerTrueWidth = container.offsetWidth - 12;
            console.log(`This is containers width and height after the 
                adding of paddings, Height: ${containerTrueHeight} 
                & ${containerTrueWidth}`
            );

            const numberOfFlexGap = userInput - 1;
            const sizeOfFlexGap = numberOfFlexGap * 5;
            console.log(`This is the size of the gap 
                between elements ${sizeOfFlexGap}`
            );
            
            const childrenDivWidth = containerTrueWidth - sizeOfFlexGap;
            const newDivWidth = (childrenDivWidth / userInput) - 2;

            const childrenDivHeight = containerTrueHeight -sizeOfFlexGap;
            const newDivHeight = (childrenDivHeight / userInput) - 2;

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