"use strict";

var playerGridArr = document.querySelectorAll(".playerGrids");
var asteroidLaneArr = document.querySelectorAll(".lanes");
var pTag = document.querySelectorAll("p");
var alienHTML = "<h1>👾</h1>";
var alienPosition = 3;

var generateAsteroid = function generateAsteroid() {
  var nextAsteroidLocation = Math.floor(Math.random() * 6);
  pTag[nextAsteroidLocation].style.animation = "asteroid .8s linear";
};

var resetAsteroid = function resetAsteroid() {
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
  var score = document.querySelector(".score");
  asteroidLaneArr.forEach(function (element) {
    return element.addEventListener("animationend", function () {
      score.innerHTML++;
    });
  });
};

var checkForCrash = function checkForCrash() {
  var _loop2 = function _loop2(i) {
    asteroidLaneArr[i].addEventListener("animationend", function () {
      if (playerGridArr[i].innerHTML.includes("👾")) {}

      resetAsteroid();
    });
  };

  for (var i = 0; i < asteroidLaneArr.length; i++) {
    _loop2(i);
  }
};

var movePlayerUp = function movePlayerUp() {
  playerGridArr[alienPosition].innerHTML = "";

  if (alienPosition > 0) {
    alienPosition--;
  }

  ;
  playerGridArr[alienPosition].innerHTML = alienHTML;
};

var movePlayerDown = function movePlayerDown() {
  playerGridArr[alienPosition].innerHTML = "";

  if (alienPosition < 5) {
    alienPosition++;
  }

  ;
  playerGridArr[alienPosition].innerHTML = alienHTML;
};

var playerMovement = function playerMovement() {
  var gameWindow = document.querySelector("body");
  gameWindow.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowUp':
        movePlayerUp();
        break;

      case 'ArrowDown':
        movePlayerDown();
        break;
    }
  });
};

var hideStartMenu = function hideStartMenu() {
  var StartScreen = document.querySelector(".startMenu");
  StartScreen.addEventListener("click", function () {
    StartScreen.style.display = "none";
  });
};

var showCrashScreen = function showCrashScreen() {
  var CrashScreen = document.querySelector(".crashScreen");
  StartScreen.addEventListener("click", function () {
    StartScreen.style.display = "";
  });
};

var startGame = function startGame() {
  document.addEventListener("click", function (event) {
    hideStartMenu();
    checkForCrash();
    trackScore();
    playerMovement();
    setInterval(generateAsteroid, 250);
  });
};

startGame();