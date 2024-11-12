let boxes = document.querySelectorAll(".box");//querySelectorAll return all the nodelist of all boxes from 0 to number of box availavel
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =  document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");
let turnX =true;

// we have to check the winning index and write it into a 2d array all winning index of tic tac toe;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
              
    boxes.forEach((b)=>{
  b.addEventListener("click" , () => {
        if(turnX){
            b.classList.add("ocol");
            b.innerText="X";
            turnX=false;
        }
        else{
             b.innerText="O";
             turnX = true;
        }
        b.disabled=true;
        checkWinner();
  })
});

  const  checkWinner = () => {
         for(let pattern of winPattern){
         
          let pos1Val=  boxes[pattern[0]].innerText;
          let pos2Val=  boxes[pattern[1]].innerText;
          let pos3Val=   boxes[pattern[2]].innerText;
          if(pos1Val !=="" && pos2Val !=="" && pos3Val!==""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
          }
         }
    }
    
    const showWinner = (pos) =>{
        msg.innerText = `Congratulation Winner is ${pos}`;
         disableBox();
        msgContainer.classList.remove("hide");  
    }
    const disableBox = () => {
        for(box of boxes){
            box.disabled=true;
        }
     }
     const enableBox = () => {
        for(box of boxes){
            box.disabled=false;
            box.innerText="";
            box.classList.remove("ocol");
        }
     }
     const resetGame = () =>{
        turnX =true;
        enableBox();

        msgContainer.classList.add("hide");
       }
       newGameBtn.addEventListener("click",resetGame);//not write resetGame() becaues it immideatly call the function without click of button
       resetBtn.addEventListener("click",resetGame);
      