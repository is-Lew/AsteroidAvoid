"use strict";

// const playerStartPosition = document.getElementById("gameWindow__playerGrid4")
var playerGridArr = document.querySelectorAll(".playerGrids");
var lane1Asteroid = document.getElementById("lane1");
var asteroidLaneArr = document.querySelectorAll(".lanes");
var animations = document.querySelectorAll(".animate");
var ptag = document.querySelectorAll("p");
var score = document.querySelector(".score"); // const highestScore = document.querySelector(".highestScore")
// Spawn asteroids randomly in one of 6 lanes

var generateAsteroid = function generateAsteroid() {
  var nextAsteroidLocation = Math.floor(Math.random() * 6);
  ptag[nextAsteroidLocation].style.animation = "asteroid 1s linear";
};

var asteroidSpeed = setInterval(generateAsteroid, 250); // track score
// If asteroid reaches left end of lane and corresponding player box has player in end game 
// const checkForCrash = () => {

var _loop = function _loop(i) {
  asteroidLaneArr[i].addEventListener("animationend", function () {
    ptag[i].style.animation = "";

    if (playerGridArr[i].innerHTML.includes("👾")) {
      alert("crash");
    }

    score.innerHTML++;
  });
};

for (var i = 0; i < asteroidLaneArr.length; i++) {
  _loop(i);
} // }
// keystroke or click to move player to different grid position 
// const movePlayer = () => {


var gameWindow = document.querySelector("body");
gameWindow.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      if (playerGridArr[1].innerHTML.includes("👾")) {
        playerGridArr[1].innerHTML = "";
        playerGridArr[0].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[2].innerHTML.includes("👾")) {
        playerGridArr[2].innerHTML = "";
        playerGridArr[1].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[3].innerHTML.includes("👾")) {
        playerGridArr[3].innerHTML = "";
        playerGridArr[2].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[4].innerHTML.includes("👾")) {
        playerGridArr[4].innerHTML = "";
        playerGridArr[3].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[5].innerHTML.includes("👾")) {
        playerGridArr[5].innerHTML = "";
        playerGridArr[4].innerHTML = "<h1>👾</h1>";
      }

      break;

    case 'ArrowDown':
      if (playerGridArr[0].innerHTML.includes("👾")) {
        playerGridArr[0].innerHTML = "";
        playerGridArr[1].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[1].innerHTML.includes("👾")) {
        playerGridArr[1].innerHTML = "";
        playerGridArr[2].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[2].innerHTML.includes("👾")) {
        playerGridArr[2].innerHTML = "";
        playerGridArr[3].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[3].innerHTML.includes("👾")) {
        playerGridArr[3].innerHTML = "";
        playerGridArr[4].innerHTML = "<h1>👾</h1>";
      } else if (playerGridArr[4].innerHTML.includes("👾")) {
        playerGridArr[4].innerHTML = "";
        playerGridArr[5].innerHTML = "<h1>👾</h1>";
      }

      break;
  }
}); // }