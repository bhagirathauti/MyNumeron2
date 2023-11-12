const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")

let n1=Math.round(Math.random()*100)
let n2=Math.round(Math.random()*100)

num1.innerHTML=n1;
num2.innerHTML=n2;

var score = 0;
var operator;
const plus = document.getElementById("sym1")
const minus = document.getElementById("sym2")
const mul = document.getElementById("sym3")
const div = document.getElementById("sym4")
const mod = document.getElementById("sym5")

var n3;
function randomise(){
    n1=Math.round(Math.random()*100)
    n2=Math.round(Math.random()*100)
    if(n1<n2){
        temp = n1;
        n1 = n2;
        temp=n2;
    }
    operator = Math.round(Math.random()*4)
    switch(operator){
        case 0:
        n3=n1+n2;
        break;
        case 1:
        n3=n1-n2;
        break;
        case 2:
        n3=n1*n2;
        break;
        case 3:
        n3=n1/n2;
        break;
        case 4:
        n3=n1%n2;
        break;
    }
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    num3.innerHTML=Math.round(n3);
}
randomise()

plus.onclick=()=>{
    if(n1+n2===n3){
        score++;
        randomise();
        resetTimer()
    }
    else{
        window.location.href="./game-over.html"
    }
}
minus.onclick=()=>{
    if(n1-n2===n3){
        score++;
        randomise();
        resetTimer()
    }
    else{
        window.location.href="./game-over.html"
    }
}
mul.onclick=()=>{
    if(n1*n2===n3){
        score++;
        randomise();
        resetTimer()
    }
    else{
        window.location.href="./game-over.html"
    }
}
div.onclick=()=>{
    if(n1/n2===n3){
        score++;
        randomise();
        resetTimer()
    }
    else{
        window.location.href="./game-over.html"
    }
}
mod.onclick=()=>{
    if(n1%n2===n3){
        score++;
        randomise();
        resetTimer()
    }
    else{
        window.location.href="./game-over.html"
    }
}
const timer = document.getElementById("timer")
var timerId;

function startTimer(){
    let time=7;
    timer.innerHTML=time;
    timerId = setInterval(()=>{
        time--;
        if(time==0){
            window.location.href = "./game-over.html"
        }
        timer.innerHTML=time;
        localStorage.setItem("scoree",score)
    },1000)
}
function resetTimer(timerId){
    clearInterval(timerId);
    startTimer()
}
startTimer()
