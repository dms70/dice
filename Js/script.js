

var ScoreGlobalP1 = 0;
var ScoreGlobalP2 = 0;
var ScoreRoundP1 = 0; 
var ScoreRoundP2 = 0;
var P1playing = false;
var P2playing = true;
var texteP1 = "PLAYER1";
var texteP2 = "PLAYER2";


const canvasP1 = document.getElementById('scoreplayerp1');
const ctxP1 = canvasP1.getContext('2d');

const canvasP2 = document.getElementById('scoreplayerp2');
const ctxP2 = canvasP2.getContext('2d');



function dipslaycanvas (ctxplayer,ScoreGlobal,texte,Pxplaying) {

var ltexte = ctxplayer.measureText(texte);

ctxplayer.beginPath();
ctxplayer.rect(0, 0, 400, 200);
ctxplayer.closePath();

ctxplayer.beginPath();
ctxplayer.fillStyle = "black";
ctxplayer.font = '48px sans-serif';
ctxplayer.textAlign = 'center';
ctxplayer.fillText(texte, 200, 48);
ctxplayer.closePath();

if (Pxplaying == true) {
  ctxplayer.beginPath();
  ctxplayer.arc(380, 34, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
};


ctxplayer.beginPath();
ctxplayer.fillStyle = "red";
ctxplayer.font = '96px sans-serif';
ctxplayer.textAlign = 'center';
ctxplayer.fillText(ScoreGlobal, 200, 150);
ctxplayer.closePath();

}

function Drawdipslaycanvas (ctxplayer,ScoreGlobal,texte,canvasplayer,Pxplaying) {
ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
dipslaycanvas(ctxplayer,ScoreGlobal,texte,Pxplaying);

}

Drawdipslaycanvas(ctxP1,ScoreGlobalP1,texteP1,canvasP1,P1playing);

Drawdipslaycanvas(ctxP2,ScoreGlobalP2,texteP2,canvasP2,P2playing);






const canvas1 = document.getElementById('diceface');
const ctx1 = canvas1.getContext('2d');

ctx1.beginPath();
ctx1.rect(0, 0, 100, 100);
ctx1.fillStyle = 'white';
ctx1.fill();
ctx1.closePath();

ctx1.beginPath();

ctx1.arc(50, 50, 10, 0, Math.PI*2, false);
ctx1.fillStyle = "red";
ctx1.fill();
ctx1.closePath();


const canvas3 = document.getElementById('roundscore1');
const ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
ctx3.rect(0, 0, 150, 100);
ctx3.fillStyle = "#f35e5e";
ctx3.fill();
ctx3.closePath();


ctx3.beginPath();
ctx3.fillStyle = "black";
ctx3.font = '24px sans-serif';
ctx3.textAlign = 'center';
ctx3.fillText("CURRENT", 75, 40);
ctx3.closePath();


ctx3.beginPath();
ctx3.fillStyle = "white";
ctx3.font = '24px sans-serif';
ctx3.textAlign = 'center';
ctx3.fillText(ScoreRoundP1, 75, 80);
ctx3.closePath();


const canvas4 = document.getElementById('roundscore2');
const ctx4 = canvas4.getContext('2d');

ctx4.beginPath();
ctx4.rect(0, 0, 150, 100);
ctx4.fillStyle = "red";
ctx4.fill();
ctx4.closePath();


ctx4.beginPath();
ctx4.fillStyle = "black";
ctx4.font = '24px sans-serif';
ctx4.textAlign = 'center';
ctx4.fillText("CURRENT", 75, 40);
ctx4.closePath();


ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.font = '24px sans-serif';
ctx4.textAlign = 'center';
ctx4.fillText(ScoreRoundP2, 75, 80);
ctx4.closePath();




function DiceOther() {

  const canvas = document.getElementById('cubeone');
  const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.rect(200, 0, 100, 100);
ctx.fillStyle = 'black';

ctx.closePath();

ctx.beginPath();

ctx.arc(275, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(225, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(400, 0, 100, 100);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(475, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(450, 50, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(425, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(600, 0, 100, 100);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(625, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(675, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(625, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(675, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(800, 0, 100, 100);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(825, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(875, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(825, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(875, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(850, 50, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(1000,0, 100, 100);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1025, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1075, 25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1025, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1075, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1050,25, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(1050, 75, 10, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

}




var button = document.getElementById('iconNewGame')

function NewGame() {

ScoreGlobalP1 = 50
ScoreGlobalP2 = 0
ScoreRoundP1 = 0 
ScoreRoundP2 = 0
vplayingP1 = true
playingP2 = false


if (confirm('SOUHAITEZ VOUS LANCER UNE NOUVELLE PARTIE')) {
ScoreGlobalP1 = 10;
ScoreGlobalP2 = 50;
ScoreRoundP1 = 0 ;
ScoreRoundP2 = 0;
P1playing = true;
P2playing = true;



Drawdipslaycanvas(ctxP1,ScoreGlobalP1,texteP1,canvasP1,P1playing);

Drawdipslaycanvas(ctxP2,ScoreGlobalP2,texteP2,canvasP2,P2playing);


} else {
  
}





}

button.addEventListener('click', NewGame);


function displayScoreGobal() {
  return
}

function displayRound() {
  return
}

function displayDice() {
  return
}









function Hold() {
  return
}

function RollDice() {
  return
}






