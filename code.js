onEvent("startButton", "click", function() {
  setScreen("gameScreen");
  setText("loseWinDisplay", "Simon Says");
  Score = 0; 
  arrayNumber = 1; //fixes bug if you leave game before it ends 
  playerMoves= []; //^
  computerMoves= []; //^
  setText("scoreBox", Score);
  delay(50);
  computerArray();
});
onEvent("goBack", "click", function() {
  setScreen("startScreen");
});
onEvent("viewHighscore", "click", function() {
  setScreen("highScoreScreen");
});
onEvent("goBack2", "click", function() {
  setScreen("startScreen");
});
//#feff00- yellow color--------1
//#004fff- blue color----------2
//ff0000- red color -----------3
//1bdc09- green color ---------4
var arrayNumber = 1;
var playerMoves = [];
var computerMoves= [];
var Score = 0;
var highScore=0;


//changes color based off of pre-determined array
function computerArray (){
 for (var i=0; i < arrayNumber; i++){
  computerMoves.push(randomNumber(1,4));
  var currentLight = computerMoves[i];
  if (currentLight==1) 
  {
  SetYellow();
  }
  if (currentLight==2) 
  { 
  SetBlue();
  }
  if (currentLight==3) 
  {
  SetRed();
  }
  if (currentLight==4) 
  {
  SetGreen();
  }
 }
}
  
function waitCheck(m){
playerMoves.push(m);
delay(100);
checkCorrect();
}

function delay(ms){
  var startTime = new Date();
  var currentTime = null;
  do { currentTime = new Date(); }
  while(currentTime - startTime < ms);
}

function checkCorrect() {
  if (playerMoves.length == computerMoves.length) {
      if(JSON.stringify(playerMoves) === JSON.stringify(computerMoves))
      {
      arrayNumber++;
      Score++;
      setText("scoreBox", Score);
      playerMoves=[];
      computerMoves=[];
      computerArray();
      } 
      else 
      {
        checkHighScore();
    }
  }
}

function checkHighScore(){
arrayNumber = 1;
playerMoves= [];
computerMoves= [];
if (Score>highScore) 
{
highScore=Score;
setText("highScoreText", highScore);
setText("loseWinDisplay", "High Score");
}
else
{
setText("loseWinDisplay", "   You Lose"); 
 }
}

function SetYellow() {
setProperty("yellowButton", "background-color", "#C5C515");
delay(300);
setProperty("yellowButton", "background-color", "#feff00");
delay(100);
}

function SetBlue() {
setProperty("blueButton", "background-color", "#1A449E");
delay(300);
setProperty("blueButton", "background-color", "#004fff");
delay(100);
}

function SetRed() {
setProperty("redButton", "background-color", "#C91616");
delay(300);
setProperty("redButton", "background-color", "#ff0000");
delay(100);
}

function SetGreen() {
setProperty("greenButton", "background-color", "#209e14");
delay(300);
setProperty("greenButton", "background-color", "#1bdc09");
delay(100);
}


//yellow change on-event
onEvent("yellowButton", "click", function(){
setProperty("yellowButton","background-color", "#C5C515");
delay(300);
setProperty("yellowButton", "background-color", "#feff00");
waitCheck(1);
});

//blue change on-event
onEvent("blueButton", "click", function(){
setProperty("blueButton","background-color", "#1A449E");
delay(300);
setProperty("blueButton", "background-color", "#004fff");
waitCheck(2);
});

//red change on-event
onEvent("redButton", "click", function(){
setProperty("redButton","background-color", "#C91616");
delay(300);
setProperty("redButton", "background-color", "#ff0000");
waitCheck(3);
});

//green change on-event 
onEvent("greenButton", "click", function(){
setProperty("greenButton","background-color", "#209e14");
delay(300);
setProperty("greenButton", "background-color", "#1bdc09");
waitCheck(4);
});
