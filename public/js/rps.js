const btn = document.querySelectorAll('.btn'),
    robochoice = document.querySelector('.robochoice'),
    draw = document.querySelector('.draw'),
    playerResult = document.querySelector('.presults'),
    cpuResult = document.querySelector('.cpuresults'),
    pwinner = document.querySelector('.pwinner'),
    cpuwinner = document.querySelector('.cpuwinner')

// player & computer score should be 0
let playerScore = 0
let cpuScore = 0
let rounds = 5
// set the text content of player and computer result on front end
playerResult.textContent = playerScore
cpuResult.textContent = cpuScore

    // create a function that let's computer randomly select between rock paper and scissors
    function computerPlay(){
        // we have an array of choices to be made by computer
        var choices = ['rock', 'paper', 'scissors']
        // then ...sips tea
        var random = Math.floor(Math.random() * 3)
        // then return random choices just like a ....behd beech
        return choices[random]
    }

    // create a function to show a user if their selction and cpu's is the same
    function drawFlash() {
        draw.textContent = "Draw, pick again!";
    }

    function beats(user, cpu){
        this.user.textContent = `${user} beats ${cpu}`
        this.cpu.textContent = `${cpu} beats ${user}`
    }


// main game function goes here
function playRound() {
    // we want to loop over all of our buttons for our gameplay
    for(var i = 0; i < btn.length; i++){
        // then add an event listener to each of our buttons 
                btn[i].addEventListener('click', (e) => {
                    if(draw.textContent === "Draw, pick again!") {
                        draw.textContent = "";
                    }
            if(e.target.id === 'rock' && computerPlay() === 'scissors'){
                console.log(`You win! Rock beats Scissors`)
                robochoice.textContent = "scissors"
                playerScore++
                playerResult.textContent = playerScore
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else if(e.target.id === 'rock' && computerPlay() ==='rock'){
                console.log(`Draw`)
                drawFlash()
                robochoice.textContent = 'rock'
                playerScore
                playerResult.textContent = playerScore
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else if(e.target.id === 'paper' && computerPlay() === 'rock'){
                console.log(`You win! Paper beats Rock`)
                robochoice.textContent = 'rock'
                playerScore++
                playerResult.textContent = playerScore
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else if(e.target.id === 'paper' && computerPlay() === 'paper'){
                console.log(`Draw`)
                drawFlash()
                playerScore
                playerResult.textContent = playerScore
                robochoice.textContent = 'paper'
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else if(e.target.id === 'scissors' && computerPlay() === 'paper'){
                console.log(`You win! Scissors beats Paper`)
                robochoice.textContent = 'paper'
                playerScore++
                playerResult.textContent = playerScore
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else if(e.target.id === 'scissors' && computerPlay() === 'scissors'){
                console.log(`Draw`)
                drawFlash()
                playerScore
                robochoice.textContent = 'scissors'
                playerWins(playerScore)
                cpuWins(cpuScore)
            } else {
                cpuScore++
                cpuResult.textContent = cpuScore
                playerWins(playerScore)
                cpuWins(cpuScore)
                if(e.target.id === 'rock'){
                    robochoice.textContent = 'paper'
                } else if(e.target.id === 'paper'){
                    robochoice.textContent = 'scissors'
                } else if(e.target.id ==='scissors'){
                    robochoice.textContent = 'rock'
                }
            }
        })
    }
    
}


// winning condition
function playerWins(score){
    // if player's score is same as no of rounds, declare player as the winner
    if(score === rounds){
        pwinner.textContent = 'YOU WIN!'
        playerScore = 0
        cpuScore = 0
        playerResult.textContent = playerScore
        cpuResult.textContent = cpuScore
    } else if(score < rounds) {
        pwinner.textContent = ''
    }
}


function cpuWins(score){
    // if cpu's score is same as no of rounds, declare player as the winner
    if(score === rounds){
        playerScore = 0
        cpuScore = 0
        cpuResult.textContent = cpuScore
        playerResult.textContent = playerScore
        cpuwinner.textContent = 'CPU WINS!'
        robochoice.textContent = 'Yassss!!!'
    } else if(score < rounds){
        cpuwinner.textContent = ''
    }
}

playRound()