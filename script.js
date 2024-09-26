let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
// console.log(choices);
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    // console.log(`Choice was Clicked! ${userChoice}.`);
    playGame(userChoice);
  });
});

let playGame = (userChoice) => {
  // console.log(`User Choice = ${userChoice}`);
  // Generate Computer Choice
  let compChoice = genCompChoice();
  // console.log(`Computer Choice = ${compChoice}`);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

let genCompChoice = () => {
  let choiceArr = ["rock", "paper", "scissors"];
  let randidx = Math.floor(Math.random() * 3);
  return choiceArr[randidx];
};

let drawGame = () => {
  // console.log("Game was Draw!");
  msg.innerText = "Game was Draw, Play Again!";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You Win.");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user_score.innerText = userScore;
  } else {
    // console.log("You Lose.");
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    comp_score.innerText = compScore;
  }
};
