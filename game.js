let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score");
const compChoice = () => {
    const options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again!!";
    msg.style.backgroundColor = "blue"
};

const showWinner = (userWin, userChoice , compChoice1 ) => {

    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice1}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Loss");
        msg.innerText = `You Loss ${compChoice1} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice1 = compChoice();
    console.log("Comp Choice = ",compChoice1);

    if(userChoice === compChoice1) {
        drawGame();
    }else {
       let userWin = true;
       if(userChoice === "rock") {
       userWin = compChoice1 === "paper" ? false : true;
       } else if(userChoice === "paper"){
        userWin = compChoice1 === "scissor" ? false : true;
       }else {
        userWin = compChoice1 === "rock" ? false : true;
       }
       showWinner(userWin, userChoice, compChoice1);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

