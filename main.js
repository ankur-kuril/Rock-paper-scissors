let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "Scissors" ];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `You lose. ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const comChoice = genCompChoice();

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice ==="paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = comChoice === "Scissors" ? false : true;
        }else{
            userWin = comChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, comChoice); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id")
        playGame(userChoice);
    });
})

