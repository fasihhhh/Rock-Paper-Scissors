let rock = document.getElementsByClassName('rock')[0]
let paper = document.getElementsByClassName('paper')[0]
let scissor = document.getElementsByClassName('scissor')[0]
let playAgainBtn = document.getElementsByClassName('btn')[0]
let winStatus = document.getElementsByClassName('winStatus')[0]
let computerScore = document.getElementsByClassName('computerScore')[0]
let playerScore = document.getElementsByClassName('playerScore')[0]
let moves = [rock,paper,scissor];
let ComputersSlection =0;
let UserSelection=0 ;
let usersWinningPoints = 0;
let computerssWinningPoints = 0;

let winnerCheck = () => {
    if(UserSelection==ComputersSlection){
        console.log("Draw")
        winStatus.innerHTML = "DRAW"
    }
    else if(UserSelection==0 && ComputersSlection == 1){
        console.log("Computer Won By Choosing Paper")
        computerssWinningPoints++;
        winStatus.innerHTML = "Computer Won By Choosing Paper";
    }
    else if(UserSelection==0 && ComputersSlection == 2){
        console.log("User Won Computer Chose Scissors")
        usersWinningPoints++;
       winStatus.innerHTML = "You Won, Computer Chose Scissors"
    }
    else if(UserSelection==1 && ComputersSlection==0){
        console.log("User Won Computer Chose Rock")
        usersWinningPoints++;
        winStatus.innerHTML = "You Won, Computer Chose Rock"
    }
    else if(UserSelection==1 && ComputersSlection==2){
        console.log("Computer Won by choosing Scissors")
        computerssWinningPoints++;
        winStatus.innerHTML = "Computer Won by choosing Scissors"
    }
    else if(UserSelection==2 && ComputersSlection==0){
        console.log("Computer Won choosing Rock")
        computerssWinningPoints++;
        winStatus.innerHTML = "Computer Won choosing Rock"
    }
    else if(UserSelection==2 && ComputersSlection==1){
        console.log("User Won Computer Chose Paper")
        usersWinningPoints++;
        winStatus.innerHTML = "You Won, Computer Chose Paper"
    }
    else{
        console.log("Error")
        winStatus.innerHTML = "Error"
    }
    
    playerScore.innerHTML = computerssWinningPoints;
    computerScore.innerHTML = usersWinningPoints;

    if(computerssWinningPoints>usersWinningPoints){
        playerScore.style.color = "red";
        computerScore.style.color = "black"
    }
    else if(computerssWinningPoints<usersWinningPoints){
        computerScore.style.color = "red";
        playerScore.style.color = "black";
    }
    else{
        playerScore.style.color = "black";
        computerScore.style.color = "black"

    }
}

moves.forEach(element => {
    let UsersTurn = () => {
            if(element.className=="rock"){
                UserSelection = 0;
            }
            else if(element.className=="paper"){
                UserSelection = 1;
            }
            else if(element.className=="scissor"){
                UserSelection = 2;
            }
            else{
                console.log("Error");
                
            }
            ComputersTurn();
    }

    element.addEventListener('click',UsersTurn)

});

let ComputersTurn = () => {
    let min = 0;
    let max = 3;
    ComputersSlection = Math.floor(Math.random()* (max-min) * 1);
    // ComputersSelection = Math.floor(Math.random() * 3);
    console.log(ComputersSlection)
    winnerCheck();
}

let resetFuntion = () => {
    usersWinningPoints = 0;
    computerssWinningPoints = 0;
    playerScore.innerHTML = computerssWinningPoints;
    computerScore.innerHTML = usersWinningPoints;
    winStatus.innerHTML ="Lets See who Wins this Time"



} 
playAgainBtn.addEventListener('click',resetFuntion)
