let score = 0;

function reloadPage() {
  location.reload();
}

function menuFunctionDisplayNone() {
  document.querySelector(".menu-main").classList.add("display-none");
  document.querySelector(".score-box").classList.remove("display-none");
  document.querySelector(".reset").classList.remove("display-none");
}

function generateGrid4() {
  const gridArray4 = [1, 2, 6, 7, 5, 3, 4, 8, 4, 2, 1, 7, 3, 6, 8, 5];
  let popRandomPlus = Math.floor(Math.random() * 500 + 1);
  let difficulty = 4;
  for (let i = 0; i < 16; i++) {
    let pop = gridArray4.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/100/100?lock=" + pop;

    const elementCard = document.createElement("div");
    elementCard.classList.add("flip-card1");

    const elementCardInner = document.createElement("div");
    elementCardInner.classList.add("flip-card-inner");
    elementCardInner.dataset.id = pop;
    elementCardInner.onclick = function (e) {
      clickedIdStorage(
        e.target.parentElement.dataset.id,
        e.target.parentElement,
        difficulty
      ),
        rotateCard(e.target.parentElement);
    };
    elementCardInner.style.cursor = "pointer";

    const elementBack = document.createElement("div");
    elementBack.classList.add("flip-card-front");

    const elementImg = document.createElement("div");
    elementImg.classList.add("image-4");
    elementImg.classList.add("flip-card-back");
    elementImg.style.backgroundImage = `url(${rdmimg})`;

    elementImg.dataset.id = pop;

    elementCardInner.appendChild(elementBack);
    elementCardInner.appendChild(elementImg);
    elementCard.appendChild(elementCardInner);
    document.querySelector(".grid-box").classList.add("grid-box-4");
    document.querySelector(".grid-box").appendChild(elementCard);
  }
}

function generateGrid6() {
  const gridArray6 = [
    14, 11, 18, 12, 17, 15, 8, 13, 5, 6, 2, 3, 10, 4, 16, 1, 7, 9, 7, 17, 5, 4,
    9, 1, 15, 18, 8, 12, 16, 14, 10, 13, 6, 3, 11, 2,
  ];
  let popRandomPlus = Math.floor(Math.random() * 500 + 1);
  let difficulty = 6;
  for (let i = 0; i < 36; i++) {
    let pop = gridArray6.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/75/75?lock=" + pop;

    const elementCard = document.createElement("div");
    elementCard.classList.add("flip-card2");

    const elementCardInner = document.createElement("div");
    elementCardInner.classList.add("flip-card-inner");
    elementCardInner.dataset.id = pop;
    elementCardInner.onclick = function (e) {
      clickedIdStorage(
        e.target.parentElement.dataset.id,
        e.target.parentElement,
        difficulty
      ),
        rotateCard(e.target.parentElement);
    };
    elementCardInner.style.cursor = "pointer";

    const elementBack = document.createElement("div");
    elementBack.classList.add("flip-card-front");

    const elementImg = document.createElement("div");
    elementImg.classList.add("image-6");
    elementImg.classList.add("flip-card-back");
    elementImg.style.backgroundImage = `url(${rdmimg})`;

    elementImg.dataset.id = pop;

    elementCardInner.appendChild(elementBack);
    elementCardInner.appendChild(elementImg);
    elementCard.appendChild(elementCardInner);
    document.querySelector(".grid-box").classList.add("grid-box-6");
    document.querySelector(".grid-box").appendChild(elementCard);
  }
}

