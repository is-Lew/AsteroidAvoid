const playerGridArr = document.querySelectorAll(".playerGrids");
const asteroidLaneArr = document.querySelectorAll(".lanes");
const pTag = document.querySelectorAll("p");
let alienPosition = 3;
let asteroidFrequency = 600

const generateAsteroid = () => {
  let nextAsteroidLocation = Math.floor(Math.random() * 6);
  pTag[nextAsteroidLocation].style.animation = "asteroid .6s linear";
};
const resetAsteroid = () => {
  for (let i = 0; i < asteroidLaneArr.length; i++) {
    asteroidLaneArr[i].addEventListener("animationend", () => {
      pTag[i].style.animation = "";
    });
  }
};
const trackScore = () => {
  const score = document.querySelector(".score");
  asteroidLaneArr.forEach((element) =>
    element.addEventListener("animationend", () => {
      score.innerHTML++;
    })
  );
};
const checkForCrash = () => {
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
    clearInterval(asteroidStartingSpeed)
    asteroidFrequency -= 50
    clearInterval(asteroidSpeed) 
    asteroidSpeed(generateAsteroid, asteroidFrequency) 
}
const asteroidSpeed = (func,frequency) => {
    setInterval(func,frequency)
}
const asteroidStartingSpeed = (func, frequency) => {
    setInterval(func, frequency)
}
const movePlayerUp = () => {
  playerGridArr[alienPosition].innerHTML = "";
  if (alienPosition > 0) {
    alienPosition--;
  }
  playerGridArr[alienPosition].innerHTML = "<h1>👾</h1>";
};
const movePlayerDown = () => {
  playerGridArr[alienPosition].innerHTML = "";
  if (alienPosition < 5) {
    alienPosition++;
  }
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
    asteroidStartingSpeed(generateAsteroid,700)
    setInterval(IncreaseFrequency, 15000)
  });
};
const showCrashScreen = () => {
  const crashScreen = document.querySelector(".crashScreen");
  crashScreen.style.display = "block";
};
const endGame = () => {
  pTag.forEach((element) => (element.style.display = "none"));
  showCrashScreen();
};
const startGame = () => {
  document.addEventListener("click", (event) => {
    hideStartMenu();
    checkForCrash();
  });
};
const restart = () => {
  const tryAgainButton = document.querySelector("#restart");
  tryAgainButton.addEventListener("click", (event) => {
    location.reload();
  });
};
playerMovement();
startGame();
trackScore();
restart();