 var gameArea = document.getElementById("gameArea");
 var fruit = document.getElementById("fruit");
 var scoreBoard = document.getElementById("scoreBoard");
 var pauseButton = document.getElementById("pauseButton");

 var score = 0;
 var fruitSpeed = 2; 
 var isPaused = false;
 var gameInterval;

 function resetFruit() {
   fruitY = 0;
   var maxX = gameArea.clientWidth - fruit.clientWidth;
   var randomX = Math.floor(Math.random() * (maxX + 1));
   fruit.style.left = randomX + "px";
   fruit.style.top = fruitY + "px";
 }

 function updateGame() {
   if (!isPaused) {
     fruitY += fruitSpeed;
     fruit.style.top = fruitY + "px";

   if (fruitY > gameArea.clientHeight) {
       resetFruit();
     }
   }
 }

 function startGame() {
   gameInterval = setInterval(updateGame, 20);
 }

 function togglePause() {
   isPaused = !isPaused;
   pauseButton.innerText = isPaused ? 'Reprendre' : 'Pause';
 }

 fruit.addEventListener("click", function() {
   if (!isPaused) {
     score++;
     scoreBoard.innerText = "Score : " + score;
     resetFruit();
   }
 });

easyButton.addEventListener("click", function() {
    fruitSpeed = 2;
    easyButton.style.backgroundColor = "#018333";  
    hardButton.style.backgroundColor = "#86b384";
  });
  
hardButton.addEventListener("click", function() {
    fruitSpeed = 5;
    hardButton.style.backgroundColor = "#018333";  
    easyButton.style.backgroundColor = "#86b384";
  });

 pauseButton.addEventListener("click", togglePause);

 resetFruit();
 startGame();