function generateGrid8() {
  let gridArray8 = [
    29, 28, 30, 19, 12, 1, 16, 8, 10, 17, 26, 20, 4, 24, 32, 6, 14, 11, 18, 21,
    13, 25, 3, 27, 7, 2, 5, 15, 22, 31, 9, 23, 27, 19, 1, 8, 26, 32, 31, 13, 2,
    25, 17, 10, 5, 6, 4, 14, 15, 12, 24, 22, 20, 21, 9, 23, 16, 28, 7, 3, 30,
    29, 11, 18,
  ];
  let popRandomPlus = Math.floor(Math.random() * 500 + 1);
  let difficulty = 8;
  for (let i = 0; i < 64; i++) {
    let pop = gridArray8.pop() + popRandomPlus;
    let rdmimg = "https://loremflickr.com/60/60?lock=" + pop;

    const elementCard = document.createElement("div");
    elementCard.classList.add("flip-card3");

    const elementCardInner = document.createElement("div");
    elementCardInner.classList.add("flip-card-inner");
    elementCardInner.dataset.id = pop;
    elementCardInner.onclick = function (e) {
      clickedIdStorage(
        e.target.parentElement.dataset.id,
        e.target.parentElement,
        difficulty
      ),
        rotateCard(e.target.parentElement);
    };
    elementCardInner.style.cursor = "pointer";

    const elementBack = document.createElement("div");
    elementBack.classList.add("flip-card-front");

    const elementImg = document.createElement("div");
    elementImg.classList.add("image-8");
    elementImg.classList.add("flip-card-back");
    elementImg.style.backgroundImage = `url(${rdmimg})`;

    elementImg.dataset.id = pop;

    elementCardInner.appendChild(elementBack);
    elementCardInner.appendChild(elementImg);
    elementCard.appendChild(elementCardInner);
    document.querySelector(".grid-box").classList.add("grid-box-8");
    document.querySelector(".grid-box").appendChild(elementCard);
  }
}

function rotateCard(clickedId) {
  clickedId.style.transform = "rotateY(180deg)";
}

const clickedIdArray = [];
const clickedParentArray = [];
function clickedIdStorage(clickedId, parentElement, difficulty) {
  clickedIdArray.push(clickedId);
  clickedParentArray.push(parentElement);
  parentElement.style.pointerEvents = "none";
  if (clickedIdArray.length === 2) {
    let IdIndex1 = Number(clickedIdArray[0]);
    let IdIndex2 = Number(clickedIdArray[1]);
    let imageClicked1 = clickedParentArray[0];
    let imageClicked2 = clickedParentArray[1];
    testBothId(IdIndex1, IdIndex2, imageClicked1, imageClicked2, difficulty);
  }
}

let pointGrid = 0;
function testBothId(
  IdIndex1,
  IdIndex2,
  imageClicked1,
  imageClicked2,
  difficulty
) {
  if (IdIndex1 === IdIndex2) {
    clickedIdArray.length = 0;
    clickedParentArray.length = 0;
    score = score + 1;
    pointGrid = pointGrid + 1;
    if (difficulty == 4) {
      victoiregrid4(pointGrid);
    } else if (difficulty == 6) {
      victoiregrid6(pointGrid);
    } else if (difficulty == 8) {
      victoiregrid8(pointGrid);
    }

    document.querySelector(".score-box").innerHTML = "Score : " + score;
    setTimeout(() => {
      imageClicked1.lastChild.style.backgroundImage = `none`;
      imageClicked2.lastChild.style.backgroundImage = `none`;
    }, 1200);
  } else {
    document.querySelector("body").style.pointerEvents = "none";
    setTimeout(() => {
      imageClicked1.style.transform = "rotateY(0deg)";
      imageClicked2.style.transform = "rotateY(0deg)";
      imageClicked1.style.pointerEvents = "";
      imageClicked2.style.pointerEvents = "";
      document.querySelector("body").style.pointerEvents = "";
      clickedIdArray.length = 0;
      clickedParentArray.length = 0;
      score = score + 1;
      document.querySelector(".score-box").innerHTML = "Score : " + score;
    }, 1000);
  }
}

function victoiregrid4(pointGrid) {
  if (pointGrid == 8) {
    setTimeout(() => {
      document.querySelector(".game-over").classList.remove("display-none");
    }, 1500);
  }
}
function victoiregrid6(pointGrid) {
  if (pointGrid == 18) {
    setTimeout(() => {
      document.querySelector(".game-over").classList.remove("display-none");
    }, 1500);
  }
}
function victoiregrid8(pointGrid) {
  if (pointGrid == 32) {
    setTimeout(() => {
      document.querySelector(".game-over").classList.remove("display-none");
    }, 1500);
  }
}
