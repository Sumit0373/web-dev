let userScore=0;
let compScore=0;
let drawScore=0;
let totalScore=0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userRun=document.querySelector("#user-score");
let comPRun = document.querySelector("#comp-score");
let drawRun = document.querySelector("#draw-score");
let totalRun = document.querySelector("#total-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log(choice);
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
    console.log("user choice =>",userChoice);
    //generate a user choice 
    const compChoice = generateCompChoice();  // generating the computer choice 
    console.log("comp choice =>", compChoice);
    totalScore=totalScore+1;
    totalRun.innerText=totalScore;
    if(userChoice===compChoice){
        drawGame(compChoice);
    }
    else{
        let userWin = true;
        if(userChoice ==="paper"){
            userWin = (compChoice=="rock")? true:false;
        }
        else if(userChoice==="rock"){
            userWin = (compChoice==="scissors") ? true:false;
        }
        else{
            userWin=(compChoice==="paper")? true:false;
        }
        showWinner(userWin , userChoice  , compChoice);
    }
}

 const generateCompChoice = ()=>{
    const option = ["rock" , "paper" , "scissors"];
    let randomIdx = Math.floor(Math.random()*3); // generate a number between 0 to 2;
    return option[randomIdx];
}

 const  drawGame = (compChoice)=>{
    console.log("game draw");
    msg.innerText = `Game Draw Both choeses ${compChoice} play again`;
    msg.style.backgroundColor="#353238";
    drawScore++;
    drawRun.innerText=drawScore;

 }
 const showWinner =(userWin, userChoice ,compChoice)=>{
     if(userWin){
           userScore+=1;
            msg.innerText = `YOU WIN Your ${userChoice} Beat ${compChoice} `;
           msg.style.backgroundColor="green";
           userRun.innerText=userScore;

     }
     else{
        compScore+= 1;
        comPRun.innerText=compScore;
        msg.innerText=`YOU LOSS because Computer ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor = "red";

     }
 }