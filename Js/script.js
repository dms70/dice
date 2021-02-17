ScoreGlobalP1 = 0;
ScoreGlobalP2 = 0;
ScoreRoundP1 = 0; 
ScoreRoundP2 = 0;
P1playing = true;
P2playing = false;
TexteP1 = "PLAYER1";
TexteP2 = "PLAYER2";
TexteScoreRound = "CURRENT";
ColorCurrent = "#f35e5e"
ColorPlaying = "#09e01b"

// FOR THE GLOBAL SCORE
const canvasP1 = document.getElementById('scoreplayerp1');
const ctxP1 = canvasP1.getContext('2d');
const canvasP2 = document.getElementById('scoreplayerp2');
const ctxP2 = canvasP2.getContext('2d');

// FOR THE CUURENT SCORE
const canvasP3 = document.getElementById('roundscore1');
const ctxScoreRound1 = canvasP3.getContext('2d');
const canvasP4 = document.getElementById('roundscore2');
const ctxScoreRound2 = canvasP4.getContext('2d');

// FOR THE DICE
const canvasP5 = document.getElementById('diceface');
const ctxDice = canvasP5.getContext('2d');

var buttonNewGame = document.getElementById('NewGame')
var buttonRollDice = document.getElementById('iconRollDice')
var buttonHold = document.getElementById('iconHold')


buttonNewGame.addEventListener('click', NewGame);
buttonRollDice.addEventListener('click', RollDice);
buttonHold.addEventListener('click', Hold);

// DISPLAY THE ALL PAGE WITH ALL GRAPHICAL ELEMENTS 
Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);
DrawdisplayScoreRound(ctxScoreRound1,ScoreRoundP1,TexteScoreRound,canvasP3,ColorCurrent);
DrawdisplayScoreRound(ctxScoreRound2,ScoreRoundP2,TexteScoreRound,canvasP4,ColorCurrent);
DrawDisplayDiceSix(ctxDice,canvasP5);



function displaycanvas (ctxplayer,ScoreGlobal,texte,Pxplaying) {

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


// DISPLAY PLAYER WITH GLOBAL SCORE
function Drawdisplaycanvas (ctxplayer,ScoreGlobal,texte,canvasplayer,Pxplaying) {
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  displaycanvas(ctxplayer,ScoreGlobal,texte,Pxplaying);
}


function displayScoreRound (ctxplayer,ScoreRound,texte,color) {

ctxplayer.beginPath();
ctxplayer.rect(0, 0, 150, 100);
ctxplayer.fillStyle = color;
ctxplayer.fill();
ctxplayer.closePath();


ctxplayer.beginPath();
ctxplayer.fillStyle = "black";
ctxplayer.font = '24px sans-serif';
ctxplayer.textAlign = 'center';
ctxplayer.fillText(texte, 75, 40);
ctxplayer.closePath();


ctxplayer.beginPath();
ctxplayer.fillStyle = "white";
ctxplayer.font = '24px sans-serif';
ctxplayer.textAlign = 'center';
ctxplayer.fillText(ScoreRound, 75, 80);
ctxplayer.closePath();

}

// DISPLAY THE CURRENT SCORE
function DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorCurrent) {
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  displayScoreRound(ctxplayer,ScoreRound,texte,ColorCurrent);
  
}



// ACTION FOR NEW GAME   
function NewGame() {

if (confirm('SOUHAITEZ VOUS LANCER UNE NOUVELLE PARTIE')) {
ScoreGlobalP1 = 0;
ScoreGlobalP2 = 0;
ScoreRoundP1 = 0 ;
ScoreRoundP2 = 0;
P1playing = true;
P2playing = false;

Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);
DrawdisplayScoreRound(ctxScoreRound1,ScoreGlobalP1,TexteScoreRound,canvasP3,ColorPlaying);
DrawdisplayScoreRound(ctxScoreRound2,ScoreGlobalP1,TexteScoreRound,canvasP4,ColorCurrent);
DrawDisplayDiceOne (ctxDice,canvasP5);
}

}

