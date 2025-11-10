const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let score = 0;
let counted = false;

document.addEventListener("keydown", function(){
    jump();
});

function jump(){
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(function(){  
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130){
        alert("GAME OVER");
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
    }

 
    if(cactusLeft < 0 && !counted){
        score++;
        scoreDisplay.innerText = "Score: " + score;
        counted = true;
    }

   
    if(cactusLeft > 500){
        counted = false;
    }

}, 10);
