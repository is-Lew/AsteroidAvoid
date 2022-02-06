let alienPosition = 3;
let asteroidFrequency = 600

const generateAsteroid = () => {
  const pTag = document.querySelectorAll("p");
  let nextAsteroidLocation = Math.floor(Math.random() * 6);
  pTag[nextAsteroidLocation].style.animation = "asteroid .6s linear";
};
const resetAsteroid = () => {
  const pTag = document.querySelectorAll("p");
  const asteroidLaneArr = document.querySelectorAll(".lanes");
  for (let i = 0; i < asteroidLaneArr.length; i++) {
    asteroidLaneArr[i].addEventListener("animationend", () => {
      pTag[i].style.animation = "";
    });
  }
};
const trackScore = () => {
  const asteroidLaneArr = document.querySelectorAll(".lanes");
  const score = document.querySelector(".score");
  asteroidLaneArr.forEach((element) =>
    element.addEventListener("animationend", () => {
      score.innerHTML++;
    })
  );
};
const checkForCrash = () => {
  const asteroidLaneArr = document.querySelectorAll(".lanes");
  const playerGridArr = document.querySelectorAll(".playerGrids");
  for (let i = 0; i < asteroidLaneArr.length; i++) {
    asteroidLaneArr[i].addEventListener("animationend", () => {
      if (playerGridArr[i].innerHTML.includes("👾")) {
        endGame();
      }
      resetAsteroid();
    });
  }
};
const IncreaseFrequency = () => {
  clearInterval(asteroidStartingSpeed);
  asteroidFrequency -= 50;
  console.log(asteroidFrequency)
  clearInterval(asteroidSpeed);
  asteroidSpeed(generateAsteroid, asteroidFrequency);
};
const asteroidSpeed = (func, frequency) => {
  setInterval(func, frequency);
};
const asteroidStartingSpeed = (func, frequency) => {
  setInterval(func, frequency);
};
const movePlayerUp = () => {
  const playerGridArr = document.querySelectorAll(".playerGrids");
  playerGridArr[alienPosition].innerHTML = "";
  if (alienPosition > 0) {alienPosition--;}
  playerGridArr[alienPosition].innerHTML = "<h1>👾</h1>";
};
const movePlayerDown = () => {
  const playerGridArr = document.querySelectorAll(".playerGrids");
  playerGridArr[alienPosition].innerHTML = "";
  if (alienPosition < 5) {alienPosition++;}
  playerGridArr[alienPosition].innerHTML = "<h1>👾</h1>";
};
const playerMovement = () => {
  const gameWindow = document.querySelector("body");
  gameWindow.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        movePlayerUp();
        break;
      case "ArrowDown":
        movePlayerDown();
        break;
    }
  });
};
const hideStartMenu = () => {
  const StartScreen = document.querySelector(".startMenu");
  const clickToStart = document.querySelector("h3");
  clickToStart.addEventListener("click", () => {
    StartScreen.style.display = "none";
    asteroidStartingSpeed(generateAsteroid, 700);
    playerMovement();
  });
};
const showCrashScreen = () => {
  const crashScreen = document.querySelector(".crashScreen");
  const score = document.querySelector(".score");
  const endScore = document.getElementById("endScore")
  crashScreen.style.display = "block";  
  endScore.innerHTML = ` Score : ${score.innerHTML} `;
};
const endGame = () => {
  const pTag = document.querySelectorAll("p");
  pTag.forEach((element) => (element.style.display = "none"));
  showCrashScreen();
  
};
const startGame = () => {
  document.addEventListener("click", (event) => {
    hideStartMenu();
    checkForCrash();    
    declareWinner();
  });
};
const GameWon = () => {
    const winnerScreen = document.querySelector(".winnerScreen");
    const playerGridArr = document.querySelectorAll(".playerGrids");
    winnerScreen.style.display = "block"    
    playerGridArr[alienPosition].innerHTML = "";
}
const declareWinner = () => {    
    setTimeout(GameWon, 255000);    
}
const restart = () => {
  const tryAgainButton = document.querySelector("#restart");
  tryAgainButton.addEventListener("click", (event) => {
    location.reload()

  });
};
startGame();
restart();
setInterval(IncreaseFrequency, 15000)
trackScore();