// accessing the elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-game');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');



// Now we have alternate turn 0 and X
let turn0 = true;

// Storing all the winning patterns
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// Action will happen on clicking the boxes so we will add an eventListener for each boxes
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        // console.log("box was clicked");
        // we want either X or 0 depends on the turn
        if(turn0===true) {//player 0
        box.innerText = "0";
        turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
     })
});


const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
    

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
    const enableBoxes = ()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 

    const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
      };
      
}
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);