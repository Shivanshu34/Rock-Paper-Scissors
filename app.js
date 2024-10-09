let userScore = 0;
let compScore = 0;
let stop_ = 0;

const boxes = document.querySelectorAll(".choice");
const p = document.querySelector(".btn");
const userScoreP = document.querySelector(".user-score");
const compScoreP = document.querySelector(".comp-score");
const front_b = document.querySelector(".front-b");
const front = document.querySelector(".front");
const front_h = document.querySelector(".front-h");
const front_i = document.querySelector(".front-inp");
const front_p = document.querySelector(".front-p");
const quit = document.querySelector(".quit");
const choices_ = document.querySelector("body");

let val_stop = 0;
let ting = new Audio("news-ting-6832.mp3");
let sciS = new Audio("scissors-cutting-paper-1-101193.mp3");
let papS = new Audio("paper-245786.mp3");

let arr = ["rock","paper","scissors"];

boxes.forEach((el)=>
{
    el.addEventListener("click",()=>
    {
        //ting.play();
        stop_++;
        let userId = el.getAttribute("id");
        console.log(userId);
        let compId = compTurn();
        checkWinner(compId,userId);
        if(stop_ == val_stop  && val_stop > 0)
        {
            checkWinner2();
            disabled();
            setTimeout(()=>{
                restart();
            },5000);
            console.log("hii");
        }
    });
});

quit.addEventListener("click",()=>
{
    restart();
});

const disabled = ()=>
{
    boxes.forEach((el)=>
    {
        el.style.pointerEvents = "none";
    });
}

const checkWinner2 = ()=>
{
    if(userScore > compScore)
    {
        choices_.style.backgroundImage = `url("200w.gif")`;
        p.innerText = "You Win!!"
        //console.log("win");
    }
    else if(userScore < compScore)
    {
        choices_.style.backgroundImage = `url("sad.webp")`;
        p.innerText = "You Loose!!"
    }
    else
    {
        choices_.style.backgroundImage = `url("tie.webp")`;
        p.innerText = "Drawed!!"
    }
}

const restart = ()=>
{
        front.style.width = "100%";
        front_b.innerText = "Start";
        front_h.innerText = "Welcome in Rock Paper Scissors Game";
        front_i.style.display = "inline";
        boxes.forEach((el)=>
            {
                el.style.pointerEvents = "auto";
                el.style.opacity = "1"; 
            });
        userScore = 0;
        compScore = 0;
        stop_ = 0;
        p.style.backgroundColor = "#081b31";
        p.innerText = "Play your move";
        userScoreP.innerText = `0`;
        compScoreP.innerText = `0`;
        choices_.style.backgroundImage = "none";
}

front_b.addEventListener("click",()=>
{
    const val = document.querySelector(".front-inp").value;
    val_stop = val;
    
    if(val != "" && val > 0)
    {
        front.style.width = "0%";
        front_b.innerText = "";
        front_h.innerText = "";
        front_i.value = "";
        front_i.style.display = "none";
        if(front_p.innerText != "")
        {
            front_p.innerText = "";
        }
    }
    else
    {
        front_p.innerText = "Please Enter valid value";
    }
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
            ting.play();
            userT = compId == "paper"? false : true;
        }
        else if(userId == "paper")
        {
            papS.play();
            userT = compId == "scissors"? false : true;
        }
        else
        {
            sciS.play();
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
