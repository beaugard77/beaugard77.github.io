var target = document.getElementById("target");
var gameArea = document.getElementById("gameArea");
var scoreBoard = document.getElementById("scoreBoard");
var score = 0;

function moveTarget() {
  var maxX = gameArea.clientWidth - target.clientWidth;
  var maxY = gameArea.clientHeight - target.clientHeight;
  var randomX = Math.floor(Math.random() * (maxX + 1));
  var randomY = Math.floor(Math.random() * (maxY + 1));
  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

target.addEventListener("click", function(event) {
  score++;
  scoreBoard.innerText = "Score : " + score;
  moveTarget();
});

moveTarget();