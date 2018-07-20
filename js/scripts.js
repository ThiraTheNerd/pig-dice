var player1 = new player("player1", 0);
var player2 = new player("player2", 0);
$(document).ready(function() {

  $(".firstPlayer #roll").click(function(event) {
    event.preventDefault();

    //var player1 = new player("player1", 0, 0);
    //window.player1 = player1;
    player1.turnScore();
    console.log(turn);
  });

  $(".firstPlayer #total").click(function(event) {
    player1.overallTotal();
    console.log(player1.totalScore);
    turn = 0;
  });

  $(".secondPlayer #roll").click(function(event) {
    event.preventDefault();

    //var player2 = new player("player2", 0, 0);
    //window.player2 = player2;
    //$(".secondPlayer span").text(turn);
    player2.turnScore();
    console.log(turn);

  });

  $(".secondPlayer #total").click(function(event) {
    player2.overallTotal();
    console.log(player2.totalScore);
    turn = 0;
  });
});


//back end logic
turn = 0;

function player(name, total, turn) {
  this.playerName = name;
  this.totalScore = total;
};

player.prototype.turnScore = function() {
  turn += diceRoll();
  return turn;
}

player.prototype.overallTotal = function() {
  this.totalScore += turn;
  return this.totalScore;
}

function diceRoll() {
  min = Math.ceil(7);
  max = Math.floor(1);
  var y = Math.floor(Math.random() * (max - min)) + min;
  return y;
}