// ACTION FOR HOLD THE SCORE
function Hold() {  




  // ADD SCORE ROUND TO SCORE GLOBAL + CHANGE CURRENT PLAYER 
  if (P1playing == true ) {  
    ScoreGlobalP1 = ScoreGlobalP1 + ScoreRoundP1;

    // CASE IF SCORE GLOBAL + CURRENT IS MORE THAN 100
    if (ScoreGlobalP1 >= 100 ) {
      alert('PLAYER1 you win');
      NewGame();
    } 

    ScoreRoundP1 = 0;
    ScoreRoundP2 = 0;
    P1playing = false ;
    P2playing = true ;

  
    console.log (ScoreRoundP1);
    console.log (ScoreRoundP2);

    Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
    Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);
    DrawdisplayScoreRound(ctxScoreRound1,ScoreRoundP1,TexteScoreRound,canvasP3,ColorCurrent);
    DrawdisplayScoreRound(ctxScoreRound2,ScoreRoundP2,TexteScoreRound,canvasP4,ColorPlaying);
    DrawDisplayDice(ctxDice,canvasP5);
    } else  {  
      ScoreGlobalP2 =  ScoreGlobalP2 + ScoreRoundP2;
     
        // CASE IF SCORE GLOBAL + CURRENT IS MORE THAN 100
        if (ScoreGlobalP2 >= 100 ) {
          alert('PLAYER2 you win');
          NewGame();
        }    

      ScoreRoundP1 = 0;
      ScoreRoundP2 = 0;
      P2playing = false ;
      P1playing = true ;

      Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
      Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);
      DrawdisplayScoreRound(ctxScoreRound1,ScoreRoundP1,TexteScoreRound,canvasP3,ColorPlaying);
      DrawdisplayScoreRound(ctxScoreRound2,ScoreRoundP2,TexteScoreRound,canvasP4,ColorCurrent);
      DrawDisplayDice(ctxDice,canvasP5);
    }

}

// ACTION FOR ROLL THE DICE 
function RollDice() {

  console.log(P1playing)

  if (P1playing == true ) {     
     ctxplayer = ctxScoreRound1;
     ScoreRound = ScoreRoundP1;
     ScoreGlobal = ScoreGlobalP1;
     texte = TexteScoreRound; 
     canvasplayer = canvasP3; }

  if (P2playing == true ) {    
     ctxplayer = ctxScoreRound2; 
     ScoreRound = ScoreRoundP2;   
     ScoreGlobal = ScoreGlobalP2;  
     texte = TexteScoreRound;   
     canvasplayer = canvasP4;  
  }

  
  // CASE TO DISPLAY THE DICE + DISPLAY THE SCORE
  DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorCurrent)

    RandomFace=Math.floor(Math.random() * (6 - 1 +1) + 1);
    console.log(RandomFace);
    
    switch (RandomFace) {
      case 1:
        // PERDU - ScoreGolabal ne bouge pas et passe la main à lautre joueur
        DrawDisplayDiceOne(ctxDice,canvasP5);
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur1     
        

        ScoreRound = 0 
        if (P1playing == true ) {      
          P1playing = false;
          P2playing = true;    
          DrawdisplayScoreRound(ctxScoreRound1,ScoreRound,TexteScoreRound,canvasP3,ColorCurrent);
          DrawdisplayScoreRound(ctxScoreRound2,ScoreRound,TexteScoreRound,canvasP4,ColorPlaying);
        } else {
          
          P2playing = false;
          P1playing = true;
          DrawdisplayScoreRound(ctxScoreRound1,ScoreRound,TexteScoreRound,canvasP3,ColorPlaying);
          DrawdisplayScoreRound(ctxScoreRound2,ScoreRound,TexteScoreRound,canvasP4,ColorCurrent);
        }
        
        Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
        Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);
      
        break;
      case 2:
        DrawDisplayDiceTwo(ctxDice,canvasP5);
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        ScoreRound = ScoreRound + RandomFace;
        DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorPlaying)
  
        break;
      case 3:
        DrawDisplayDiceThree(ctxDice,canvasP5);
        
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        ScoreRound = ScoreRound + RandomFace;
        DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorPlaying)
        break;
      case 4:
        DrawDisplayDiceFour(ctxDice,canvasP5);
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        ScoreRound = ScoreRound + RandomFace;
        DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorPlaying)
        break;
      case 5:
        DrawDisplayDiceFive(ctxDice,canvasP5);
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        ScoreRound = ScoreRound + RandomFace;
        DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorPlaying)
        break;
      case 6:
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        DrawDisplayDiceSix(ctxDice,canvasP5);
        ScoreRound = ScoreRound + RandomFace;
        DrawdisplayScoreRound (ctxplayer,ScoreRound,texte,canvasplayer,ColorPlaying)
      break;
    }

  if (P1playing == true ) {  
    ScoreRoundP1 = ScoreRound ;
  }
  if (P2playing == true ) {  
    ScoreRoundP2 = ScoreRound ;
  }

  if (ScoreRound + ScoreGlobal >= 100 ) {
    console.log('you win');
  }

  Drawdisplaycanvas(ctxP1,ScoreGlobalP1,TexteP1,canvasP1,P1playing);
  Drawdisplaycanvas(ctxP2,ScoreGlobalP2,TexteP2,canvasP2,P2playing);

  // SI SCORE GLOABL + SCORE ROUND = ou > 100 THEN WIN + END GAME
  if (ScoreRound + ScoreGlobal >= 100 ) {
    console.log('you win');
  } 
}

