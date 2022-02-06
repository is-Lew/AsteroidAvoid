"use strict";

var alienPosition = 3;
var asteroidFrequency = 600;

var generateAsteroid = function generateAsteroid() {
  var pTag = document.querySelectorAll("p");
  var nextAsteroidLocation = Math.floor(Math.random() * 6);
  pTag[nextAsteroidLocation].style.animation = "asteroid .6s linear";
};

var resetAsteroid = function resetAsteroid() {
  var pTag = document.querySelectorAll("p");
  var asteroidLaneArr = document.querySelectorAll(".lanes");

  var _loop = function _loop(i) {
    asteroidLaneArr[i].addEventListener("animationend", function () {
      pTag[i].style.animation = "";
    });
  };

  for (var i = 0; i < asteroidLaneArr.length; i++) {
    _loop(i);
  }
};

var trackScore = function trackScore() {
  var asteroidLaneArr = document.querySelectorAll(".lanes");
  var score = document.querySelector(".score");
  asteroidLaneArr.forEach(function (element) {
    return element.addEventListener("animationend", function () {
      score.innerHTML++;
    });
  });
};

var checkForCrash = function checkForCrash() {
  var asteroidLaneArr = document.querySelectorAll(".lanes");
  var playerGridArr = document.querySelectorAll(".playerGrids");

  var _loop2 = function _loop2(i) {
    asteroidLaneArr[i].addEventListener("animationend", function () {
      if (playerGridArr[i].innerHTML.includes("👾")) {
        endGame();
      }

      resetAsteroid();
    });
  };

  for (var i = 0; i < asteroidLaneArr.length; i++) {
    _loop2(i);
  }
};

var IncreaseFrequency = function IncreaseFrequency() {
  clearInterval(asteroidStartingSpeed);
  asteroidFrequency -= 50;
  console.log(asteroidFrequency);
  clearInterval(asteroidSpeed);
  asteroidSpeed(generateAsteroid, asteroidFrequency);
};

var asteroidSpeed = function asteroidSpeed(func, frequency) {
  setInterval(func, frequency);
};

var asteroidStartingSpeed = function asteroidStartingSpeed(func, frequency) {
  setInterval(func, frequency);
};

var movePlayerUp = function movePlayerUp() {
  var playerGridArr = document.querySelectorAll(".playerGrids");
  playerGridArr[alienPosition].innerHTML = "";

  if (alienPosition > 0) {
    alienPosition--;
  }

  playerGridArr[alienPosition].innerHTML = "<h1>👾</h1>";
};

var movePlayerDown = function movePlayerDown() {
  var playerGridArr = document.querySelectorAll(".playerGrids");
  playerGridArr[alienPosition].innerHTML = "";

  if (alienPosition < 5) {
    alienPosition++;
  }

  playerGridArr[alienPosition].innerHTML = "<h1>👾</h1>";
};

var playerMovement = function playerMovement() {
  var gameWindow = document.querySelector("body");
  gameWindow.addEventListener("keydown", function (event) {
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

var hideStartMenu = function hideStartMenu() {
  var StartScreen = document.querySelector(".startMenu");
  var clickToStart = document.querySelector("h3");
  clickToStart.addEventListener("click", function () {
    StartScreen.style.display = "none";
    asteroidStartingSpeed(generateAsteroid, 700);
    playerMovement();
  });
};

var showCrashScreen = function showCrashScreen() {
  var crashScreen = document.querySelector(".crashScreen");
  var score = document.querySelector(".score");
  var endScore = document.getElementById("endScore");
  crashScreen.style.display = "block";
  endScore.innerHTML = " Score : ".concat(score.innerHTML, " ");
};

var endGame = function endGame() {
  var pTag = document.querySelectorAll("p");
  pTag.forEach(function (element) {
    return element.style.display = "none";
  });
  showCrashScreen();
};

var startGame = function startGame() {
  document.addEventListener("click", function (event) {
    hideStartMenu();
    checkForCrash();
    declareWinner();
  });
};

var GameWon = function GameWon() {
  var winnerScreen = document.querySelector(".winnerScreen");
  var playerGridArr = document.querySelectorAll(".playerGrids");
  winnerScreen.style.display = "block";
  playerGridArr[alienPosition].innerHTML = "";
};

var declareWinner = function declareWinner() {
  setTimeout(GameWon, 255000);
};

var restart = function restart() {
  var tryAgainButton = document.querySelector("#restart");
  tryAgainButton.addEventListener("click", function (event) {
    location.reload();
  });
};

startGame();
restart();
setInterval(IncreaseFrequency, 15000);
trackScore();