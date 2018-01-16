

var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none"; // This will not show the dice at first
// The Roll Button
document.querySelector(".roll-dice").addEventListener("click", function(){

    // This event will roll the dice with the image.
    dice = Math.floor(Math.random() * 6) + 1;

    
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "img/dice-" + dice + ".png";
    console.log(dice);

    if(dice !== 1){
       
       roundScore+=dice;
       document.querySelector(".current-score-" + activePlayer).textContent = roundScore;  
        
    }
    else{
        // This will select the active player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        // This will make the current score 0 when the turn back to the player
        document.querySelector(".current-score-0").textContent = "0";
        document.querySelector(".current-score-1").textContent = "0";
        // For the style it will romove the "active" class from the two players
        document.querySelector(".player-0").classList.remove("active");
        document.querySelector(".player-1").classList.remove("active");
        // It will bring back the "active" class to the active player
        document.querySelector(".player-" + activePlayer).classList.add("active");
    }
});
// The HOLD Button
document.querySelector(".hold").addEventListener("click", function(){
    // Transfer the current score to Global score.
    score[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];
    // Check if win or Switch the player.
    if(score[activePlayer] >= 10){
        document.querySelector("#score-" + activePlayer).innerHTML = "Winner";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".roll-dice").style.display = "none";
        document.querySelector(".hold").style.display = "none";
        document.querySelector(".player-" + activePlayer).classList.add("active");
        document.querySelector(".current-score-0").textContent = "0";
        document.querySelector(".current-score-1").textContent = "0";
    }
    else{
        more();   
    }
});

// The NEW-GAME Button
document.querySelector(".new-game").addEventListener("click", function(){
    newgame();
})

function newgame (){
    document.querySelector(".current-score-0").textContent = "0";
    document.querySelector(".current-score-1").textContent = "0";
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";

    document.querySelector(".player-0").classList.remove("active");
    document.querySelector(".player-1").classList.remove("active");

    document.querySelector(".player-" + activePlayer).classList.add("active");

    document.querySelector(".roll-dice").style.display = "inline-block";
    document.querySelector(".hold").style.display = "inline-block";
    roundScore = 0;
    score =[0,0];
    console.log(score);
}

// This is Function will Switch the player
function more (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-0").classList.remove("active");
    document.querySelector(".player-1").classList.remove("active");
    // It will bring back the "active" class to the active player
    document.querySelector(".player-" + activePlayer).classList.add("active");
    document.querySelector(".current-score-0").textContent = "0";
    document.querySelector(".current-score-1").textContent = "0";    
}
