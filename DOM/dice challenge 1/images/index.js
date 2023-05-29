// alert("WELCOME TO DICE GAME");

var n=Math.random();
var diceNumber=Math.floor(n*6)+1;
// alert(diceNumber);
var d;
if(diceNumber===1){
    document.querySelector(".player1 img ").setAttribute("src","dice1.png");
}
else if(diceNumber===2){
    document.querySelector(".player1 img ").setAttribute("src","dice2.png");
}
else if(diceNumber===3){
    document.querySelector(".player1 img ").setAttribute("src","dice3.png");
}
else if(diceNumber===4){
    document.querySelector(".player1 img ").setAttribute("src","dice4.png");
}else if(diceNumber===5){
    document.querySelector(".player1 img ").setAttribute("src","dice5.png");
}
else {
    document.querySelector(".player1 img ").setAttribute("src","dice6.png");
}



var m=Math.random();
var diceNumber2=Math.floor(m*6)+1;
// alert(diceNumber2);

if(diceNumber2===1){
    document.querySelector(".player2 img ").setAttribute("src","dice1.png");
}
else if(diceNumber2===2){
    document.querySelector(".player2 img ").setAttribute("src","dice2.png");
}
else if(diceNumber2===3){
    document.querySelector(".player2 img ").setAttribute("src","dice3.png");
}
else if(diceNumber2===4){
    document.querySelector(".player2 img ").setAttribute("src","dice4.png");
}else if(diceNumber2===5){
    document.querySelector(".player2 img ").setAttribute("src","dice5.png");
}
else {
    document.querySelector(".player2 img ").setAttribute("src","dice6.png");
}



function game(diceNumber,diceNumber2){
    if(diceNumber>diceNumber2){
        document.querySelector("h1").innerHTML="🏆Player1 wins🏆";
    }
    else if(diceNumber<diceNumber2){
        document.querySelector("h1").innerHTML="🏆Player2 wins🏆";
    }
    else{
        document.querySelector("h1").innerHTML="it's a DRAW!⚡⭐";
    }
}

game(diceNumber,diceNumber2);