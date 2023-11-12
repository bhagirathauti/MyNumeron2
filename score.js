const scoreBoard = document.getElementById("score");
scoree = localStorage.getItem("scoree")
scoreBoard.innerText=scoree;

const playAgain = document.getElementById("playAgain")
playAgain.onclick=()=>{
    window.location.href="./index.html"
}