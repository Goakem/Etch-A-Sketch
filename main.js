const container = document.querySelector(".container");

const totalDiv = 3;

for(let i = 0; i < totalDiv; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("smallDiv");

    container.appendChild(newDiv);
}
