//front end logic
$(document).ready(function() {
  initialDisplay();

  $(".firstPlayer #firstRoll").click(function() {
    player1.turnScore();
    if (y == 1) {
      turn = 0;
      player1.overallTotal;
      alert("player rolled 1");
      $(".firstPlayer span").text(turn);
      switchPlayer2();
    } else {
      console.log(turn);
      $("#dice").text(y);
      $(".firstPlayer span").text(turn);
    }
  });

  $("#firstTotal").click(function() {
    player1.overallTotal();
    console.log(player1.totalScore);
    $("#player1Display").text(player1.totalScore);
    switchPlayer2();
    turn = 0;
    $(".firstPlayer span").text(turn);
  });

  $(".secondPlayer #secondRoll").click(function() {
    player2.turnScore();
    if (y == 1) {
      turn = 0;
      player1.overallTotal;
      alert("player rolled 1");
      $(".secondPlayer span").text(turn);
      switchPlayer1()
    } else {
      console.log(turn);
      $("#dice").text(y);
      $(".secondPlayer span").text(turn);
    }
  });

  $("#secondTotal").click(function() {
    player2.overallTotal();
    console.log(player2.totalScore);
    $("#player2Display").text(player2.totalScore);
    turn = 0;
    switchPlayer1();
    $(".secondPlayer span").text(turn);
  });
});


//back end logic
var turn = 0;
var y = 0;
var player1 = new player("player1", 0);
var player2 = new player("player2", 0);

function player(name, total) {
  this.playerName = name;
  this.totalScore = total;
};

player.prototype.turnScore = function() {
  y = Math.floor(Math.random() * (7 - 1)) + 1;;
  window.y = y;
  return turn += y;
}

player.prototype.overallTotal = function() {
  this.totalScore += turn;
  return this.totalScore;
}

function switchPlayer1() {
  document.getElementById("secondRoll").disabled = true;
  document.getElementById("secondTotal").disabled = true;
  document.getElementById("firstRoll").disabled = false;
  document.getElementById("firstTotal").disabled = false;
}

function switchPlayer2() {
  document.getElementById("firstRoll").disabled = true;
  document.getElementById("firstTotal").disabled = true;
  document.getElementById("secondRoll").disabled = false;
  document.getElementById("secondTotal").disabled = false;
}

function initialDisplay() {
  $(".firstPlayer span").text(turn);
  $(".secondPlayer span").text(turn);
  $("#player1Display").text(player1.totalScore);
  $("#player2Display").text(player2.totalScore);
}