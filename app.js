const playerGridArr = document.querySelectorAll(".playerGrids")
const asteroidLaneArr = document.querySelectorAll(".lanes")
const ptag = document.querySelectorAll("p")


const alienHTML = "<h1>👾</h1>" ;
let alienPosition = 3;


const generateAsteroid = () => {
    let nextAsteroidLocation = Math.floor((Math.random() * 6))    
    ptag[nextAsteroidLocation].style.animation = "asteroid .8s linear";
}


const resetAsteroid = () => {
    for (let i = 0; i < asteroidLaneArr.length; i++) {
        asteroidLaneArr[i].addEventListener("animationend", () =>{
            ptag[i].style.animation = "";             
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
            if (playerGridArr[i].innerHTML.includes("👾")) {alert ("crash")}
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






// const increaseDifficulty = () => {
//     let intervalTime = 1000
    
//     switch (score.innerHTML) {
//         case score.innerHTML >= 20:
//             intervalTime = 20
//         break;
//         case score.innerHTML >= 10:
//             intervalTime = 50
//         break;
//         default:
//             intervalTime = 500
//         break;
        
          
        
//     }
//     return intervalTime;    
// }


// increaseDifficulty()
// setInterval(generateAsteroid, 500)
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

document.addEventListener("click", (event) => {
        checkForCrash();
        trackScore();
        playerMovement()
        setInterval(generateAsteroid, 500)
    
})

