let userScore = 0;
let compScore = 0;

const boxes = document.querySelectorAll(".choice");
const p = document.querySelector(".btn");
const userScoreP = document.querySelector(".user-score");
const compScoreP = document.querySelector(".comp-score");

let arr = ["rock","paper","scissors"];

boxes.forEach((el)=>
{
    el.addEventListener("click",()=>
    {
        let userId = el.getAttribute("id");
        console.log(userId);
        let compId = compTurn();
        checkWinner(compId,userId);
    });
});

const compTurn = ()=>
{
    let n = Math.floor(Math.random()*3);
    return arr[n];
}

const checkWinner = (compId,userId)=>
{
    let userT = false;
    if(compId === userId)
    {
        p.style.backgroundColor = "#081b31";
        p.innerText = "Game drawed Play again to win";
        console.log("Game drawed");
    }
    else
    {
        if(userId == "rock")
        {
            userT = compId == "paper"? false : true;
        }
        else if(userId == "paper")
        {
            userT = compId == "scissors"? false : true;
        }
        else
        {
            userT = compId == "rock"? false : true;
        }
        if(userT)
        {
            userScore++;
            userWin(userId,compId);
        }
        else
        {
            compScore++;
            compWin(userId,compId);
            console.log("comp win");
        }
    }
}

const userWin = (user,comp)=>
{
    p.style.backgroundColor = "green";
    p.innerText = `You win! your ${user} beats ${comp}`;
    userScoreP.style.opacity = "0.9";
    userScoreP.innerText = `${userScore}`;
}

const compWin = (user,comp)=>
    {
        p.style.backgroundColor = "red";
        p.innerText = `You lost. your ${user} lost to ${comp}`;
        compScoreP.style.opacity = "0.9";
        compScoreP.innerText = `${compScore}`;
    }