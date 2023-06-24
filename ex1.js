let c=0;
let count=document.getElementById("counter");
let prEntery=document.getElementById("enteries");
let result=document.getElementById("result-btn")
let digit1=document.getElementById("d1");
let digit2=document.getElementById("d2");
let d1= (digit1.textContent)-0;
let d2= (digit2.textContent)-0;
let message=document.getElementById("message");
let gameSum=document.getElementById("gameSum");
let cards=document.getElementById("cards");
let startBtn=document.getElementById("startgame");
let reset=document.getElementById("reset");
let playBtn=document.getElementById("playbtn");
let instruct=document.querySelector(".instruct");
let restartbtn=document.querySelector(".restart");
// Function to generate random number
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function playnow(){
    startBtn.style.display="flex";
    reset.style.display="flex";
    message.style.display="flex";
    gameSum.style.display="flex";
    cards.style.display="flex";
    playBtn.style.display="none";
    instruct.style.display="none"; 
    restartbtn.style.display="flex"; 
}
function start(){
    let firstNumber=randomNumber(2,12);
    let secondNumber=randomNumber(2,12);
    let sumR=firstNumber+secondNumber;
    if(sumR<21){
        message.textContent="Do you want to Play Again?";
        gameSum.textContent="Sum : "+sumR;
        cards.textContent="Cards : "+firstNumber +" , "+secondNumber;
        startBtn.textContent="AGAIN";
        restartbtn.style.display="none";
    }
    else if(sumR===21){
        message.textContent="WELLDONE!! It's a Blackjack";
        gameSum.textContent="Sum : "+sumR;
        cards.textContent="Cards : "+firstNumber +" , "+secondNumber;
        startBtn.style.display="none";
        restartbtn.style.display="flex";
    }
    else {
        message.textContent="Get out of the game!!";
        gameSum.textContent="Sum : "+sumR;
        cards.textContent="Cards : "+firstNumber +" , "+secondNumber;
        startBtn.style.display="none";
        restartbtn.style.display="flex";  
    }
}
function Reset(){
    message.textContent="Want to play a round?";
    gameSum.textContent="Sum : ";
    cards.textContent="Cards : ";
    startBtn.textContent="START";
    startBtn.style.display="flex";
    restartbtn.style.display="none";

}
function restart(){
    startBtn.style.display="none";
    reset.style.display="none";
    message.style.display="none";
    gameSum.style.display="none";
    cards.style.display="none";
    playBtn.style.display="flex";
    instruct.style.display="flex";
    instruct.style.flexDirection="column";
    restartbtn.style.display="none";
}

function increment(){
    c+=1;
    count.textContent=c;
}
function decrement(){
    c-=1;
    count.textContent=c;
    if(c<0){
        alert("Number of Passangers can't be negative");
        c=0;
        count.textContent=c;
    }
}
console.log(prEntery);
function save(){
    prEntery.textContent+=" - "+c;
    c=0;
    count.textContent=c;

}
function subtract(){
    let sub = d1-d2;
    result.textContent ="Result : " +sub;
    
}
function multiply(){
    let multiply = d1*d2;
    result.textContent ="Result : " +multiply;
    
}
function add(){
    let sum = d1+d2;
    result.textContent ="Result : " +sum;
    
}
function divide(){
    let divide = d1/d2;
    result.textContent ="Result : " +divide;
    
}
function refresh(){
    result.textContent ="Result :";
}



