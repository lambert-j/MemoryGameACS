function menuFunctionDisplayNone() {
  document.querySelector(".menu-main").classList.add("display-none");
}

function generateGrid4() {
  for (let i = 0; i < 16; i++) {
    const element = document.createElement("div");
    element.classList.add("image-4");
    document.querySelector(".grid-box").classList.add("grid-box-4");
    document.querySelector(".grid-box").appendChild(element);
  }
}

function generateGrid6() {
  for (let i = 0; i < 36; i++) {
    const element = document.createElement("div");
    element.classList.add("image-6");
    document.querySelector(".grid-box").classList.add("grid-box-6");
    document.querySelector(".grid-box").appendChild(element);
  }
}
function generateGrid8() {
  for (let i = 0; i < 64; i++) {
    const element = document.createElement("div");
    element.classList.add("image-8");
    document.querySelector(".grid-box").classList.add("grid-box-8");
    document.querySelector(".grid-box").appendChild(element);
  }
}

const gridArray4 = ["1", "2", "3", "1", "2", "3"];
