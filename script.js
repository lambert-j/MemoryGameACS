let score = 0;

function menuFunctionDisplayNone() {
  document.querySelector(".menu-main").classList.add("display-none");
}

function generateGrid4() {
  const gridArray4 = [1, 2, 6, 7, 5, 3, 4, 8, 4, 2, 1, 7, 3, 6, 8, 5];
  let popRandomPlus = Math.floor(Math.random() * 100 + 1);
  for (let i = 0; i < 16; i++) {
    let pop = gridArray4.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/100/100?lock=" + pop;
    const element = document.createElement("div");
    element.classList.add("image-4");
    element.style.backgroundImage = `url(${rdmimg})`;
    element.style.cursor = "pointer";
    element.id = pop;
    element.onclick = function () {
      clickedIdStorage(this.id);
    };
    document.querySelector(".grid-box").classList.add("grid-box-4");
    document.querySelector(".grid-box").appendChild(element);
  }
}

function generateGrid6() {
  const gridArray6 = [
    14, 11, 18, 12, 17, 15, 8, 13, 5, 6, 2, 3, 10, 4, 16, 1, 7, 9, 7, 17, 5, 4,
    9, 1, 15, 18, 8, 12, 16, 14, 10, 13, 6, 3, 11, 2,
  ];
  let popRandomPlus = Math.floor(Math.random() * 100 + 1);
  for (let i = 0; i < 36; i++) {
    let pop = gridArray6.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/75/75?lock=" + pop;
    const element = document.createElement("div");
    element.classList.add("image-6");
    element.style.backgroundImage = `url(${rdmimg})`;
    element.style.cursor = "pointer";
    element.id = pop;
    element.onclick = function () {
      clickedIdStorage(this.id);
    };
    document.querySelector(".grid-box").classList.add("grid-box-6");
    document.querySelector(".grid-box").appendChild(element);
  }
}
function generateGrid8() {
  let gridArray8 = [
    29, 28, 30, 19, 12, 1, 16, 8, 10, 17, 26, 20, 4, 24, 32, 6, 14, 11, 18, 21,
    13, 25, 3, 27, 7, 2, 5, 15, 22, 31, 9, 23, 27, 19, 1, 8, 26, 32, 31, 13, 2,
    25, 17, 10, 5, 6, 4, 14, 15, 12, 24, 22, 20, 21, 9, 23, 16, 28, 7, 3, 30,
    29, 11, 18,
  ];
  let popRandomPlus = Math.floor(Math.random() * 100 + 1);
  console.log(popRandomPlus);
  for (let i = 0; i < 64; i++) {
    let pop = gridArray8.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/60/60?lock=" + pop;
    const element = document.createElement("div");
    element.classList.add("image-8");
    element.style.backgroundImage = `url(${rdmimg})`;
    element.style.cursor = "pointer";
    element.id = pop;
    element.onclick = function () {
      clickedIdStorage(this.id);
    };
    document.querySelector(".grid-box").classList.add("grid-box-8");
    document.querySelector(".grid-box").appendChild(element);
  }
}
const clickedIdArray = [];
function clickedIdStorage(clickedId) {
  clickedIdArray.push(clickedId);
  console.log(clickedIdArray);
  if (clickedIdArray.length === 2) {
    let IdIndex1 = Number(clickedIdArray[0]);
    let IdIndex2 = Number(clickedIdArray[1]);
    console.log(IdIndex1, IdIndex2);
    testBothId(IdIndex1, IdIndex2);
  }
}

function testBothId(IdIndex1, IdIndex2) {
  if (IdIndex1 === IdIndex2) {
    console.log("Bravo");
    clickedIdArray.length = 0;
    score = score + 1;
    document.querySelector(".score-box").innerHTML = "Score : " + score;
  } else {
    console.log("Non T Nul");
    clickedIdArray.length = 0;
    score = score + 1;
    console.log(score);
    document.querySelector(".score-box").innerHTML = "Score : " + score;
  }
}
