"use strict";

// const playerStartPosition = document.getElementById("gameWindow__playerGrid4")
var playerGridArr = document.querySelectorAll(".playerGrids");
var lane1Asteroid = document.getElementById("lane1");
var asteroidLaneArr = document.querySelectorAll(".lanes");
var animations = document.querySelectorAll(".animate");
var ptag = document.querySelectorAll("p"); // Spawn asteroids randomly in one of 6 lanes

var generateAsteroid = function generateAsteroid() {
  var nextAsteroidLocation = Math.floor(Math.random() * 6);
  ptag[nextAsteroidLocation].style.animation = "asteroid 1s linear";
};

var asteroidTimer = setInterval(generateAsteroid, 250); // If asteroid reaches left end of lane and corresponding player box has player in end game 

asteroidLaneArr[0].addEventListener("animationend", function () {
  ptag[0].style.animation = "";

  if (playerGridArr[0].innerHTML.includes("👾")) {
    alert("crash");
  }
});
asteroidLaneArr[1].addEventListener("animationend", function () {
  ptag[1].style.animation = "";

  if (playerGridArr[1].innerHTML.includes("👾")) {
    alert("crash");
  }
});
asteroidLaneArr[2].addEventListener("animationend", function () {
  ptag[2].style.animation = "";

  if (playerGridArr[2].innerHTML.includes("👾")) {
    alert("crash");
  }
});
asteroidLaneArr[3].addEventListener("animationend", function () {
  ptag[3].style.animation = "";

  if (playerGridArr[3].innerHTML.includes("👾")) {
    alert("crash");
  }
});
asteroidLaneArr[4].addEventListener("animationend", function () {
  ptag[4].style.animation = "";

  if (playerGridArr[4].innerHTML.includes("👾")) {
    alert("crash");
  }
});
asteroidLaneArr[5].addEventListener("animationend", function () {
  ptag[5].style.animation = "";

  if (playerGridArr[5].innerHTML.includes("👾")) {
    alert("crash");
  }
}); // keystroke or click to move player to different grid position 

document.addEventListener('keydown', function (event) {
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
});