//front end logic
$(document).ready(function() {
  initialDisplay();

  $(".firstPlayer #firstRoll").click(function() {
    player1.turnScore();
    if (y == 1) {
      $("#dice").text(y);
      turn = 0;
      player1.overallTotal;
      alert("player 1 rolled 1");
      $(".firstPlayer span").text(turn);
      switchPlayer2();
    } else {
      $("#dice").text(y);
      $(".firstPlayer span").text(turn);
    }
  });

  $("#firstTotal").click(function() {
    if(player1.totalScore>=100){
      alert("Player 1 Wins");
      initialDisplay();
    }else{
    player1.overallTotal();
    $("#player1Display").text(player1.totalScore);
    switchPlayer2();
    turn = 0;
    $(".firstPlayer span").text(turn);
  }
  });

  $(".secondPlayer #secondRoll").click(function() {
    player2.turnScore();
    if (y == 1) {
      $("#dice").text(y);
      turn = 0;
      player1.overallTotal;
      alert("player 2 rolled 1");
      $(".secondPlayer span").text(turn);
      switchPlayer1()
    } else {
      $("#dice").text(y);
      $(".secondPlayer span").text(turn);
    }
  });

  $("#secondTotal").click(function() {
    if(player2.totalScore>=100){
      alert("Player 2 Wins");
      initialDisplay();
    }else{
    player2.overallTotal();
    $("#player2Display").text(player2.totalScore);
    turn = 0;
    switchPlayer1();
    $(".secondPlayer span").text(turn);
  }
  });
});


//back end logic
var turn = 0;
var y = 0;
var player1 = new player("player1", 90);
var player2 = new player("player2", 90);

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
  $(".secondPlayer").addClass("offTurn");
  $(".firstPlayer").removeClass("offTurn");
}

function switchPlayer2() {
  document.getElementById("firstRoll").disabled = true;
  document.getElementById("firstTotal").disabled = true;
  document.getElementById("secondRoll").disabled = false;
  document.getElementById("secondTotal").disabled = false;
  $(".firstPlayer").addClass("offTurn");
  $(".secondPlayer").removeClass("offTurn");
}

function initialDisplay() {
  turn=0;
  player1.totalScore=0;
  player2.totalScore=0;
  $(".firstPlayer span").text(turn);
  $(".secondPlayer span").text(turn);
  $("#player1Display").text(player1.totalScore);
  $("#player2Display").text(player2.totalScore);
}
