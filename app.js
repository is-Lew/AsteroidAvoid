const playerGridArr = document.querySelectorAll(".playerGrids")
const asteroidLaneArr = document.querySelectorAll(".lanes")
const pTag = document.querySelectorAll("p")
const alienHTML = "<h1>👾</h1>" ;
let alienPosition = 3;

const generateAsteroid = () => {
    let nextAsteroidLocation = Math.floor((Math.random() * 6))    
    pTag[nextAsteroidLocation].style.animation = "asteroid .8s linear";
}
const resetAsteroid = () => {
    for (let i = 0; i < asteroidLaneArr.length; i++) {
        asteroidLaneArr[i].addEventListener("animationend", () =>{
            pTag[i].style.animation = "";             
        })                
    }  
}
const trackScore = () => {
    const score = document.querySelector(".score")
    asteroidLaneArr.forEach(element => element.addEventListener ("animationend", () =>{ score.innerHTML++; }))

}
const checkForCrash = () => {   
    for (let i = 0; i < asteroidLaneArr.length; i++) {
        asteroidLaneArr[i].addEventListener("animationend", () =>{
            if (playerGridArr[i].innerHTML.includes("👾")) {}
            resetAsteroid();
        })
    }
}
const movePlayerUp = () => {
    playerGridArr[alienPosition].innerHTML =""      
    if (alienPosition > 0) {alienPosition--};    
    playerGridArr[alienPosition].innerHTML=alienHTML;
    
}
const movePlayerDown = () => {
    playerGridArr[alienPosition].innerHTML =""  
    if (alienPosition < 5) { alienPosition++};    
    playerGridArr[alienPosition].innerHTML=alienHTML;    
}   
const playerMovement = () => {
    const gameWindow = document.querySelector("body")
    gameWindow.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':            
                movePlayerUp();                
            break;
            case 'ArrowDown':
                movePlayerDown();
            break;
        }
    });
}

const hideStartMenu = () => {
    const StartScreen = document.querySelector(".startMenu")
    StartScreen.addEventListener("click", () => {
        StartScreen.style.display = "none";
    })
}
const showCrashScreen = () => {
    const CrashScreen = document.querySelector(".crashScreen")
    StartScreen.addEventListener("click", () => {
        StartScreen.style.display = "";
    })
}

const startGame = () => {
    document.addEventListener("click", (event) => {
        hideStartMenu()
        checkForCrash();
        trackScore();
        playerMovement()
        setInterval(generateAsteroid, 250)    
})
}

startGame()