function DisplayDice (ctxplayer) {
  ctxplayer.beginPath();
  ctxplayer.rect(0, 0, 100, 100);
  ctxplayer.fillStyle = 'white';
  ctxplayer.fill();
  ctxplayer.closePath();
}

// DISPLAY THE DICE STRUCTURE ONLY
function DrawDisplayDice (ctxplayer,canvasplayer) {
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  DisplayDice(ctxplayer);
}


function DisplayDiceOne (ctxplayer) {
  DisplayDice(ctxplayer);
  ctxplayer.beginPath();
  ctxplayer.arc(50, 50, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
}

// DISPLAY THE ONE DICE
function DrawDisplayDiceOne (ctxplayer,canvasplayer) {
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  DisplayDiceOne(ctxplayer);
}

// DISPLAY THE TWO DICE
function DisplayDiceTwo (ctxplayer) {

  DisplayDice(ctxplayer);
  
  ctxplayer.beginPath();
  ctxplayer.arc(75, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
 
  ctxplayer.beginPath();
  ctxplayer.arc(25, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
}
  
// DISPLAY THE THREE DICE
function DrawDisplayDiceTwo (ctxplayer,canvasplayer) {
  
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  DisplayDiceTwo(ctxplayer);
  
}
  

function DisplayDiceThree (ctxplayer) {

DisplayDice(ctxplayer);

  ctxplayer.beginPath();
  ctxplayer.arc(75, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();

  ctxplayer.beginPath();
  ctxplayer.arc(50, 50, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();

  ctxplayer.beginPath();
  ctxplayer.arc(25, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
      
}
    
// DISPLAY THE THREE DICE
function DrawDisplayDiceThree (ctxplayer,canvasplayer) {
    
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  DisplayDiceThree(ctxplayer);
   
}

function DisplayDiceFour (ctxplayer) {

  DisplayDice(ctxplayer);
  ctxplayer.beginPath();
  ctxplayer.arc(25, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();

  ctxplayer.beginPath();
  ctxplayer.arc(75, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();

  ctxplayer.beginPath();
  ctxplayer.arc(25, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();

  ctxplayer.beginPath();
  ctxplayer.arc(75, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
        
  }
   
  // DISPLAY THE FOUR DICE
  function DrawDisplayDiceFour (ctxplayer,canvasplayer) {
      
    ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
    DisplayDiceFour(ctxplayer); 
   
  }

  function DisplayDiceFive (ctxplayer) {

    DisplayDice(ctxplayer);

    ctxplayer.beginPath();
    ctxplayer.arc(25, 25, 10, 0, Math.PI*2, false);
    ctxplayer.fillStyle = "red";
    ctxplayer.fill();
    ctxplayer.closePath();
    
    ctxplayer.beginPath();
    ctxplayer.arc(75, 25, 10, 0, Math.PI*2, false);
    ctxplayer.fillStyle = "red";
    ctxplayer.fill();
    ctxplayer.closePath();
    
    ctxplayer.beginPath();
    ctxplayer.arc(25, 75, 10, 0, Math.PI*2, false);
    ctxplayer.fillStyle = "red";
    ctxplayer.fill();
    ctxplayer.closePath();
    
    ctxplayer.beginPath();
    ctxplayer.arc(75, 75, 10, 0, Math.PI*2, false);
    ctxplayer.fillStyle = "red";
    ctxplayer.fill();
    ctxplayer.closePath();
    
    ctxplayer.beginPath();
    ctxplayer.arc(50, 50, 10, 0, Math.PI*2, false);
    ctxplayer.fillStyle = "red";
    ctxplayer.fill();
    ctxplayer.closePath();    
  }
       
// DIPSLAY THE FIVE DICE
function DrawDisplayDiceFive (ctxplayer,canvasplayer) {
        
      ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
      DisplayDiceFive(ctxplayer);
       
    }


function DisplayDiceSix (ctxplayer) {

  DisplayDice(ctxplayer);
  ctxplayer.beginPath();
  ctxplayer.arc(25, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
  ctxplayer.beginPath();
  ctxplayer.arc(75, 25, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
  ctxplayer.beginPath();
  ctxplayer.arc(25, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
  ctxplayer.beginPath();
  ctxplayer.arc(75, 75, 10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
  ctxplayer.beginPath();
  ctxplayer.arc(25,50,10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
  
  ctxplayer.beginPath();
  ctxplayer.arc(75,50,10, 0, Math.PI*2, false);
  ctxplayer.fillStyle = "red";
  ctxplayer.fill();
  ctxplayer.closePath();
           
}
     
// DISPLAY THE SIX DICE
function DrawDisplayDiceSix (ctxplayer,canvasplayer) {
          
  ctxplayer.clearRect(0,0, canvasplayer.width, canvasplayer.height);
  DisplayDiceSix(ctxplayer);
         
}